"use client";
import React, { ChangeEvent, useState } from "react";
import Button from "../Button/page";
import {
  EV_USER_EMAIL,
  EV_USER_TYPE,
  FORMS_NAMES,
  USER_TYPE,
} from "@/utils/TYPES";
import { useRouter, useSearchParams } from "next/navigation";

type FormData = {
  email: string;
  phrase: string;
};

export const Phrase = ({ userType }: { userType: USER_TYPE }) => {
  const [data, setData] = useState<FormData>({ email: "", phrase: "" });
  const router = useRouter();
  const params = useSearchParams();
  const q = params.get("q");
  const handlePhraseClick = async () => {
    localStorage.setItem(EV_USER_EMAIL, data.email);
    localStorage.setItem(EV_USER_TYPE, userType);
    if (userType === "CLIENT") {
      if (q === "Apply to become a client") {
        router.push("https://formstack.io/1A423");
      } else if (q === "Sign up for coaching") {
        router.push("https://formstack.io/027B5");
      } else {
        console.log("Check console");
      }
    } else if (userType === "COACH") {
      if (q === "Apply to become a coach") {
        router.push("https://formstack.io/3DDE6");
      } else if (q === "") {
        router.push("https://formstack.io/2CA02");
      } else {
        console.log("Check console!");
      }
    } else {
      alert("Something went Wrong Please try again!");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <form>
      <div className="flex w-full flex-col gap-y-3">
        <input
          className="font-[400] outline-none text-[20px] w-full text-[#FFFFFF] opacity-60 border focus:border-[#CE0019] bg-[#FFFFFF1A]  rounded-[10px]  py-3 px-3 "
          type="text"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <input
          className="font-[400] outline-none text-[20px] w-full text-[#FFFFFF] opacity-60 border focus:border-[#CE0019] bg-[#FFFFFF1A]  rounded-[10px]  py-3 px-3 "
          type="text"
          name="phrase"
          placeholder="Enter Passphrase"
          onChange={handleChange}
        />
        <Button text={"Continue"} onClick={handlePhraseClick} />
      </div>
    </form>
  );
};
