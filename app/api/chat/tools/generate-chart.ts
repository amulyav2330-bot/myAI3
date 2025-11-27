import { tool } from "ai";
import { z } from "zod";

export const generateChart = tool({
  description: "Generates an actual visual chart/graph image. Use this tool when the user needs to see a chart comparing solar system sizes, ROI curves, savings projections, or any data visualization. Returns a rendered chart that displays in the chat.",
  inputSchema: z.object({
    chartType: z.enum(["bar", "line", "comparison"]).describe("Type of chart: 'bar' for bar chart, 'line' for line/ROI curves, 'comparison' for before/after comparison"),
    title: z.string().describe("Chart title"),
    xAxisLabel: z.string().describe("Label for X-axis"),
    yAxisLabel: z.string().describe("Label for Y-axis"),
    data: z.array(z.object({
      name: z.string().describe("Data point label (e.g., '3 kW', 'Year 1', 'Before Solar')"),
      value: z.number().describe("Primary value for this data point"),
      value2: z.number().optional().describe("Secondary value for comparison charts"),
    })).describe("Array of data points to plot"),
    colors: z.object({
      primary: z.string().optional().describe("Primary color (default: #FF9800)"),
      secondary: z.string().optional().describe("Secondary color for comparisons (default: #FFC107)"),
    }).optional(),
  }),
  execute: async ({ chartType, title, xAxisLabel, yAxisLabel, data, colors }) => {
    const primaryColor = colors?.primary || "#FF9800";
    const secondaryColor = colors?.secondary || "#FFC107";
    
    const chartConfig = {
      chartType,
      title,
      xAxisLabel,
      yAxisLabel,
      data,
      colors: { primary: primaryColor, secondary: secondaryColor },
    };

    return {
      type: "chart",
      config: chartConfig,
    };
  },
});
