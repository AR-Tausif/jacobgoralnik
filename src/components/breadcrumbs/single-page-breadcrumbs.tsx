import { ChevronRight, Home } from "lucide-react";

export const SinglePageBreadcrumbs = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-2 flex items-center text-sm">
        <div className="flex items-center text-green-600">
          <Home size={16} />
          <span className="ml-1">Home</span>
        </div>
        <ChevronRight size={14} className="mx-2 text-gray-400" />
        <span className="text-gray-500">Back plan</span>
        <ChevronRight size={14} className="mx-2 text-gray-400" />
        <span className="text-gray-500">
          All Natural Italian-Style Chicken Meatballs
        </span>
      </div>
    </div>
  );
};
