import Link from "next/link";

export const SectionHeading = ({
  title,
  link = "#",
  linkText,
}: {
  title: string;
  link?: string;
  linkText?: string;
}) => {
  return (
    <div className="mt-12 flex items-center">
      <h2 className="font-medium text-gray-800 tracking-wide whitespace-nowrap uppercase">
        {title}
      </h2>
      <div className="h-px bg-gray-300 flex-grow mx-4"></div>
      {linkText && (
        <Link
          href={link}
          className="text-blue-600 hover:text-blue-700 border border-gray-300 rounded-full px-4 py-1 text-sm whitespace-nowrap"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};
