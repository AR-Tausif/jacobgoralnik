import { Download, Filter, Search } from "lucide-react"
import TransactionsSummary from "../_components/transactions-summary"
import TransactionsTable from "../_components/transactions-table"


export default function VendorTransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Transactions</h1>
        <p className="text-gray-500">Track all financial transactions for your store products.</p>
      </div>

      {/* Summary Cards */}
      <TransactionsSummary />

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="custom">Custom Range</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
            <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Transaction Status Filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm">All Transactions</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Completed</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Pending</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Processing</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Failed</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Refunded</button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TransactionsTable />
      </div>
    </div>
  )
}
