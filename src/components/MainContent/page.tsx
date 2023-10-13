import Banner from "@/components/Banner/page";
import LogoHeader from "@/components/LogoHeader/page";
import Image from "next/image";

export default function MainContent() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex">
        <div>
          <div className="w-[5vw] h-[4vh]">
            {/* <Image
              className="-rotate-90"
              src="/assets/imgs/Arrow Down.svg"
              layout="fill"
              alt="arrow"
            /> */}
            <div className="text-[#fff]">Revolutionizing</div>
          </div>
          <div className="text-[#fff]">Fittness Education</div>
          <div className="text-[rgba(255,255,255,1)]">
            We form long-term partnerships with passionate coaches. We enable
            coaches through mentorship, technology, and community to help their
            clients reach health and performance goals.
          </div>
        </div>
        <div className="relative w-full h-full">
            <Image src="/assets/imgs/main-coaches.svg" alt="main image" layout="fill" />
        </div>
      </div>
    </div>
  );
}
