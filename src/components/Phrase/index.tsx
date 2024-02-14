"use client";
import React from "react";
import Button from "../Button/page";
import {
  EV_USER_EMAIL,
  EV_USER_TYPE,
  FORMS_NAMES,
  USER_TYPE,
} from "@/utils/TYPES";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { emailRegex } from "@/utils/validation";
export const Phrase = ({
  userType,
  q,
}: {
  userType: USER_TYPE;
  q: FORMS_NAMES;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const handlePhraseClick = async (data: any) => {
    localStorage.setItem(EV_USER_EMAIL, data.email);
    localStorage.setItem(EV_USER_TYPE, userType);
    console.log(userType);
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
      } else if (q === "Sign Up to become a coach") {
        router.push("https://formstack.io/2CA02");
      } else {
        console.log("Check console!");
      }
    } else {
      alert("Something went Wrong Please try again!");
    }
  };
  const validPhrase = () => {};

  return (
    <form onSubmit={handleSubmit(handlePhraseClick)}>
      <div className="flex w-full flex-col gap-y-3">
        <input
          className="font-[400] outline-none text-[20px] w-full text-[#FFFFFF] opacity-60 border focus:border-[#CE0019] bg-[#FFFFFF1A]  rounded-[10px]  py-3 px-3 "
          type="text"
          placeholder="Enter Your Email"
          {...register("email", { pattern: emailRegex, required: true })}
        />
        {errors.email && (
          <span className="text-[red]">Please enter vaild email</span>
        )}
        <input
          className="font-[400] outline-none text-[20px] w-full text-[#FFFFFF] opacity-60 border focus:border-[#CE0019] bg-[#FFFFFF1A]  rounded-[10px]  py-3 px-3 "
          type="text"
          placeholder="Enter Passphrase"
          {...register("phrase", {
            required: true,
            validate: (value) =>
              (userType === "CLIENT" && value === "XelinkClient2024") ||
              (userType === "COACH" && value === "XelinkCoach2024") ||
              "Please enter valid phrase",
          })}
        />
        {errors.phrase && (
          <span className="text-[red]">Please enter vaild phrase</span>
        )}
        <Button text={"Continue"} />
      </div>
    </form>
  );
};
