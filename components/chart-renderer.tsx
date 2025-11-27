"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface ChartData {
  name: string;
  value: number;
  value2?: number;
}

interface ChartConfig {
  chartType: "bar" | "line" | "comparison";
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: ChartData[];
  colors: {
    primary: string;
    secondary: string;
  };
}

export function ChartRenderer({ config }: { config: ChartConfig }) {
  const { chartType, title, xAxisLabel, yAxisLabel, data, colors } = config;

  const formatValue = (value: number) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }
    return `₹${value}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-orange-200">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {formatValue(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-xl p-4 shadow-md border border-orange-100 my-4">
      <h3 className="text-lg font-semibold text-center mb-4" style={{ color: '#E65100' }}>
        {title}
      </h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" || chartType === "comparison" ? (
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#FFE0B2" />
              <XAxis 
                dataKey="name" 
                label={{ value: xAxisLabel, position: 'bottom', offset: -5, fill: '#795548' }}
                tick={{ fill: '#795548' }}
              />
              <YAxis 
                tickFormatter={formatValue}
                label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', fill: '#795548' }}
                tick={{ fill: '#795548' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="value" name={chartType === "comparison" ? "After Solar" : yAxisLabel} fill={colors.primary} radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors.primary} />
                ))}
              </Bar>
              {chartType === "comparison" && (
                <Bar dataKey="value2" name="Before Solar" fill={colors.secondary} radius={[4, 4, 0, 0]} />
              )}
            </BarChart>
          ) : (
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#FFE0B2" />
              <XAxis 
                dataKey="name" 
                label={{ value: xAxisLabel, position: 'bottom', offset: -5, fill: '#795548' }}
                tick={{ fill: '#795548' }}
              />
              <YAxis 
                tickFormatter={formatValue}
                label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', fill: '#795548' }}
                tick={{ fill: '#795548' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={colors.primary} 
                strokeWidth={3}
                dot={{ fill: colors.primary, strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, fill: colors.secondary }}
                name={yAxisLabel}
              />
              {data.some(d => d.value2 !== undefined) && (
                <Line 
                  type="monotone" 
                  dataKey="value2" 
                  stroke={colors.secondary} 
                  strokeWidth={3}
                  dot={{ fill: colors.secondary, strokeWidth: 2, r: 5 }}
                  name="Comparison"
                />
              )}
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
