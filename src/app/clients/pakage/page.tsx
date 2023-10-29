"use client";

import LogoHeader from "@/components/LogoHeader/page";
import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { route } from "@/utils/Routes";
import PakageBox from "@/components/PakageBox/page";

export default function Pakage() {
  const router = useRouter();
  const pakage = [
    {
      months: "3 months",
    },
    {
      months: "6 months",
    },
    {
      months: "Reoccurring ",
    },
  ];
  const pakage2 = [
    {
      months: "in full",
    },
    {
      months: "in half",
    },
    {
      months: "Monthly",
    },
  ];
  const content = {
    button: {
      link: route.clients.coachs,
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
        <div className="Line">Line</div>
        <div className="flex items-center flex-col gap-5  text-center">
          <div className="font-bold md:text-[40px] text-[30px] text-[#fff] text-center ">
            How long are you wanting 1 on 1 coaching?
          </div>
          <div className=" text-center font-normal text-base text-[#fff] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </div>
          <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="heading font-normal md:text-xl text-lg text-[#fff] text-center opacity-90">
              How long are you wanting 1 on 1 coaching?
            </div>
            <div className="flex  gap-5">
              {pakage.map((value, index) => {
                return <PakageBox key={index} pakage={value} />;
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="heading font-normal md:text-xl text-lg  text-[#fff] text-center opacity-90">
            How are you wanting to pay?
            </div>
            <div className="flex gap-5 ">
              {pakage2.map((value, index) => {
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
