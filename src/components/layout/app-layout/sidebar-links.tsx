import { Calendar, PieChart, Settings, User2 } from "lucide-react";
import SidebarLink from "./sidebar-link";

const SidebarLinks = () => {
  const sidebarLinks = [
    {
      icon: <PieChart className="p-1" />,
      label: "Overview",
    },
    {
      icon: <Calendar className="p-1" />,
      label: "Categories",
    },
    {
      icon: <User2 className="p-1" />,
      label: "Users",
    },
    {
      icon: <Settings className="p-1" />,
      label: "Settings",
    },
  ];
  return (
    <ul className="space-y-2 text-sm">
      {sidebarLinks.map((link) => (
        <SidebarLink
          key={link.label.toLowerCase()}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </ul>
  );
};

export default SidebarLinks;
