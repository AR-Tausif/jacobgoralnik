import { CategoryCard } from "@/components/cards/category-card";
import { AddNewCategory } from "@/components/forms/add-new-category";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InputBoxWithIcon from "@/components/widgets/input-box-with-Icon";
import { Plus } from "lucide-react";

const CategoryPage = () => {
  return (
    <div className="">
      <div className="flex justify-end my-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              {" "}
              <Plus />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddNewCategory />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      {/* <div className="p-10">
        <AddNewCategory />  
      </div>     */}
    </div>
  );
};

export default CategoryPage;
