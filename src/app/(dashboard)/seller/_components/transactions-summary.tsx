import { ArrowDown, ArrowUp, CreditCard, DollarSign, Percent, Wallet } from "lucide-react"

export default function TransactionsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Earnings</p>
            <h3 className="text-2xl font-bold mt-1">$12,845.00</h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>8.2%</span>
              </div>
              <span className="text-gray-500 text-xs ml-2">vs last month</span>
            </div>
          </div>
          <div className="bg-primary-50 rounded-full p-3">
            <DollarSign className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Platform Fees</p>
            <h3 className="text-2xl font-bold mt-1">$1,284.50</h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>8.2%</span>
              </div>
              <span className="text-gray-500 text-xs ml-2">vs last month</span>
            </div>
          </div>
          <div className="bg-secondary-50 rounded-full p-3">
            <Percent className="h-6 w-6 text-secondary-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Net Earnings</p>
            <h3 className="text-2xl font-bold mt-1">$11,560.50</h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>8.2%</span>
              </div>
              <span className="text-gray-500 text-xs ml-2">vs last month</span>
            </div>
          </div>
          <div className="bg-accent-50 rounded-full p-3">
            <Wallet className="h-6 w-6 text-accent-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Pending Payout</p>
            <h3 className="text-2xl font-bold mt-1">$2,450.00</h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-red-600 text-sm">
                <ArrowDown className="h-3 w-3 mr-1" />
                <span>3.1%</span>
              </div>
              <span className="text-gray-500 text-xs ml-2">vs last month</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-full p-3">
            <CreditCard className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
