import { SignContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const SubmitButton = ({ url, userName }: { url: string; userName: string }) => {
  const router = useRouter();
  const { signature } = useContext(SignContext);
  const handleClick = () => {
    if (userName === signature) {
      router.push(url);
    } else {
      alert("Signature must match with your name!");
    }
  };
  return (
    <div>
      <button
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
