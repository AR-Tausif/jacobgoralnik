import { ArrowLeft, ChevronLeft, MoveLeft, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { InputWithLabel } from "../widgets/input-with-label";
import { DialogTitle } from "../ui/dialog";

export const EditCategory = () => {
  return (
    <div className="max-w-md mx-auto text-gray-700 p-6 rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <a href="#" className="text-gray-700 text-lg mr-2">
          <MoveLeft />
        </a>
        <DialogTitle className="text-lg font-semibold">
          Edit category
        </DialogTitle>
      </div>

      <div className="mb-4">
        <InputWithLabel
          label="Category Name"
          className="space-y-3"
          type="text"
          name="categoryName"
          value={"Vehicles"}
          placeholder="Enter category name"
        />
      </div>

      <div className="mb-6 space-y-3">
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
            className="flex items-center justify-center w-full p-3 border-2 border-gray-700 text-gray-700 rounded-lg cursor-pointer"
          >
            <span>Upload Icon</span>
            <Plus className="ml-2 h-5 w-5 text-gray-700" />
          </label>
        </div>
      </div>

      <Button className="w-full">Add Category</Button>
    </div>
  );
};
