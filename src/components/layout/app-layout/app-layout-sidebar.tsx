import Image from "next/image";
import SidebarLinks from "./sidebar-links";

export const AppLayoutSidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={`min-h-screen border space-y-8 px-8 py-4 rounded-lg ${className}`}
    >
      <div className="flex gap-x-2 items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/120933222?v=4"
          alt="profile picture"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="text-secondary font-semibold">Tausif Ahmed</p>
      </div>
      <p className="text-gray-500 text-sm">Dashboard</p>

      {/* sidebar links */}
      <SidebarLinks />
    </div>
  );
};
