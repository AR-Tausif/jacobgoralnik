import { Search, Filter, Download, Plus } from "lucide-react"
import UserTable from "../_components/users-table"


export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">User Management</h1>
          <p className="text-gray-500">Manage all users including customers, vendors, and administrators.</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Plus className="h-5 w-5" />
          <span>Add User</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4">
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

        {/* User Type Filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm">All Users</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Customers</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Vendors</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Administrators</button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <UserTable />
      </div>
    </div>
  )
}
