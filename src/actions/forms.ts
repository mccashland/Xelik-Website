"use server";

import { EV_USER_EMAIL, EV_USER_TYPE } from "@/utils/TYPES";
import { cookies } from "next/headers";

import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter valid email!",
  }),
});
export const onSubmit = async (formData: any) => {
  // const { email, userType, phrase } = formData;
  //   const email = formData.get("email");
  //   const userType = formData.get("userType");
  //   const phrase = formData.get("phrase");
  //   const validateEmail = emailSchema.safeParse({
  //     email: formData.get("email"),
  //   });
  //   if (!email || !validateEmail) {
  //     return { error: "Plase enter valid email" };
  //   }
  //   cookies().set(EV_USER_EMAIL, email?.toString());
  //   cookies().set(EV_USER_TYPE, userType);
  //   console.log(userType);
  //   if (userType === "CLIENT") {
  //     if (q === "Apply to become a client") {
  //       router.push("https://formstack.io/1A423");
  //     } else if (q === "Sign up for coaching") {
  //       router.push("https://formstack.io/027B5");
  //     } else {
  //       console.log("Check console");
  //     }
  //   } else if (userType === "COACH") {
  //     if (q === "Apply to become a coach") {
  //       router.push("https://formstack.io/3DDE6");
  //     } else if (q === "Sign Up to become a coach") {
  //       router.push("https://formstack.io/2CA02");
  //     } else {
  //       console.log("Check console!");
  //     }
  //   } else {
  //     alert("Something went Wrong Please try again!");
  //   }
};
