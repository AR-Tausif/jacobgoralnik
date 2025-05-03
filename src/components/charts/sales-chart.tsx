"use client"

import { ChartConfiguration } from "chart.js"
import { useEffect, useRef } from "react"

export default function SalesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      import("chart.js").then(({ Chart, registerables }) => {
        Chart.register(...registerables)

        const ctx = canvasRef.current?.getContext("2d")
        if (!ctx) return

        const chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Revenue",
                data: [3500, 4200, 3800, 5100, 4800, 6200, 7500, 8200, 7800, 8500, 9200, 10500],
                borderColor: "rgb(79, 70, 229)",
                backgroundColor: "rgba(79, 70, 229, 0.1)",
                tension: 0.3,
                fill: true,
              },
              {
                label: "Orders",
                data: [250, 320, 280, 410, 390, 550, 620, 680, 640, 710, 790, 850],
                borderColor: "rgb(16, 185, 129)",
                backgroundColor: "rgba(16, 185, 129, 0.0)",
                tension: 0.3,
                borderDash: [5, 5],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                align: "end",
              },
              tooltip: {
                mode: "index",
                intersect: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  // drawBorder: false,
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        })

        return () => {
          chart.destroy()
        }
      })
    }
  }, [])

  return (
    <div className="h-80">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
