import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Download, Edit, Filter, Mail, Plus, Search, Trash } from "lucide-react"

export default function SubscribersPage() {
  const subscribers = [
    {
      id: 1,
      email: "john.doe@example.com",
      name: "John Doe",
      status: "Active",
      source: "Website",
      dateSubscribed: "2023-09-12",
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      name: "Jane Smith",
      status: "Active",
      source: "Checkout",
      dateSubscribed: "2023-09-11",
    },
    {
      id: 3,
      email: "robert.johnson@example.com",
      name: "Robert Johnson",
      status: "Active",
      source: "Website",
      dateSubscribed: "2023-09-10",
    },
    {
      id: 4,
      email: "emily.davis@example.com",
      name: "Emily Davis",
      status: "Unsubscribed",
      source: "Popup",
      dateSubscribed: "2023-09-09",
    },
    {
      id: 5,
      email: "michael.wilson@example.com",
      name: "Michael Wilson",
      status: "Active",
      source: "Website",
      dateSubscribed: "2023-09-08",
    },
    {
      id: 6,
      email: "sarah.thompson@example.com",
      name: "Sarah Thompson",
      status: "Bounced",
      source: "Checkout",
      dateSubscribed: "2023-09-07",
    },
    {
      id: 7,
      email: "david.brown@example.com",
      name: "David Brown",
      status: "Active",
      source: "Popup",
      dateSubscribed: "2023-09-06",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Subscribers</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Mail size={16} />
            Send Campaign
          </Button>
          <Button className="flex items-center gap-1">
            <Plus size={16} />
            Add Subscriber
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Total Subscribers</h3>
          <p className="mt-2 text-3xl font-semibold">8,942</p>
          <p className="mt-1 text-xs text-green-600">+12.5% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Active</h3>
          <p className="mt-2 text-3xl font-semibold">8,245</p>
          <p className="mt-1 text-xs text-green-600">+8.2% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Unsubscribed</h3>
          <p className="mt-2 text-3xl font-semibold">542</p>
          <p className="mt-1 text-xs text-red-600">+15.7% from last month</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Bounced</h3>
          <p className="mt-2 text-3xl font-semibold">155</p>
          <p className="mt-1 text-xs text-red-600">+2.3% from last month</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search subscribers..."
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={14} />
              Filter
            </Button>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Unsubscribed</option>
              <option>Bounced</option>
            </select>
            <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option>All Sources</option>
              <option>Website</option>
              <option>Checkout</option>
              <option>Popup</option>
              <option>Manual</option>
            </select>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download size={14} />
              Export
            </Button>
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
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Email
                    <ChevronDown size={14} className="ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
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
                  Source
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    Date Subscribed
                    <ChevronDown size={14} className="ml-1" />
                  </div>
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
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{subscriber.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{subscriber.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        subscriber.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : subscriber.status === "Unsubscribed"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{subscriber.source}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{subscriber.dateSubscribed}</div>
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
                        <Mail size={16} />
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of{" "}
            <span className="font-medium">8,942</span> results
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
