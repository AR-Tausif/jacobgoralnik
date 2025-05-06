import { CarTaxiFront } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { AddNewCategory } from "../forms/add-new-category";
import { EditCategory } from "../forms/edit-category";

export const CategoryCard = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-6 bg-gray-50 border-2 rounded-md">
      <div className="flex justify-center items-center w-20 h-20 mx-auto text-center rounded-full border border-blue-700">
        <CarTaxiFront />
      </div>

      <h3 className="text-center font-semibold text-2xl text-gray-800">
        Vehicles
      </h3>

      <div className="flex justify-center gap-4">
        <button className="p-1 px-4 bg-red-100 border border-red-500 rounded-lg">
          Delete
        </button>
        <Dialog>
          <DialogTrigger asChild>
            <button className="p-1 px-4 bg-blue-600 border border-blue-500 text-gray-100 rounded-lg">
              Edit
            </button>
          </DialogTrigger>
          <DialogContent>
            <EditCategory />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
