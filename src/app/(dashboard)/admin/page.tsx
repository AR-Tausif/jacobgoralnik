import { Card } from "@/components/ui/card";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import RecentOrdersTable from "@/components/tables/recent-orders-table";
import SalesChart from "@/components/charts/sales-chart";
import TopSellingProducts from "@/components/top-selling-products";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 12 months</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          trend="up"
          icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Orders"
          value="2,345"
          change="+12.5%"
          trend="up"
          icon={<ShoppingCart className="h-6 w-6 text-emerald-600" />}
        />
        <StatCard
          title="Products"
          value="12,456"
          change="+8.2%"
          trend="up"
          icon={<Package className="h-6 w-6 text-amber-600" />}
        />
        <StatCard
          title="Active Vendors"
          value="573"
          change="+4.6%"
          trend="up"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <SalesChart />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <TopSellingProducts />
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
            View all
          </a>
        </div>
        <RecentOrdersTable />
      </Card>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  trend,
  icon,
}: {
  title: string;
  value: string;
  change: any;
  trend: any;
  icon: any;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-2">{icon}</div>
      </div>
      <div
        className={`mt-2 flex items-center text-sm ${
          trend === "up" ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {trend === "up" ? (
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        )}
        <span>{change}</span>
        <span className="text-gray-500 ml-1">from last period</span>
      </div>
    </Card>
  );
}
