import FounderCard from "./FounderCard";

export default function OurFounder() {
  const founderData1 = {
    Image: "/assets/imgs/founder-zain.svg",
    founder: "Founder",
    name: "Zaine Gallagher",
  };
  const founderData2 = {
    Image: "/assets/imgs/co-founder-noah.svg",
    founder: "Co-Founder",
    name: "Noah McCashland",
  };
  const founderData3 = {
    Image: "/assets/imgs/co-founder-magon.svg",
    founder: "Co-Founder",
    name: "Megan McCashland",
  };
  return (
    <div className="flex flex-col xl:px-28 px-10 gap-[20px] items-center ">
      <div className="flex justify-center items-center">
        <div className="flex   gap-3">
          <img src="/assets/imgs/Arrow Small.svg" alt="" />
          <div className="text-[#fff] text-[40px]">Our Founders</div>
        </div>
      </div>
      <div className="xl:flex xl:justify-between grid gap-10 w-full h-full">
        <FounderCard content={founderData1} />
        <FounderCard content={founderData2} />
        <FounderCard content={founderData3} />
      </div>
    </div>
  );
}
