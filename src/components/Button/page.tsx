import React from "react";

interface Props {
  text: any;
  onClick?: () => void; // Define the type for the onClick prop
}

export default function Button({ text, onClick }: Props) {
  return (
    <div className="flex  justify-center">
      <button
        onClick={onClick}
        type="submit"
        className="bg-[#CE0019] cursor-pointer text-[#fff] font-semibold text-[20px] leading-6 rounded-lg py-4 px-8  "
      >
        {text}
      </button>
    </div>
  );
}
