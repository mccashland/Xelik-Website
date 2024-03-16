"use client";
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
      <form>{children}</form>
    </SignContext.Provider>
  );
}
