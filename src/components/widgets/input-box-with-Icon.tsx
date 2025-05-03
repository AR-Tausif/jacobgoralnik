const InputBoxWithIcon = ({
  placeholder,
  beforeIcon,
}: {
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  placeholder: string;
}) => {
  return (
    <div className="relative border rounded-md overflow-hidden">
      <div className="absolute">{beforeIcon}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full p-2 pl-8 text-sm text-gray-700"
      />
    </div>
  );
};

export default InputBoxWithIcon;
