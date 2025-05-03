import { Search, Filter, AlertTriangle, CheckCircle } from "lucide-react"
import ReviewsTable from "../_components/reviews-table"


export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Review Management</h1>
        <p className="text-gray-500">Manage product reviews and handle disputed content.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <h3 className="text-2xl font-bold mt-1">1,245</h3>
            </div>
            <div className="bg-primary-50 rounded-full p-3">
              <CheckCircle className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">Disputed Reviews</p>
              <h3 className="text-2xl font-bold mt-1">28</h3>
            </div>
            <div className="bg-accent-50 rounded-full p-3">
              <AlertTriangle className="h-6 w-6 text-accent-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">Average Rating</p>
              <h3 className="text-2xl font-bold mt-1">4.2/5</h3>
            </div>
            <div className="bg-secondary-50 rounded-full p-3">
              <svg
                className="h-6 w-6 text-secondary-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search reviews..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4">
            <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-md flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Review Status Filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm">All Reviews</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Pending</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Approved</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
            <AlertTriangle className="h-4 w-4" />
            <span>Disputed</span>
          </button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Rejected</button>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ReviewsTable />
      </div>
    </div>
  )
}
