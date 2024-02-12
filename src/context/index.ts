"use client";
import React, { Dispatch, createContext } from "react";
interface SignContextProps {
  signature: string;
  setSignature: Dispatch<React.SetStateAction<string>>;
}
export const SignContext = createContext<SignContextProps>({
  signature: "",
  setSignature: () => {},
});
