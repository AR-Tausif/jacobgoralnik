import { AppWindow, Bell, History, Search } from "lucide-react";
import InputBoxWithIcon from "./input-box-with-Icon";
import DynamicBreadcrumb from "../breadcrumbs/navbar-crumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NotificationsPanel } from "../cards/notification-items-cardt";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 border-b mx-8">
      <div className="flex items-center gap-x-4 text-gray-600">
        {/* Icon */}
        <div className="">
          <AppWindow />
        </div>

        {/* Breadcrumb specify by path url */}
        <DynamicBreadcrumb />
      </div>

      {/* Right side action buttons */}
      <div className="flex flex-row-reverse items-center text-gray-600 gap-x-4">
        <div className="">
          <Sheet>
            <SheetTrigger asChild>
              <Bell />
            </SheetTrigger>
            <NotificationsPanel/>
          </Sheet>
        </div>

        <div className="">
          <History />
        </div>
        <InputBoxWithIcon
          placeholder="Search"
          beforeIcon={<Search className="mt-1 mx-1 p-0.5 text-gray-600" />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
