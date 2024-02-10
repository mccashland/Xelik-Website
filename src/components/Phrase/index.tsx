"use client";
import React, { ChangeEvent, useState } from "react";
import Button from "../Button/page";
import { EV_USER_EMAIL, EV_USER_TYPE, USER_TYPE } from "@/utils/TYPES";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  phrase: string;
};

export const Phrase = ({ userType }: { userType: USER_TYPE }) => {
  const [data, setData] = useState<FormData>({ email: "", phrase: "" });
  const router = useRouter();
  const handlePhraseClick = async () => {
    // const data = await getFormData();
    // validate phrase
    localStorage.setItem(EV_USER_EMAIL, data.email);
    localStorage.setItem(EV_USER_TYPE, userType);
    if (userType === "CLIENT") {
      router.push(`${process.env.NEXT_PUBLIC_CLIENT_FORM}`);
    } else if (userType === "COACH") {
      router.push(`${process.env.NEXT_PUBLIC_COACH_FORM}`);
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
