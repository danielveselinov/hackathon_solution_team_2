import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
};

export default function InputLabelFormComponent({
  label,
  type,
  placeholder,
}: Props) {
  return (
    <div className="mx-auto">
      <label className="w-100" htmlFor={type}>
        {label}{" "}
      </label>
      <input className="w-100" type={type} placeholder={placeholder} />
    </div>
  );
}
