'use client'
import { SignContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const SubmitButton = ({ url }: { url: string }) => {
  const router = useRouter();
  const { signature } = useContext(SignContext);
  const handleClick = () => {
    // alert("Please enter your initials at least two characters to continue!");
    router.push(url);
  };
  return (
    <div>
      <button
        disabled={signature.length < 2}
        type="submit"
        onClick={handleClick}
        className="bg-primary border-none text-[#fff] px-8 py-2 rounded-md transition-all "
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
