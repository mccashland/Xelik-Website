"use client";
import { useEffect, useState } from "react";
import FounderCard from "./FounderCard";
export default function OurFounder() {
  const [selected, setSelected] = useState("");
  const founders = [
    {
      Image: "/assets/imgs/founder-zain.svg",
      founder: "Founder",
      name: "Zaine Gallagher",
    },
    {
      Image: "/assets/imgs/co-founder-noah.svg",
      founder: "Co-Founder",
      name: "Noah McCashland",
    },
    {
      Image: "/assets/imgs/co-founder-magon.svg",
      founder: "Co-Founder",
      name: "Megan McCashland",
    },
  ];
  const handleHover = (name: any) => {
    setSelected(name);
  };
  const handleMouseLeave = () => {
    setSelected("");
  };
  const animation = () => {
    const init = (
      <div className="founder absolute z-10 w-full h-full top-0 rounded-lg"></div>
    );
    if (selected === "") {
      let qoute = ""
      return (
        <>
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[0]}
            type={""}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[1]}
            type={""}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[2]}
            type={""}
          />
        </>
      );
    } else if (selected === "Zaine Gallagher") {
      let qoute =
        "While studying Nutrition at the University of Nebraska Lincoln, Zaine was an in person and online personal trainer. After years of first hand experience regarding the struggles coaches face in servicing their clients, he decided to build a platform that solved these problems. Zaine has led the team since its inception, and wears many hats to ensure anyone who joins the platform has an excellent experience.";
      return (
        <>
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[0]}
            type={"active"}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[0]}
            type={"qoute"}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[2]}
            type={"logo"}
          />
        </>
      );
    } else if (selected === "Noah McCashland") {
      let qoute =
        "At the University of Nebraska Lincoln, Noah was a collegiate athlete on the football team and a computer science major. In leading product development at Xelik, he continues to mix his passion for fitness and health with his passion for building phenomenal products. ";
      return (
        <>
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[1]}
            type={"qoute"}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[1]}
            type={"active"}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[2]}
            type={"logo"}
          />
        </>
      );
    } else if (selected === "Megan McCashland") {
      let qoute =
        " While earning her undergraduate degree in Economics at the University of Notre Dame and a Master in Finance at the University of Southern California, Megan competed on the Women's Soccer Teams. She has spent the past five years investing in startups in the preseed to growth equity stage at various funds. Her love for coaching and interest in performance optimization drew her to Xelik's mission. Megan supports all finance, edtech and corporate strategy initiatives.";
      return (
        <>
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[0]}
            type={"logo"}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[2]}
            type={"qoute"}
          />
          <FounderCard
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            qoute={qoute}
            content={founders[2]}
            type={"active"}
          />
        </>
      );
    }
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
        {animation()}
      </div>
    </div>
  );
}
