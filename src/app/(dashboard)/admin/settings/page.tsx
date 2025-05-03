import { BRAND_NAME } from "@/assets/data/home-static-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bell, CreditCard, Globe, Lock, Mail, Save, Settings, User } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <Button className="flex items-center gap-1">
          <Save size={16} />
          Save Changes
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-64 space-y-4">
          <div className="sticky top-6">
            <nav className="flex flex-col space-y-1">
              <a
                href="#general"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-indigo-50 text-indigo-600"
              >
                <Settings className="mr-3 h-4 w-4" />
                General
              </a>
              <a
                href="#account"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-3 h-4 w-4" />
                Account
              </a>
              <a
                href="#security"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Lock className="mr-3 h-4 w-4" />
                Security
              </a>
              <a
                href="#billing"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <CreditCard className="mr-3 h-4 w-4" />
                Billing
              </a>
              <a
                href="#notifications"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Bell className="mr-3 h-4 w-4" />
                Notifications
              </a>
              <a
                href="#email"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Mail className="mr-3 h-4 w-4" />
                Email
              </a>
              <a
                href="#localization"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Globe className="mr-3 h-4 w-4" />
                Localization
              </a>
            </nav>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <Card className="p-6" id="general">
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="site-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <input
                  type="text"
                  id="site-name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue={BRAND_NAME}
                />
              </div>
              <div>
                <label htmlFor="site-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Site Description
                </label>
                <textarea
                  id="site-description"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="A multivendor ecommerce platform for vendors to create their store and sell their products."
                ></textarea>
              </div>
              <div>
                <label htmlFor="site-url" className="block text-sm font-medium text-gray-700 mb-1">
                  Site URL
                </label>
                <input
                  type="text"
                  id="site-url"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="https://notunbazar.com"
                />
              </div>
              <div>
                <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="admin-email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="admin@notunbazar.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Mode</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="maintenance-mode"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="maintenance-mode" className="ml-2 block text-sm text-gray-700">
                    Enable maintenance mode
                  </label>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  When enabled, the site will display a maintenance page to visitors.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6" id="account">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="admin"
                />
              </div>
              <div>
                <label htmlFor="display-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  id="display-name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="Admin User"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="admin@notunbazar.com"
                />
              </div>
              <div>
                <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Picture
                </label>
                <div className="flex items-center">
                  <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500">AD</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Picture
                  </Button>
                </div>
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="Administrator of Notun Bazar multivendor ecommerce platform."
                ></textarea>
              </div>
            </div>
          </Card>

          <Card className="p-6" id="security">
            <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Confirm new password"
                />
              </div>
              <div className="pt-2">
                <Button>Update Password</Button>
              </div>
              <div className="border-t pt-4 mt-4">
                <h3 className="text-md font-medium mb-2">Two-Factor Authentication</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enable-2fa"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="enable-2fa" className="ml-2 block text-sm text-gray-700">
                    Enable two-factor authentication
                  </label>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Add an extra layer of security to your account by requiring both your password and a verification
                  code.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6" id="billing">
            <h2 className="text-lg font-semibold mb-4">Billing Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Plan</label>
                <div className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                  <div>
                    <p className="font-medium">Professional Plan</p>
                    <p className="text-sm text-gray-500">$49.99/month</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Upgrade
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <div className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                  <div className="flex items-center">
                    <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center mr-3">
                      <span className="text-xs font-medium">VISA</span>
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
                <div className="bg-gray-50 rounded-md p-3">
                  <p>John Doe</p>
                  <p>123 Main St.</p>
                  <p>Anytown, CA 12345</p>
                  <p>United States</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Edit
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Billing History</label>
                <div className="border rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Sep 01, 2023</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">$49.99</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-indigo-600">
                          <a href="#">Download</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Aug 01, 2023</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">$49.99</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800">
                            Paid
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-indigo-600">
                          <a href="#">Download</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
