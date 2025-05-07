import { OverviewCard } from "@/components/cards/dashboard-overview-card";
import { OverviewUserAccounts } from "@/components/charts/overview-users-charts";
import UsersTable from "@/components/tables/users-table";
import { TrendingUp } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="page text-sm space-y-8">
      {/* Overview Section */}
      <p className="">Overview</p>
      <div className="flex gap-4">
        {overviewLists.map((item) => (
          <OverviewCard
            key={item.id}
            title={item.title}
            value={item.value}
            footerEnd={item.footerEnd}
            className={item.bg}
          />
        ))}
      </div>

      <OverviewUserAccounts/>

      {/* Recent Users */}
      <div className="bg-secondary-50/30 py-6 rounded-md space-y-4">
        <p className="text-md font-bold px-6">Recent Users</p>

        <UsersTable />
      </div>
    </div>
  );
};

export default Page;

const overviewLists = [
  {
    id: 1,
    title: "Total Users",
    value: "7,260",
    bg: "bg-purple-50",
    footerEnd: (
      <p className="text-sm text-secondary-500 flex items-center space-x-1">
        +6.08%
        <TrendingUp width={14} />
      </p>
    ),
  },
  {
    id: 2,
    title: "Total Users",
    bg: "bg-secondary-200",
    value: "7,260",
    footerEnd: (
      <p className="text-sm text-secondary-500 flex items-center space-x-1">
        +6.08%
        <TrendingUp width={14} />
      </p>
    ),
  },
  {
    id: 3,
    title: "Total Users",
    value: "7,260",
    bg: "bg-purple-50",
    footerEnd: (
      <p className="text-sm text-secondary-500 flex items-center space-x-1">
        +6.08%
        <TrendingUp width={14} />
      </p>
    ),
  },
];
