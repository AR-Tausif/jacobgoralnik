"use client"

import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Data for the bar chart
const productData = [
  { name: "Vehicles", value: 18000, color: "#9f7aea" },
  { name: "Books", value: 28000, color: "#4fd1c5" },
  { name: "Rentals", value: 22000, color: "#000000" },
  { name: "Furniture", value: 30000, color: "#90cdf4" },
  { name: "Health", value: 12000, color: "#a0aec0" },
  { name: "Kitchen", value: 24000, color: "#68d391" },
]

// Data for the pie chart
const locationData = [
  { name: "United States", value: 52.1, color: "#1a202c" },
  { name: "Canada", value: 22.8, color: "#90cdf4" },
  { name: "Mexico", value: 13.9, color: "#9ae6b4" },
  { name: "Other", value: 11.2, color: "#e2e8f0" },
]

export default function BarAndPieOverviewChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <Card className="bg-gray-50 border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Marketplace product</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#888" }} dy={10} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#888" }}
                  tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}K`)}
                  domain={[0, 30000]}
                  ticks={[0, 10000, 20000, 30000]}
                />
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString()}`, "Value"]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #f0f0f0",
                    borderRadius: "6px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card className="bg-gray-50 border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Traffic by Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center">
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={160}>
                  <PieChart>
                    <Pie
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Percentage"]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #f0f0f0",
                        borderRadius: "6px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center">
                {locationData.map((item, index) => (
                  <div key={index} className="flex items-center mb-2 last:mb-0">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                      <span className="text-xs text-gray-700">{item.name}</span>
                    </div>
                    <span className="ml-auto text-xs font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
