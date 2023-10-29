"use client";
import Button from "@/components/Button/page";
import LogoHeader from "@/components/LogoHeader/page";
import { route } from "@/utils/Routes";
import { useRouter } from "next/navigation";

export default function phrase() {
  const router = useRouter();
  const content = {
    button: {
      link: route.coaches.basicinformation,
      text: "Continue",
    },
  };

  const handleButtonClick = () => {
    router.push(content.button.link);
  };

  return (
    <div className="mb-10 mx-3">
      <LogoHeader />
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-[20vh]"
          src="/assets/imgs/Arrow Down.svg"
          alt="arrow line"
        />
        <div className="maincnt py-10 flex justify-center items-center flex-col gap-10 ">
          <div className="font-bold text-[40px]  text-[#FFFFFF] w-[95%] text-center">
            Enter Your Coaches Passphrase
          </div>

          <input
            className="font-[400] outline-none text-[20px] w-full  text-[#FFFFFF] opacity-60 border focus:border-[#CE0019] bg-[#FFFFFF1A]  rounded-[10px]  py-3 px-3 "
            type="text"
            placeholder="Enter Passphrase"
          />

          <Button content={content} onClick={handleButtonClick} />
        </div>
        <img
          className="rotate-180 h-[20vh]"
          src="/assets/imgs/Arrow Down.svg"
          alt="arrow line"
        />
      </div>
    </div>
  );
}
