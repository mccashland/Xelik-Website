import React from "react";

const ContractInput = ({
  value,
  name,
  disabled,
}: {
  value: string;
  name: string;
  disabled?: boolean;
}) => {
  return (
    <input
      type="text"
      name={name}
      id={name}
      value={value}
      disabled={disabled}
      className="bg-[transparent] underline focus:outline-none"
    />
  );
};

export default ContractInput;
