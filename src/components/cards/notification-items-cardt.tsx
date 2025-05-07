import type React from "react";
import { BugIcon, UserIcon, RadioIcon } from "lucide-react";
import { SheetContent } from "../ui/sheet";

export function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      message: "You fixed a bug.",
      time: "Just now",
      icon: BugIcon,
    },
    {
      id: 2,
      message: "New user registered.",
      time: "59 minutes ago",
      icon: UserIcon,
    },
    {
      id: 3,
      message: "New user registered.",
      time: "59 minutes ago",
      icon: UserIcon,
    },
    {
      id: 4,
      message: "You fixed a bug.",
      time: "12 hours ago",
      icon: BugIcon,
    },
    {
      id: 5,
      message: "You fixed a bug.",
      time: "12 hours ago",
      icon: BugIcon,
    },
    {
      id: 6,
      message: "You fixed a bug.",
      time: "12 hours ago",
      icon: BugIcon,
    },
    {
      id: 7,
      message: "You fixed a bug.",
      time: "12 hours ago",
      icon: BugIcon,
    },
    {
      id: 8,
      message: "You fixed a bug.",
      time: "12 hours ago",
      icon: BugIcon,
    },
    {
      id: 9,
      message: "You fixed a bug.",
      time: "12 hours ago",
      icon: BugIcon,
    },
    {
      id: 10,
      message: "Andi Lane subscribed to you.",
      time: "Today, 11:59 AM",
      icon: RadioIcon,
    },
    {
      id: 11,
      message: "Andi Lane subscribed to you.",
      time: "Today, 11:59 AM",
      icon: RadioIcon,
    },
    {
      id: 12,
      message: "Andi Lane subscribed to you.",
      time: "Today, 11:59 AM",
      icon: RadioIcon,
    },
  ];

  return (
    <SheetContent>
      <div className="w-full h-full bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-base font-medium text-gray-900">Notifications</h2>
        </div>
        <div className="max-h-[95vh] overflow-y-auto">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              message={notification.message}
              time={notification.time}
              Icon={notification.icon}
            />
          ))}
        </div>
      </div>
    </SheetContent>
  );
}

interface NotificationItemProps {
  message: string;
  time: string;
  Icon: React.ElementType;
}

function NotificationItem({ message, time, Icon }: NotificationItemProps) {
  return (
    <div className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0 mr-3">
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 font-medium">{message}</p>
        <p className="text-xs text-gray-500 mt-0.5">{time}</p>
      </div>
    </div>
  );
}
