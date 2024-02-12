import Link from "next/link";
import React from "react";

const SubmitButton = () => {
  return (
    <div>
      <button type="submit" className="bg-[white] border border-[white] hover:bg-[#20205f] p-1 text-[black] transition-all ">
        <Link
          href="https://www.trainerize.me/profile/xelik/?planGUID=938872626f5048018b3f996eb7be58e5&mode=checkout"
          target="_blank"
        >
          Submit
        </Link>
      </button>
    </div>
  );
};

export default SubmitButton;
