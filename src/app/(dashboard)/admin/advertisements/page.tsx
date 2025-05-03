import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart, ChevronDown, Edit, Filter, Plus, Search, Trash } from "lucide-react"

export default function AdvertisementsPage() {
  const advertisements = [
    {
      id: 1,
      name: "Summer Sale Banner",
      type: "Banner",
      placement: "Homepage",
      startDate: "2023-06-01",
      endDate: "2023-09-30",
      impressions: 45892,
      clicks: 3245,
      status: "Active",
    },
    {
      id: 2,
      name: "New Collection Popup",
      type: "Popup",
      placement: "All Pages",
      startDate: "2023-09-01",
      endDate: "2023-09-15",
      impressions: 28456,
      clicks: 1876,
      status: "Active",
    },
    {
      id: 3,
      name: "Holiday Special Sidebar",
      type: "Sidebar",
      placement: "Category Pages",
      startDate: "2023-11-15",
      endDate: "2023-12-31",
      impressions: 0,
      clicks: 0,
      status: "Scheduled",
    },
    {
      id: 4,
      name: "Flash Sale Notification",
      type: "Notification",
      placement: "All Pages",
      startDate: "2023-08-25",
      endDate: "2023-08-27",
      impressions: 32567,
      clicks: 4532,
      status: "Ended",
    },
    {
      id: 5,
      name: "Vendor Spotlight",
      type: "Banner",
      placement: "Homepage",
      startDate: "2023-09-10",
      endDate: "2023-09-20",
      impressions: 12453,
      clicks: 876,
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Advertisements</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <BarChart size={16} />
            Analytics
          </Button>
          <Button className="flex items-center gap-1">
            <Plus size={16} />
            Create Ad
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Total Impressions</h3>
          <p className="mt-2 text-3xl font-semibold">119,368</p>
          <p className="mt-1 text-xs text-green-600">+12.5% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Total Clicks</h3>
          <p className="mt-2 text-3xl font-semibold">10,529</p>
          <p className="mt-1 text-xs text-green-600">+8.2% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">CTR</h3>
          <p className="mt-2 text-3xl font-semibold">8.82%</p>
          <p className="mt-1 text-xs text-red-600">-1.3% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Active Campaigns</h3>
          <p className="mt-2 text-3xl font-semibold">3</p>
          <p className="mt-1 text-xs text-gray-500">of 5 total campaigns</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search advertisements..."
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={14} />
              Filter
            </Button>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Types</option>
              <option>Banner</option>
              <option>Popup</option>
              <option>Sidebar</option>
              <option>Notification</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Placements</option>
              <option>Homepage</option>
              <option>Category Pages</option>
              <option>Product Pages</option>
              <option>All Pages</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Scheduled</option>
              <option>Ended</option>
              <option>Paused</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Name
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Placement
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Date Range
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Impressions
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Clicks
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  CTR
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {advertisements.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{ad.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{ad.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{ad.placement}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {ad.startDate} - {ad.endDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ad.impressions.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ad.clicks.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {ad.impressions > 0 ? ((ad.clicks / ad.impressions) * 100).toFixed(2) : "0.00"}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        ad.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : ad.status === "Scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : ad.status === "Ended"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {ad.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <BarChart size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
            <span className="font-medium">5</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
