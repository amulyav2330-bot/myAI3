import { NextRequest, NextResponse } from 'next/server';
import jsPDF from 'jspdf';

interface ReportData {
  location: string;
  monthlyBill: number;
  monthlyConsumption: number;
  systemSize: number;
  estimatedCost: number;
  subsidy: number;
  netCost: number;
  annualGeneration: number;
  annualSavings: number;
  paybackPeriod: number;
  lifetimeSavings: number;
  co2Offset: number;
}

function calculateSolarMetrics(monthlyBill: number, location: string): ReportData {
  const avgTariff = 8;
  const monthlyConsumption = monthlyBill / avgTariff;
  const dailyConsumption = monthlyConsumption / 30;
  const systemSize = Math.ceil(dailyConsumption / 4);
  const costPerKw = 55000;
  const estimatedCost = systemSize * costPerKw;
  
  let subsidyPercent = 0.4;
  if (systemSize > 3) subsidyPercent = 0.2;
  const subsidy = Math.min(estimatedCost * subsidyPercent, systemSize <= 3 ? 78000 : 78000 + (systemSize - 3) * 30000);
  const netCost = estimatedCost - subsidy;
  
  const annualGeneration = systemSize * 4 * 365;
  const annualSavings = annualGeneration * avgTariff;
  const paybackPeriod = netCost / annualSavings;
  const lifetimeSavings = (annualSavings * 25) - netCost;
  const co2Offset = annualGeneration * 0.82 / 1000;
  
  return {
    location: location || "Maharashtra",
    monthlyBill,
    monthlyConsumption: Math.round(monthlyConsumption),
    systemSize,
    estimatedCost,
    subsidy: Math.round(subsidy),
    netCost: Math.round(netCost),
    annualGeneration: Math.round(annualGeneration),
    annualSavings: Math.round(annualSavings),
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    lifetimeSavings: Math.round(lifetimeSavings),
    co2Offset: Math.round(co2Offset * 10) / 10,
  };
}

function generatePDF(data: ReportData): Uint8Array {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  doc.setFillColor(255, 152, 0);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('SOLSTICE', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Solar Energy Analysis Report', pageWidth / 2, 32, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, pageWidth / 2, 40, { align: 'center' });
  
  let y = 60;
  
  doc.setTextColor(230, 81, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Property Information', 14, y);
  y += 10;
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Location: ${data.location}`, 14, y);
  y += 7;
  doc.text(`Monthly Electricity Bill: Rs. ${data.monthlyBill.toLocaleString('en-IN')}`, 14, y);
  y += 7;
  doc.text(`Monthly Consumption: ${data.monthlyConsumption} kWh`, 14, y);
  y += 15;
  
  doc.setFillColor(255, 243, 224);
  doc.roundedRect(14, y, pageWidth - 28, 45, 3, 3, 'F');
  y += 10;
  
  doc.setTextColor(230, 81, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Recommended System', 20, y);
  y += 10;
  
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(20);
  doc.text(`${data.systemSize} kW`, 20, y);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Solar Rooftop System', 55, y);
  y += 10;
  
  doc.setFontSize(10);
  doc.text(`Annual Generation: ~${data.annualGeneration.toLocaleString('en-IN')} kWh`, 20, y);
  y += 25;
  
  doc.setTextColor(230, 81, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Investment Summary', 14, y);
  y += 12;
  
  const tableData = [
    ['System Cost', `Rs. ${data.estimatedCost.toLocaleString('en-IN')}`],
    ['MNRE Subsidy (PM Surya Ghar)', `- Rs. ${data.subsidy.toLocaleString('en-IN')}`],
    ['Your Net Investment', `Rs. ${data.netCost.toLocaleString('en-IN')}`],
  ];
  
  doc.setFillColor(245, 245, 245);
  tableData.forEach((row, index) => {
    if (index % 2 === 0) {
      doc.setFillColor(255, 248, 225);
    } else {
      doc.setFillColor(255, 255, 255);
    }
    doc.rect(14, y - 5, pageWidth - 28, 10, 'F');
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(11);
    doc.setFont('helvetica', index === 2 ? 'bold' : 'normal');
    doc.text(row[0], 20, y);
    doc.text(row[1], pageWidth - 20, y, { align: 'right' });
    y += 10;
  });
  y += 10;
  
  doc.setTextColor(230, 81, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Financial Benefits', 14, y);
  y += 12;
  
  doc.setFillColor(232, 245, 233);
  doc.roundedRect(14, y - 5, (pageWidth - 34) / 2, 35, 3, 3, 'F');
  doc.setFillColor(227, 242, 253);
  doc.roundedRect(pageWidth / 2 + 3, y - 5, (pageWidth - 34) / 2, 35, 3, 3, 'F');
  
  doc.setTextColor(46, 125, 50);
  doc.setFontSize(10);
  doc.text('Annual Savings', 20, y);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Rs. ${data.annualSavings.toLocaleString('en-IN')}`, 20, y + 12);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('per year', 20, y + 22);
  
  doc.setTextColor(25, 118, 210);
  doc.setFontSize(10);
  doc.text('Payback Period', pageWidth / 2 + 9, y);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.paybackPeriod} Years`, pageWidth / 2 + 9, y + 12);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('to recover investment', pageWidth / 2 + 9, y + 22);
  y += 45;
  
  doc.setFillColor(255, 235, 238);
  doc.roundedRect(14, y - 5, pageWidth - 28, 30, 3, 3, 'F');
  
  doc.setTextColor(198, 40, 40);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('25-Year Lifetime Savings', 20, y);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(`Rs. ${data.lifetimeSavings.toLocaleString('en-IN')}`, 20, y + 15);
  y += 40;
  
  doc.setTextColor(230, 81, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Environmental Impact', 14, y);
  y += 12;
  
  doc.setFillColor(232, 245, 233);
  doc.roundedRect(14, y - 5, pageWidth - 28, 25, 3, 3, 'F');
  
  doc.setTextColor(46, 125, 50);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Annual CO2 Offset: ${data.co2Offset} tonnes`, 20, y + 5);
  doc.text(`Equivalent to planting ~${Math.round(data.co2Offset * 45)} trees per year`, 20, y + 15);
  y += 35;
  
  doc.setFillColor(255, 152, 0);
  doc.rect(0, doc.internal.pageSize.getHeight() - 25, pageWidth, 25, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Disclaimer: Estimates based on current MSEDCL tariffs and MNRE subsidy rates. Actual results may vary.', pageWidth / 2, doc.internal.pageSize.getHeight() - 15, { align: 'center' });
  doc.text('Generated by Solstice AI | www.solstice.in | support@solstice.in', pageWidth / 2, doc.internal.pageSize.getHeight() - 8, { align: 'center' });
  
  const arrayBuffer = doc.output('arraybuffer');
  return new Uint8Array(arrayBuffer);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { monthlyBill, location } = body;
    
    if (!monthlyBill || isNaN(monthlyBill)) {
      return NextResponse.json(
        { error: 'Monthly bill amount is required' },
        { status: 400 }
      );
    }
    
    const data = calculateSolarMetrics(Number(monthlyBill), location || 'Maharashtra');
    const pdfBuffer = generatePDF(data);
    
    return new Response(pdfBuffer.buffer as ArrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Solstice_Solar_Report_${new Date().toISOString().split('T')[0]}.pdf"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}
