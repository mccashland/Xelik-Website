import { useEffect, useState } from "react";

interface Props {
  content: {
    Image: string;
    founder: string;
    name: string;
  };
  type: any;
  qoute: any;
  handleHover: any;
  handleMouseLeave: any;
}
export default function FounderCard({
  content,
  type,
  handleHover,
  handleMouseLeave,
  qoute,
}: Props) {
  const { Image, founder, name } = content;
  const handleSelection = () => {
    if (type === "") {
      return (
        <div className="founder absolute z-10 w-full h-full top-0 rounded-lg"></div>
      );
    } else if (type === "active") {
      return <></>;
    } else if (type === "logo") {
      return (
        <center className="absolute rounded z-30 flex justify-center items-center top-0 left-0 h-full w-full bg-[#000]">
          <img
            className="w-[262px] h-[100px]"
            src="/assets/imgs/Logo White.svg"
            alt=""
          />
        </center>
      );
    } else if (type === "qoute") {
      return (
        <div className="absolute rounded z-30 flex justify-start items-end p-4 text-[#fff] bg-[#DB5151] top-0 left-0 w-full h-full">
          <div>
            <div className="flex gap-3  items-center">
              <div className="h-1 w-10  rounded bg-[#FFFFFF] "></div>
              <div className="text-base text-[#FFFFFF] font-normal">
                {founder}
              </div>
            </div>
            <div className={`name font-semibold text-[28px] text-[#FFFFFF]`}>
              {name}
            </div>
            <div className="mt-4">{qoute}</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      onMouseEnter={() => handleHover(name)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-lg cursor-pointer justify-center xl:min-h-[600px]  xl:w-[30%]"
    >
      <img
        className="h-full w-full rounded-lg object-cover"
        src={Image}
        alt=""
      />
      {handleSelection()}
      <div className={`absolute bottom-10 z-20 left-7`}>
        <div className="flex gap-3  items-center">
          <div className="h-1 w-10  rounded bg-[#FFFFFF] "></div>
          <div className="text-base text-[#FFFFFF] font-normal">{founder}</div>
        </div>
        <div className={`name font-semibold text-[28px] text-[#FFFFFF]`}>
          {name}
        </div>
      </div>
    </div>
  );
}
