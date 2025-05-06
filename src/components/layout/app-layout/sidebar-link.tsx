import Link from "next/link";

const SidebarLink = ({
  icon,
  label,
  href = "#",
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <li className="">
      <Link href={href} className="flex items-center gap-x-2 text-md text-gray-700 bg-secondary-50/50 p-2 rounded-md">
        {icon}
        <p>{label}</p>
      </Link>
    </li>
  );
};

export default SidebarLink;
