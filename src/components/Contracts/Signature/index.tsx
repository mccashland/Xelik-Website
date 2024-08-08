"use client";

const Signature = () => {
  return (
    <div className="flex flex-row ml-4 gap-x-3 shadow-lg">
      <div className=" w-[65%] border border-[#ffff]">
        <input
          type="text"
          name="signature"
          id="sign"
          className="bg-[transparent] border-none "
        />
      </div>
    </div>
  );
};

export default Signature;
