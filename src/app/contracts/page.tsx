"use client";
import React, { useEffect, useState } from "react";
import { CLIENT_OBJECT, EV_USER_EMAIL, EV_USER_TYPE } from "@/utils/TYPES";
import { useRouter } from "next/navigation";
import axios from "axios";
import Recuring_App_Access from "@/components/Contracts/Recuring_App_Access";
import Recuring_Bi_weekly from "@/components/Contracts/Recuring_Bi_weekly";
import Four_month_full from "@/components/Contracts/four_month_full";
import Bi_weekly_fourMonth_monthly from "@/components/Contracts/Bi_weekly_fourMonth_monthly";
import Four_month_half from "@/components/Contracts/four_month_half";
import Four_month_monthly from "@/components/Contracts/four_month_monthly";
import Six_month_full_Agrement from "@/components/Contracts/Six_month_full_Agrement";
import Bi_weekly_Six_month from "@/components/Contracts/Bi_weekly_Six_month";
import Six_month_half_Agrement from "@/components/Contracts/Six_month_half_Agrement";
import Six_month_monthly_Agrement from "@/components/Contracts/Six_month_monthly_Agrement";
import Recuring_Bi_weekly_monthly from "@/components/Contracts/Recuring_Bi_weekly_monthly";
import { CircularProgress } from "@mui/material";
import Bi_weekly_fourMonth_biweekly from "@/components/Contracts/Bi_weekly_fourMonth_biweekly";
import Bi_weekly_Six_Month_biWeekly from "@/components/Contracts/Bi_weekly_Six_Month_biWeekly";
import Half_yearly from "@/components/Contracts/Half_year";
import Full_yearly from "@/components/Contracts/Full_year";
const ContractPopulte = () => {
  const router = useRouter();
  const [user, setUser] = useState<CLIENT_OBJECT>();
  useEffect(() => {
    const query = async () => {
      let userEmail = localStorage.getItem(EV_USER_EMAIL);
      let userType = localStorage.getItem(EV_USER_TYPE);
      console.log(userEmail);
      // console.log(userType);
      if (!userEmail || !userType) {
        router.back();
      }
      if (userType === "Coach") {
        const res = await axios.get(`/api/coach?email=${userEmail}`);
        if (!res.data.data) {
          console.log(res.data.message);
        }
        setUser(res.data.data);
      } else if (userType === "Client") {
        const res = await axios.get(`/api/client?email=${userEmail}`);
        if (!res.data.data) {
          setUser(res.data.message);
        }
        setUser(res.data.data);
      }
    };
    query();
  }, []);
  if (user?.Coach_payment_frequency__c) {
    switch (user.Coach_payment_frequency__c) {
      case "Bi-weekly":
        return <Bi_weekly_fourMonth_monthly userName={user.Name} />;
      case "Monthly":
        return <Bi_weekly_fourMonth_monthly userName={user.Name} />;
      case "Bi-annually":
        return <Bi_weekly_fourMonth_monthly userName={user.Name} />;
      case "Quarterly":
        return <Bi_weekly_fourMonth_monthly userName={user.Name} />;
      default:
        return <div>Invalid data sent</div>;
    }
  }
  if (user?.Client_contract_type__c === "App Access") {
    return <Recuring_App_Access userName={user.Name} />;
  }
  if (user?.Client_contract_type__c === "1 on 1 Coaching") {
    if (user?.Client_contract_length__c === "4 Month") {
      switch (user.Client_payment_frequency__c.toLowerCase()) {
        case "full":
          return <Four_month_full userName={user.Name} />;
        case "bi-weekly":
          return <Bi_weekly_fourMonth_monthly userName={user.Name} />;
        case "half":
          return <Four_month_half userName={user.Name} />;
        case "monthly":
          return <Four_month_monthly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (
      user?.Client_contract_length__c.toLowerCase() === "4 month (bi-weekly)"
    ) {
      switch (user.Client_payment_frequency__c.toLowerCase()) {
        case "bi-weekly":
          return <Bi_weekly_fourMonth_biweekly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c.toLowerCase() === "6 month") {
      switch (user.Client_payment_frequency__c.toLowerCase()) {
        case "full":
          return <Six_month_full_Agrement userName={user.Name} />;
        case "bi-weekly":
          return <Bi_weekly_Six_month userName={user.Name} />;
        case "half":
          return <Six_month_half_Agrement userName={user.Name} />;
        case "monthly":
          return <Six_month_monthly_Agrement userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (
      user?.Client_contract_length__c.toLowerCase() === "6 month (bi-weekly)"
    ) {
      switch (user.Client_payment_frequency__c.toLowerCase()) {
        case "bi-weekly":
          return <Bi_weekly_Six_Month_biWeekly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c.toLowerCase() === "recurring") {
      switch (user.Client_payment_frequency__c.toLowerCase()) {
        case "bi-weekly":
          return <Recuring_Bi_weekly userName={user.Name} />;
        case "monthly":
          return <Recuring_Bi_weekly_monthly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c.toLowerCase() === "12 month") {
      switch (user.Client_payment_frequency__c.toLowerCase()) {
        case "half":
          return <Half_yearly userName={user.Name} />;
        case "full":
          return <Full_yearly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
};
export default ContractPopulte;
