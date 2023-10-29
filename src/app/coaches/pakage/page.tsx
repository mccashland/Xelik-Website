"use client";

import LogoHeader from "@/components/LogoHeader/page";
import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { route } from "@/utils/Routes";
import PakageBox from "@/components/PakageBox/page";

export default function pakage() {
  const router = useRouter();

  const pakages = [
    {
      months: "Monthly",
    },
    {
      months: "Quarterly",
    },
    {
      months: "Biannually",
    },
  ];
  const content = {
    button: {
      link: route.coaches.passphrase,
      text: "Continue",
    },
  };

  const handleButtonClick = () => {
    router.push(content.button.link);
  };

  return (
    <div className="mb-10 mx-3">
      <LogoHeader />
      <div className="flex flex-col gap-10 my-14 mx-3 items-center">
        <div className="Line"></div>
        <div className="flex items-center flex-col gap-5  text-center">
          <div className="font-bold md:text-[40px] text-xl text-[#fff] text-center ">
          How would you like to pay?
          </div>
          <div className=" text-center font-normal sm:text-base text-[8px] text-[#fff] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="heading font-normal md:text-xl text-lg text-[#fff] text-center opacity-90">
              Select payment option
              </div>
              <div className="flex sm:gap-5 gap-1">
                {pakages.map((value, index) => {
                  return <PakageBox key={index} pakage={value} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button content={content} onClick={handleButtonClick} />
    </div>
  );
}
