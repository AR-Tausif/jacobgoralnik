"use client"

import { useEffect, useRef } from "react"

export default function SalesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // This is a placeholder for a real chart library
    // In a real application, you would use a library like Chart.js or Recharts
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set canvas dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height

    // Draw a simple line chart
    const data = [12000, 19000, 15000, 22000, 18000, 24000, 25000]
    const maxValue = Math.max(...data)
    const padding = 40

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    for (let i = 0; i <= gridLines; i++) {
      const y = padding + ((height - 2 * padding) / gridLines) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.strokeStyle = "#f3f4f6"
      ctx.stroke()

      // Draw y-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`$${Math.round(((maxValue / gridLines) * (gridLines - i)) / 1000)}k`, padding - 10, y + 3)
    }

    // Draw x-axis labels
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const xStep = (width - 2 * padding) / (days.length - 1)
    days.forEach((day, i) => {
      const x = padding + xStep * i
      ctx.fillStyle = "#6b7280"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(day, x, height - padding + 15)
    })

    // Draw line
    ctx.beginPath()
    data.forEach((value, i) => {
      const x = padding + xStep * i
      const y = height - padding - ((height - 2 * padding) * value) / maxValue
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = "#2563eb"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw points
    data.forEach((value, i) => {
      const x = padding + xStep * i
      const y = height - padding - ((height - 2 * padding) * value) / maxValue
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = "#2563eb"
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw area under the line
    ctx.beginPath()
    ctx.moveTo(padding, height - padding)
    data.forEach((value, i) => {
      const x = padding + xStep * i
      const y = height - padding - ((height - 2 * padding) * value) / maxValue
      ctx.lineTo(x, y)
    })
    ctx.lineTo(width - padding, height - padding)
    ctx.closePath()
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(37, 99, 235, 0.2)")
    gradient.addColorStop(1, "rgba(37, 99, 235, 0)")
    ctx.fillStyle = gradient
    ctx.fill()
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full"></canvas>
    </div>
  )
}
