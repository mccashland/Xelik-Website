import React from "react";

interface Props {
  content: {
    button: {
      link: any;
      text: any;
    };
  };
  onClick: () => void; // Define the type for the onClick prop
}

export default function Button({ content, onClick }: Props) {
  const {text } = content;
  return (
    <div className="flex  justify-center">
      <div
        onClick={onClick}
        className="bg-[#CE0019] cursor-pointer text-[#fff] font-semibold text-[20px] leading-6 rounded-lg py-4 px-8  "
      >
        {content.button.text}
      </div>
    </div>
  );
}
