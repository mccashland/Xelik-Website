"use client";
import Coach_Bi_annually from "@/components/Contracts/Coaches_Contracts/Coach_Bi-annually";
import Coach_monthly from "@/components/Contracts/Coaches_Contracts/Coach_Monthly";
import Coach_Quarterly from "@/components/Contracts/Coaches_Contracts/Coach_Quarterly";
import SixMonth_Bi_Weekly_Monthly from "@/components/Contracts/SixMonth(Bi-Weekly)/SixMonth_Bi-Weekly_Monthly";
import React from "react";

const Test = () => {
  return (
    <div>
      <Coach_Bi_annually userName="sohail" />
      <Coach_monthly userName={"arslan"} />
      <Coach_Quarterly userName={"arslaaaaaaaaan"} />
    </div>
  );
};

export default Test;
