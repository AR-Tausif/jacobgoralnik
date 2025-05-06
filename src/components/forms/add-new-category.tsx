import React from "react";

export const AddNewCategory = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <a href="#" className="text-gray-600 text-lg mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
        <h2 className="text-xl font-semibold">Add new category</h2>
      </div>

      <div className="mb-4">
        <label
          htmlFor="category-name"
          className="block text-sm font-medium text-gray-700"
        >
          Category name
        </label>
        <input
          id="category-name"
          type="text"
          placeholder="Enter category name"
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="category-icon"
          className="block text-sm font-medium text-gray-700"
        >
          Upload category Icon
        </label>
        <div className="flex items-center mt-2">
          <input id="category-icon" type="file" className="hidden" />
          <label
            htmlFor="category-icon"
            className="flex items-center justify-center w-full p-3 border-2 border-blue-500 text-blue-500 rounded-lg cursor-pointer"
          >
            <span>Upload Icon</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </label>
        </div>
      </div>

      <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add Category
      </button>
    </div>
  );
};
