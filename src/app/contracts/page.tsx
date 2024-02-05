import React from "react";
import Contract from "../../components/Contracts/page";
import Four_month_full from "@/components/Contracts_Components/four_month_full";
import Four_month_half from "@/components/four_month_half";
import Four_month_monthly from "@/components/four_month_monthly";
import Six_month_full_Agrement from "@/components/Six_month_full_Agrement";
import Six_month_half_Agrement from "@/components/Six_month_half_Agrement";
import Six_month_monthly_Agrement from "@/components/Six_month_monthly_Agrement";
import Bi_weekly_fourMonth_monthly from "@/components/Bi_weekly_fourMonth_monthly";
import Bi_weekly_Six_month from "@/components/Bi_weekly_Six_month";
import Client_wavier from "@/components/client_wavier";
import Recuring_App_Access from "@/components/Recuring_App_Access";
import Recuring_Bi_weekly from "@/components/Recuring_Bi_weekly";
import Recuring_Bi_weekly_monthly from "@/components/Recuring_Bi_weekly_monthly";

const page = () => {
  return (
    <div>
      <Four_month_full />
      <Four_month_half />
      <Four_month_monthly />
      <Six_month_full_Agrement />
      <Six_month_half_Agrement />
      <Six_month_monthly_Agrement />
      <Recuring_App_Access />
      <Recuring_Bi_weekly />
      <Recuring_Bi_weekly_monthly />
      <Bi_weekly_fourMonth_monthly />
      <Bi_weekly_Six_month />
      <Client_wavier />
    </div>
  );
};

export default page;
