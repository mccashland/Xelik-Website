"use client";

import LogoHeader from "@/components/LogoHeader/page";
import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { route } from "../../../utils/Routes";

export default function Purpose() {
  const router = useRouter();
  const content = {
    button: {
      link: route.clients.pakage,
      text: "Continue",
    },
  };

  const handleButtonClick = () => {
    router.push(content.button.link);
  };

  return (
    <div className="my-5 mx-3">
      <LogoHeader />
      <div className="flex flex-col gap-10  items-center">
        <div className="Line"></div>
        <div className="flex items-center flex-col gap-5 ">
          <div className="font-bold text-center md:text-[40px] text-[30px] text-[#fff]">
            What are you looking for?
          </div>
          <div className="text-center font-normal text-base text-[#fff] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </div>
          <div className="imgs justify-center items-center md:flex md:gap-10 ">
            <div className="border border-[#FFFFFF1A] hover:border-[#CE0019]  cursor-pointer rounded-[18px] bg-[#FFFFFF08] w-[350px] h-[330px] justify-center items-center flex flex-col gap-6 transition duration-300 mb-8">
              <img src="/assets/imgs/client-lookingFor-connection.svg" alt="" />
              <div className="font-semibold text-xl text-[#fff]">
                1 on 1 Coaching
              </div>
            </div>
            <div className="border border-[#FFFFFF1A] hover:border-[#CE0019] cursor-pointer rounded-[18px] w-[350px] h-[330px] justify-center  bg-[#FFFFFF08] items-center flex flex-col gap-6 transition duration-300 mb-8">
              <img src="/assets/imgs/client-lookingFor-key.svg" alt="" />
              <div className="font-semibold text-xl text-[#fff]">
                App Access (Programming)
              </div>
            </div>
          </div>
        </div>
        <Button text={content.button.text} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
