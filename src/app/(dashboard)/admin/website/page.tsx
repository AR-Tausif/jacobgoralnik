import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Edit, Globe, ImageIcon, LayoutGrid, Layers, Plus, Settings } from "lucide-react"

export default function WebsitePage() {
  const pages = [
    {
      id: 1,
      title: "Home",
      slug: "/",
      lastUpdated: "2023-09-10",
      status: "Published",
    },
    {
      id: 2,
      title: "About Us",
      slug: "/about",
      lastUpdated: "2023-09-05",
      status: "Published",
    },
    {
      id: 3,
      title: "Contact",
      slug: "/contact",
      lastUpdated: "2023-09-01",
      status: "Published",
    },
    {
      id: 4,
      title: "Terms & Conditions",
      slug: "/terms",
      lastUpdated: "2023-08-15",
      status: "Published",
    },
    {
      id: 5,
      title: "Privacy Policy",
      slug: "/privacy",
      lastUpdated: "2023-08-15",
      status: "Published",
    },
    {
      id: 6,
      title: "FAQ",
      slug: "/faq",
      lastUpdated: "2023-08-10",
      status: "Draft",
    },
  ]

  const banners = [
    {
      id: 1,
      title: "Summer Sale",
      position: "Home Hero",
      startDate: "2023-06-01",
      endDate: "2023-09-30",
      status: "Active",
    },
    {
      id: 2,
      title: "New Arrivals",
      position: "Category Page",
      startDate: "2023-09-01",
      endDate: "2023-10-15",
      status: "Active",
    },
    {
      id: 3,
      title: "Holiday Special",
      position: "Home Secondary",
      startDate: "2023-11-15",
      endDate: "2023-12-31",
      status: "Scheduled",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Manage Website</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Settings size={16} />
            Site Settings
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Globe size={16} />
            View Site
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer transition-colors">
          <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
            <LayoutGrid className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium">Pages</h3>
          <p className="text-sm text-gray-500 mt-1">Manage website pages and content</p>
        </Card>
        <Card className="p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer transition-colors">
          <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
            <ImageIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium">Banners</h3>
          <p className="text-sm text-gray-500 mt-1">Manage promotional banners and sliders</p>
        </Card>
        <Card className="p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer transition-colors">
          <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
            <Layers className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium">Navigation</h3>
          <p className="text-sm text-gray-500 mt-1">Manage menus and navigation structure</p>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Pages</h2>
            <Button size="sm" className="flex items-center gap-1">
              <Plus size={16} />
              Add Page
            </Button>
          </div>
          <div className="overflow-x-auto -mx-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Slug
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Updated
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
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{page.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{page.slug}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{page.lastUpdated}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          page.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        <Edit size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Globe size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Banners</h2>
            <Button size="sm" className="flex items-center gap-1">
              <Plus size={16} />
              Add Banner
            </Button>
          </div>
          <div className="overflow-x-auto -mx-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Range
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
                {banners.map((banner) => (
                  <tr key={banner.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{banner.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{banner.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {banner.startDate} - {banner.endDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          banner.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {banner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        <Edit size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <ImageIcon size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
