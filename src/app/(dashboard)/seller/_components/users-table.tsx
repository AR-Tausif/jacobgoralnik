import { Edit, MoreHorizontal, Trash } from "lucide-react"

const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Customer",
    status: "Active",
    joined: "2023-01-15",
    orders: 12,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Vendor",
    status: "Active",
    joined: "2023-02-20",
    orders: 0,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Customer",
    status: "Inactive",
    joined: "2023-01-05",
    orders: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Admin",
    status: "Active",
    joined: "2022-11-10",
    orders: 0,
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    role: "Customer",
    status: "Active",
    joined: "2023-03-01",
    orders: 8,
  },
  {
    id: 6,
    name: "Jennifer Taylor",
    email: "jennifer.taylor@example.com",
    role: "Vendor",
    status: "Pending",
    joined: "2023-03-15",
    orders: 0,
  },
  {
    id: 7,
    name: "David Martinez",
    email: "david.martinez@example.com",
    role: "Customer",
    status: "Active",
    joined: "2023-02-05",
    orders: 3,
  },
]

export default function UserTable() {
  const getRoleClass = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800"
      case "Vendor":
        return "bg-blue-100 text-blue-800"
      case "Customer":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
            <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">{user.name}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{user.email}</td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleClass(user.role)}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="py-4 px-6 text-sm">
                <span
                  className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{new Date(user.joined).toLocaleDateString()}</td>
              <td className="py-4 px-6 text-sm text-gray-500">{user.orders}</td>
              <td className="py-4 px-6 text-sm text-right">
                <div className="flex justify-end items-center space-x-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Trash className="h-4 w-4" />
                  </button>
                  <div className="relative">
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
