import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  handler: (e: React.FormEvent) => void;
};

export default function InputLabelFormComponent({
  label,
  type,
  placeholder,
  name,
  value,
  handler,
}: Props) {
  return (
    <div className="mx-auto">
      <label className="w-100" htmlFor={type}>
        {label}{" "}
      </label>
      <input
        className="w-100"
        type={type}
        placeholder={placeholder}
        onChange={handler}
        name={name}
        value={value}
      />
    </div>
  );
}
