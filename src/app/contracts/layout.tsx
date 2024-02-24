"use client";
import { add_sign } from "@/actions";
import { SignContext } from "@/context";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [signature, setSignature] = useState("");
  return (
    <SignContext.Provider value={{ signature, setSignature }}>
      <form action={add_sign}>{children}</form>
    </SignContext.Provider>
  );
}
