import { CategoryCard } from "@/components/cards/category-card";
import { Button } from "@/components/ui/button";
import InputBoxWithIcon from "@/components/widgets/input-box-with-Icon";
import { Plus } from "lucide-react";

const CategoryPage = () => {
  return (
    <div className="">
      {/* <div className="flex justify-end my-8">
        <Button>
          {" "}
          <Plus />
          Add Category
        </Button>
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
      </div> */}

      <div className="p-10">
        <div className="space-y-3">
          <div className="">
            <label htmlFor="category_name">Category name</label>
            <input
              type="text"
              name="category_name"
              id="category_name"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div className="">
            <label htmlFor="category_name">Upload category name</label>
            <InputBoxWithIcon
              placeholder="Upload Icon"
              afterIcon={
                <Plus
                  onClick={() => {
                    console.log("hello world!");
                  }}
                />
              }
            />
          </div>
        </div>  
      </div>    
    </div>
  );
};

export default CategoryPage;
