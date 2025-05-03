import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bold, Italic, Link, List, ListOrdered, Save } from "lucide-react"

export default function FooterPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Footer Settings</h1>
        <Button className="flex items-center gap-1">
          <Save size={16} />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Footer Content</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="footer-logo" className="block text-sm font-medium text-gray-700 mb-1">
                  Footer Logo
                </label>
                <div className="flex items-center">
                  <div className="h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                    <span className="text-gray-500">Logo</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Logo
                  </Button>
                </div>
              </div>

              <div>
                <label htmlFor="footer-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Footer Description
                </label>
                <div className="border rounded-md">
                  <div className="flex items-center border-b px-3 py-2">
                    <button className="p-1 rounded hover:bg-gray-100 mr-1">
                      <Bold size={16} />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 mr-1">
                      <Italic size={16} />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 mr-1">
                      <Link size={16} />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 mr-1">
                      <List size={16} />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 mr-1">
                      <ListOrdered size={16} />
                    </button>
                  </div>
                  <textarea
                    id="footer-description"
                    rows={4}
                    className="w-full p-3 text-sm focus:outline-none focus:ring-0"
                    placeholder="Enter footer description..."
                    defaultValue="Notun Bazar is a leading multivendor ecommerce platform that connects sellers with customers worldwide. Our mission is to empower entrepreneurs and businesses of all sizes to reach new markets and grow their online presence."
                  ></textarea>
                </div>
              </div>

              <div>
                <label htmlFor="copyright-text" className="block text-sm font-medium text-gray-700 mb-1">
                  Copyright Text
                </label>
                <input
                  type="text"
                  id="copyright-text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="© 2023 Notun Bazar. All rights reserved."
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Footer Columns</h2>
            <div className="space-y-6">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Column 1</h3>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Column Title</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="Quick Links"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Links</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Link text"
                        className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="Home"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        className="flex-1 rounded-r-md border border-gray-300 border-l-0 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="/"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Link text"
                        className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="Shop"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        className="flex-1 rounded-r-md border border-gray-300 border-l-0 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="/shop"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Link text"
                        className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="About"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        className="flex-1 rounded-r-md border border-gray-300 border-l-0 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="/about"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Add Link
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Column 2</h3>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Column Title</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="Customer Service"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Links</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Link text"
                        className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="Contact Us"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        className="flex-1 rounded-r-md border border-gray-300 border-l-0 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="/contact"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Link text"
                        className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="FAQ"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        className="flex-1 rounded-r-md border border-gray-300 border-l-0 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        defaultValue="/faq"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Add Link
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Add Column
              </Button>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Social Media</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://facebook.com/yourbrand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://twitter.com/yourbrand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://instagram.com/yourbrand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://linkedin.com/company/yourbrand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">YouTube</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://youtube.com/yourbrand"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Footer Display</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="show-payment-icons"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="show-payment-icons" className="ml-2 block text-sm text-gray-700">
                  Show payment method icons
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="show-newsletter"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="show-newsletter" className="ml-2 block text-sm text-gray-700">
                  Show newsletter signup
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="show-social"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="show-social" className="ml-2 block text-sm text-gray-700">
                  Show social media icons
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="show-language"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="show-language" className="ml-2 block text-sm text-gray-700">
                  Show language selector
                </label>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
