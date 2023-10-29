"use client";

import LogoHeader from "@/components/LogoHeader/page";
import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { route } from "../../../utils/Routes";
import { coachesInputArray, coachesInputArraytwo } from "@/utils/InputArray";
import Inputs from "@/components/Inputs/page";

export default function BasicInformation() {
  const router = useRouter();
  const content = {
    button: {
      link: route.coaches.purpose,
      text: "Continue",
    },
  };

  const handleButtonClick = () => {
    router.push(content.button.link);
  };

  return (
    <div className="mb-10 mx-3">
      <LogoHeader />
      <div className="flex flex-col gap-10  items-center">
        <div className="Line"></div>
        <div className="flex items-center flex-col gap-5 ">
          <div className="font-bold text-center text-[30px] md:text-[40px] text-[#fff]">
            Enter your information
          </div>
        </div>
        <div className="md:flex gap-10">
          <div>
            {coachesInputArray.map((value, index) => {
              return <Inputs key={index} input={value} />;
            })}
          </div>
          <div>
            {coachesInputArraytwo.map((value, index) => {
              return <Inputs key={index} input={value} />;
            })}
          </div>
        </div>
        <Button content={content} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
