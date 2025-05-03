"use client"

import { CheckCircle, Clock, Download, X, XCircle } from "lucide-react"
import Image from "next/image"

interface TransactionDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  transaction: {
    id: string
    orderId: string
    product: string
    productImage: string
    customer: string
    date: string
    amount: string
    fee: string
    netAmount: string
    paymentMethod: string
    status: string
    customerEmail?: string
    customerAddress?: string
    paymentId?: string
    processingDate?: string
    completionDate?: string
  }
}

export default function TransactionDetailsModal({ isOpen, onClose, transaction }: TransactionDetailsModalProps) {
  if (!isOpen) return null

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "Processing":
      case "Pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "Failed":
      case "Refunded":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Processing":
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
      case "Refunded":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Transaction Details</h3>
              <button
                onClick={onClose}
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4">
              {/* Transaction Status */}
              <div className="mb-6 flex items-center">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(transaction.status)}`}
                >
                  {getStatusIcon(transaction.status)}
                  {transaction.status}
                </span>
              </div>

              {/* Transaction Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Transaction Information</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Transaction ID:</span>
                      <span className="text-sm font-medium">{transaction.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Order ID:</span>
                      <span className="text-sm font-medium">{transaction.orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Date:</span>
                      <span className="text-sm font-medium">{new Date(transaction.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Payment Method:</span>
                      <span className="text-sm font-medium">{transaction.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Payment ID:</span>
                      <span className="text-sm font-medium">{transaction.paymentId || "N/A"}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Financial Details</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Gross Amount:</span>
                      <span className="text-sm font-medium">{transaction.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Platform Fee:</span>
                      <span className="text-sm font-medium">{transaction.fee}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-sm text-gray-500">Net Amount:</span>
                      <span className="text-sm font-medium text-green-600">{transaction.netAmount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product and Customer Info */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Product Information</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <Image
                          src={transaction.productImage || "/placeholder.svg"}
                          width={48}
                          height={48}
                          alt={transaction.product}
                          className="w-8 h-8"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">{transaction.product}</h5>
                        <p className="text-xs text-gray-500">SKU: PRD-{Math.floor(Math.random() * 10000)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Customer Information</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div>
                      <span className="text-sm font-medium">{transaction.customer}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">
                        {transaction.customerEmail || "customer@example.com"}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">
                        {transaction.customerAddress || "123 Main St, Anytown, AN 12345"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 mb-3">Transaction Timeline</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-full w-0.5 bg-gray-300"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Order Placed</p>
                        <p className="text-xs text-gray-500">{new Date(transaction.date).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        <div className="h-full w-0.5 bg-gray-300"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Payment Processing</p>
                        <p className="text-xs text-gray-500">
                          {transaction.processingDate
                            ? new Date(transaction.processingDate).toLocaleString()
                            : new Date(new Date(transaction.date).getTime() + 1000 * 60 * 5).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    {transaction.status === "Completed" && (
                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Payment Completed</p>
                          <p className="text-xs text-gray-500">
                            {transaction.completionDate
                              ? new Date(transaction.completionDate).toLocaleString()
                              : new Date(new Date(transaction.date).getTime() + 1000 * 60 * 10).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {transaction.status === "Failed" && (
                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="h-4 w-4 rounded-full bg-red-500"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Payment Failed</p>
                          <p className="text-xs text-gray-500">
                            {new Date(new Date(transaction.date).getTime() + 1000 * 60 * 10).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {transaction.status === "Refunded" && (
                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="h-4 w-4 rounded-full bg-red-500"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Payment Refunded</p>
                          <p className="text-xs text-gray-500">
                            {new Date(new Date(transaction.date).getTime() + 1000 * 60 * 60 * 24).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center items-center gap-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              <Download className="h-4 w-4" />
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
