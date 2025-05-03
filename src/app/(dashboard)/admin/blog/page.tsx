import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Edit, Eye, Filter, Plus, Search, Trash } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Summer Fashion Trends for 2023",
      author: "Jessica Taylor",
      category: "Fashion",
      date: "2023-09-10",
      status: "Published",
      views: 1245,
      comments: 32,
    },
    {
      id: 2,
      title: "How to Choose the Perfect Kitchen Appliances",
      author: "Michael Chen",
      category: "Home & Kitchen",
      date: "2023-09-05",
      status: "Published",
      views: 876,
      comments: 18,
    },
    {
      id: 3,
      title: "The Ultimate Guide to Smartphone Photography",
      author: "David Kim",
      category: "Technology",
      date: "2023-09-01",
      status: "Published",
      views: 2145,
      comments: 45,
    },
    {
      id: 4,
      title: "5 Exercises for a Full Body Workout at Home",
      author: "Emily Rodriguez",
      category: "Fitness",
      date: "2023-08-28",
      status: "Published",
      views: 1532,
      comments: 27,
    },
    {
      id: 5,
      title: "Upcoming Tech Gadgets to Watch in 2024",
      author: "Robert Johnson",
      category: "Technology",
      date: "2023-08-20",
      status: "Draft",
      views: 0,
      comments: 0,
    },
    {
      id: 6,
      title: "Sustainable Living: Small Changes with Big Impact",
      author: "Sarah Johnson",
      category: "Lifestyle",
      date: "2023-08-15",
      status: "Draft",
      views: 0,
      comments: 0,
    },
  ]

  const categories = [
    { id: 1, name: "Fashion", count: 12 },
    { id: 2, name: "Technology", count: 18 },
    { id: 3, name: "Home & Kitchen", count: 9 },
    { id: 4, name: "Fitness", count: 7 },
    { id: 5, name: "Lifestyle", count: 14 },
    { id: 6, name: "Food", count: 11 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Manage Blog</h1>
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1">
            <Plus size={16} />
            New Post
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-3 space-y-6">
          <Card className="p-6">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search posts..."
                  className="w-full rounded-md border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter size={14} />
                  Filter
                </Button>
                <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  <option>All Categories</option>
                  <option>Fashion</option>
                  <option>Technology</option>
                  <option>Home & Kitchen</option>
                  <option>Fitness</option>
                  <option>Lifestyle</option>
                  <option>Food</option>
                </select>
                <select className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  <option>All Status</option>
                  <option>Published</option>
                  <option>Draft</option>
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
                        Title
                        <ChevronDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        Date
                        <ChevronDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        Views
                        <ChevronDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Comments
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
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{post.author}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{post.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{post.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{post.views.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{post.comments}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            post.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.status}
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
                            <Eye size={16} />
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
                Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{" "}
                <span className="font-medium">24</span> results
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

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="ml-2 text-xs text-gray-500">({category.count})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <Edit size={14} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="New category"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <Button size="sm" className="ml-2">
                  Add
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Posts</span>
                  <span className="text-sm font-medium">24</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published</span>
                  <span className="text-sm font-medium">18</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-600 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Drafts</span>
                  <span className="text-sm font-medium">6</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-600 h-1.5 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Views</span>
                  <span className="text-sm font-medium">5,798</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Comments</span>
                  <span className="text-sm font-medium">122</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
