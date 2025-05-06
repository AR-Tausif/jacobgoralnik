import { ComponentPropsWithoutRef } from "react";

interface InputWithLabelProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  inputStyle?: string;
}

export const InputWithLabel = ({
  label,
  type,
  name,
  value,
  placeholder,
  className,
  inputStyle,
  onChange,
  ...props
}: InputWithLabelProps) => {
  return (
    <div className={`mb-4 ${className || ""}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
          inputStyle || ""
        }`}
        {...props}
      />
    </div>
  );
};
