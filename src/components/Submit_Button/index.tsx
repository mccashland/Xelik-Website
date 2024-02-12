import Link from "next/link";
import React from "react";

const SubmitButton = ({ url }: { url: string }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-primary border-none text-[#fff] px-8 py-2 rounded-md transition-all "
      >
        <Link href={`${url}`} target="_blank">
          Submit
        </Link>
      </button>
    </div>
  );
};

export default SubmitButton;
