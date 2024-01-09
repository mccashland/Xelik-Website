"use client";
import React, { ChangeEvent, useState } from "react";
import Button from "../Button/page";
import { USER_EMAIL, USER_TYPE } from "@/utils/TYPES";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  phrase: string;
};

export const Phrase = ({ userType }: { userType: USER_TYPE }) => {
  const [data, setData] = useState<FormData>({ email: "", phrase: "" });
  const router = useRouter();
  const handlePhraseClick = () => {
    // validate phrase
    localStorage.setItem(USER_EMAIL, data.email);
    if (userType === "CLIENT") {
      router.push("https://formstack.io/BFBE1");
    } else if (userType === "COACH") {
      router.push("https://formstack.io/7A4C3");
    } else {
      alert("Something went Wrong Please try again!");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
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
    </>
  );
};
