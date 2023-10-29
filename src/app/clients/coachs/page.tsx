"use client";

import LogoHeader from "@/components/LogoHeader/page";

import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { route } from "@/utils/Routes";
import { CoachsArray } from "@/utils/CoachsArray";
import { useState } from "react";
import CoachsBox from "@/components/CoachsBox/page";

export default function Coachs() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownOptions = ["Ascending", "Descending"];
  const [selectedOption, setSelectedOption] = useState("Ascending");

  const content = {
    button: {
      link: route.clients.passphrase,
      text: "Continue",
    },
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };
  const handleButtonClick = () => {
    router.push(content.button.link);
  };

  return (
    <div className="mb-10 mx-3">
      <LogoHeader />
      <div className="main flex gap-10 items-center flex-col pt-7">
        <div className="Line font-bold text-2xl text-[#fff] ">LIne</div>

        <div className="heading font-bold text-[40px] text-[#fff] text-center">
          What coach will you be working with?
        </div>
        {/* main box */}
        <div className=" box w-full flex items-center justify-center">
          <div className="lg:w-[80%] w-full bg-[#0B0C1780] rounded-[10px] p-5">
            {/* header */}
            <div className="header lg:flex    gap-4 w-full justify-between  ">
              {/* heading */}
              <div className=" text-left w-[60%]">
                <div className=" font-semibold md:text-xl text-base text-[#fff]">
                  Select Coach
                </div>
                <div className="font-normal md:text-base text-[9px] sm:text-[12px] text-[#fff] opacity-60">
                  Select Coach you like to train with
                </div>
              </div>
              {/* seacrhbar and sort bar div */}
              <div className="flex lg:gap-8 md:gap-6 w-full">
                <div className="w-[60%] relative">
                  <div className="search-bar absolute bottom-0 flex gap-1 items-center border-[#FFFFFF0F] bg-[#FFFFFF0F] rounded-[84px] py-1 px-4 mx-1 ">
                    <img
                      className=""
                      src="/assets/imgs/search-icon.svg"
                      alt=""
                    />
                    <input
                      type="text"
                      placeholder="Search here"
                      className="outline-none rounded-[84px]  bg-[transparent] font-normal md:text-xl text-base text-[#FFFFFF] opacity-60 w-full  px-1"
                    />
                  </div>
                </div>

                <div className="dropdown lg:flex items-center justify-center gap-4 w-[35%]">
                  <div className=" font-normal sm:text-base text-[12px]  text-[#fff] opacity-60 text-left ">
                    Sort by:
                  </div>
                  <div className="relative">
                    <div
                      className="flex gap-3 font-normal text-[8px] md:text-base text-[#fff] opacity-60 cursor-pointer justify-center items-center bg-[#FFFFFF0F] p-2 border border-[#FFFFFF1A] rounded"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {selectedOption}
                      <img src="/assets/imgs/dropdown-arrow.svg" alt="" />
                    </div>
                    <div className="dropdow-array w-full absolute z-30  md:right-0 top-10 md:top-12 bg-[#FFFFFF0F] text-[#fff] opacity-60">
                      {isOpen && (
                        <ul className="flex flex-col gap-2 border border-[#FFFFFF1A] rounded p-2">
                          {dropdownOptions.map((option, index) => (
                            <li
                              className="cursor-pointer p-1 border-b font-normal text-[12px] md:text-base"
                              onClick={() => handleOptionSelect(option)}
                              key={index}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/*searchbar div end */}
            </div>
            {/* header ddiv end */}
            <div className="border-b border-[#FFFFFF] opacity-10 my-4"></div>

            <div className="boxs flex flex-wrap gap-5 items-center justify-center sm:gap-3 md:gap-4 w-full  ">
              {CoachsArray.map((value, index) => {
                return <CoachsBox key={index} coachBox={value} />;
              })}
            </div>
          </div>
        </div>
        <Button content={content} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
