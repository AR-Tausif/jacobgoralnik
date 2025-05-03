import { DollarSign, Package, ShoppingBag, Users } from "lucide-react"
import DashboardCard from "./_components/dashboard-card"
import SalesChart from "./_components/sales-chart"
import TopSellingProducts from "./_components/top-selling-products"
import RecentOrdersTable from "./_components/recent--orders-table"


export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, Admin! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Revenue"
          value="$24,345.00"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="h-6 w-6" />}
          color="bg-primary-50"
          iconColor="text-primary-600"
        />
        <DashboardCard
          title="Total Orders"
          value="1,245"
          change="+8.2%"
          trend="up"
          icon={<ShoppingBag className="h-6 w-6" />}
          color="bg-secondary-50"
          iconColor="text-secondary-600"
        />
        <DashboardCard
          title="Total Products"
          value="3,456"
          change="+5.3%"
          trend="up"
          icon={<Package className="h-6 w-6" />}
          color="bg-accent-50"
          iconColor="text-accent-600"
        />
        <DashboardCard
          title="Total Customers"
          value="12,594"
          change="-2.4%"
          trend="down"
          icon={<Users className="h-6 w-6" />}
          color="bg-gray-100"
          iconColor="text-gray-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Sales Overview</h2>
            <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <SalesChart />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-6">Top Selling Products</h2>
          <TopSellingProducts />
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 pb-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">View All Orders</button>
          </div>
        </div>
        <RecentOrdersTable />
      </div>

      {/* Vendor Performance */}
        {/* <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Vendor Performance</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">View All Vendors</button>
          </div>
          <VendorPerformance />
        </div> */}
    </div>
  )
}
