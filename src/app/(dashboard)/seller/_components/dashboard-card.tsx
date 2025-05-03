import type React from "react"
import { ArrowDown, ArrowUp } from "lucide-react"

interface DashboardCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ReactNode
  color: string
  iconColor: string
}

export default function DashboardCard({ title, value, change, trend, icon, color, iconColor }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className="flex items-center mt-2">
            {trend === "up" && (
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>{change}</span>
              </div>
            )}
            {trend === "down" && (
              <div className="flex items-center text-red-600 text-sm">
                <ArrowDown className="h-3 w-3 mr-1" />
                <span>{change}</span>
              </div>
            )}
            <span className="text-gray-500 text-xs ml-2">vs last month</span>
          </div>
        </div>
        <div className={`${color} rounded-full p-3`}>
          <div className={iconColor}>{icon}</div>
        </div>
      </div>
    </div>
  )
}
