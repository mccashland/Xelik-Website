"use client";
import { SignContext } from "@/context";
import React, { useContext } from "react";

const ContractInput = ({
  value,
  name,
  disabled,
  handleChange = () => {},
}: {
  value: string;
  name: string;
  disabled?: boolean;
  handleChange?: () => void;
}) => {
  const { signature, setSignature } = useContext(SignContext);
  if (name === "signature" || name === "signature-one") {
    return (
      <input
        type="text"
        value={signature}
        id={name}
        onChange={(e) => setSignature(e.target.value)}
        className="bg-[transparent] border ml-2 underline focus:outline-none"
      />
    );
  }
  return (
    <input
      type="text"
      name={name}
      id={name}
      value={value}
      disabled={disabled}
      onChange={handleChange}
      className="bg-[transparent] underline focus:outline-none"
    />
  );
};

export default ContractInput;
