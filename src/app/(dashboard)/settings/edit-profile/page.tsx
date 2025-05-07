import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/widgets/input-with-label";
import { MoveLeft, SquarePen } from "lucide-react";

const EditProfile = () => {
  return (
    <div className="text-gray-700">
      {/* page title section */}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-3">
          {/* <a href="#" className="text-gray-700 text-lg mr-2"> */}
          <MoveLeft />
          {/* </a> */}
          Personal Information
        </div>
        <Button>Save Changes</Button>
      </div>

      {/* profile details sections */}
      <div className="flex gap-x-4 px-16 my-20">
        {/* profile image and role */}
        <div className="p-8 px-16 border border-blue-600/50 rounded-md bg-gray-50">
          <div className="w-20 h-20">
            <img
              src="https://avatars.githubusercontent.com/u/120933222?v=4"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <p className="text-xs text-center mt-4">Profile</p>
          <h4 className="text-md text-center">Admin</h4>
        </div>

        {/* profiel details */}
        <div className="spayce-y-4 w-full">
          <InputWithLabel
            label="Name"
            placeholder="Tausif Ahmed"
            className="w-full"
            inputStyle="border-blue-600/50 text-sm"
          />
          <InputWithLabel
            label="Email"
            placeholder="tausif.ritu1@gmail.com"
            className="w-full"
            inputStyle="border-blue-600/50 text-sm"
          />
          <InputWithLabel
            label="Phone Number"
            placeholder="3000597212"
            className="w-full"
            inputStyle="border-blue-600/50 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

// 1. Victoria Dashboard & API integration
// 2. Fetch Quest & API integration
// 3. ophanims (Stripe Clone)
// 4.
