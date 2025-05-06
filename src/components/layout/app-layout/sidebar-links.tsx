import { Calendar, PieChart, Settings, User2 } from "lucide-react";
import SidebarLink from "./sidebar-link";

const SidebarLinks = () => {
  const sidebarLinks = [
    {
      icon: <PieChart className="p-1" />,
      label: "Overview",
      href: "/",
    },
    {
      icon: <Calendar className="p-1" />,
      label: "Categories",
      href: "/categories",
    },
    {
      icon: <User2 className="p-1" />,
      label: "Users",
      href: "/users",
    },
    {
      icon: <Settings className="p-1" />,
      label: "Settings",
      href: "/settings",
    },
  ];
  return (
    <ul className="space-y-2 text-sm">
      {sidebarLinks.map((link) => (
        <SidebarLink
          key={link.label.toLowerCase()}
          icon={link.icon}
          label={link.label}
          href={link.href}
        />
      ))}
    </ul>
  );
};

export default SidebarLinks;
