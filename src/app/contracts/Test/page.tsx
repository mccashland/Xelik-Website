import Recuring_App_Access from "@/components/Contracts/Recuring_App_Access";
import Recuring_Bi_weekly from "@/components/Contracts/Recuring_Bi_weekly";
import Recuring_Bi_weekly_monthly from "@/components/Contracts/Recuring_Bi_weekly_monthly";
import Six_month_full_Agrement from "@/components/Contracts/Six_month_full_Agrement";
import Six_month_half_Agrement from "@/components/Contracts/Six_month_half_Agrement";
import Six_month_monthly_Agrement from "@/components/Contracts/Six_month_monthly_Agrement";
import Client_wavier from "@/components/Contracts/client_wavier";
import React from "react";

const Test = () => {
  return (
    <>
      {/* <Bi_weekly_fourMonth_monthly userName={"sohail"} />
      <Bi_weekly_Six_month userName={"sixx month"} /> */}
      {/* <Client_wavier userName={""} />
      <Four_month_monthly userName={""} />
      <Four_month_half userName={""} />
      <Four_month_full userName={""} /> */}
      <Recuring_App_Access userName={""} />
      <Recuring_Bi_weekly userName={""} />
      <Recuring_Bi_weekly_monthly userName={""} />
      <Six_month_full_Agrement userName={""} />
      <Six_month_half_Agrement userName={""} />
      <Six_month_monthly_Agrement userName={""} />
    </>
  );
};

export default Test;
