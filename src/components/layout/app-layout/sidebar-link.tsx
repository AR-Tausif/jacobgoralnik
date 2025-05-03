const SidebarLink = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <li className="flex items-center gap-x-2 text-md text-gray-700 bg-secondary-50/50 p-2 rounded-md">
      {icon}
      <p>{label}</p>
    </li>
  );
};

export default SidebarLink;
