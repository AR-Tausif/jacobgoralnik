export const OverviewCard = ({
  title,
  value,
  footerEnd,
  className,
}: {
  className?: string;
  title: string;
  value: number | string;
  footerEnd?: React.ReactNode | string;
}) => {
  return (
    <div className={`w-full p-6 space-y-2 rounded-md ${className}`}>
      <h3 className="text-md">{title}</h3>
      <div className="flex justify-between items-end gap-x-2 text-2xl">
        <p className="text-secondary-900 font-bold">{value}</p>
        {footerEnd}
      </div>
    </div>
  );
};
