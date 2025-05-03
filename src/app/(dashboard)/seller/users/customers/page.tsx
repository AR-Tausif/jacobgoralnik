// Suggested code may be subject to a license. Learn more: ~LicenseLog:1988505187.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1492648849.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1184170807.
"use client"

import React, { useState } from "react";
import {Download, EllipsisVertical, Eye, Filter, Plus, Search} from "lucide-react"
import ProductsTable from "../../_components/products-table";
import CustomersTable from "../../_components/customer-table";


const CustomersPage = ()=>{
    return(
        <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">Customer Management</h1>
          <p className="text-gray-500">Manage all customers across your store.</p>
        </div>
        {/* <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Plus className="h-5 w-5" />
          <span>Add Product</span>
        </button> */}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search customers..."
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

        {/* Product Status Filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-primary-600 text-white px-3 py-1.5 rounded-md text-sm">All Customers</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Regular</button>
          <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-md text-sm">Inactive {"(last 30 days)"}</button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <CustomersTable />
      </div>
    </div>
    )
}

export default CustomersPage;


const CustomerDetailsModal = ({ isOpen, onClose, customer }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-lg font-bold mb-2">{customer.name} Details</h2>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
        <button onClick={onClose} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
      </div>
    </div>
  );
};
const CustomersPagesss = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Customers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Email</th>
              <th className="px-4 py-2 border-b text-left">Phone</th>
              <th className="px-4 py-2 border-b text-left">Location</th>
              <th className="px-4 py-2 border-b text-left">Orders</th>
              <th className="px-4 py-2 border-b text-left">Total Spent</th>
              <th className="px-4 py-2 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Data */}
            <tr>
              <td className="px-4 py-2 border-b">John Doe</td>
              <td className="px-4 py-2 border-b">john.doe@example.com</td>
              <td className="px-4 py-2 border-b">123-456-7890</td>
              <td className="px-4 py-2 border-b">New York</td>
              <td className="px-4 py-2 border-b">5</td>
              <td className="px-4 py-2 border-b">$500</td>
              <td className="px-4 py-2 border-b">
                <div className="flex items-center space-x-2">
                  <Eye className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => {
                    // Show customer details modal
                    console.log("View customer details");
                  }} />
                  <EllipsisVertical className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                </div>

              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Jane Smith</td>
              <td className="px-4 py-2 border-b">jane.smith@example.com</td>
              <td className="px-4 py-2 border-b">987-654-3210</td>
              <td className="px-4 py-2 border-b">Los Angeles</td>
              <td className="px-4 py-2 border-b">3</td>
              <td className="px-4 py-2 border-b">$300</td>
              <td className="px-4 py-2 border-b">
                <div className="flex items-center space-x-2">
                  <Eye className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => {
                    // Show customer details modal
                    console.log("View customer details");
                  }} />
                  <EllipsisVertical className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                </div>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        {/* <CustomerDetailsModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          customer={selectedCustomer} /> */}
      </div>
    </div>
  );
};