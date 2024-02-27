"use client";
import React, { useEffect, useState } from "react";
import { CLIENT_OBJECT, EV_USER_EMAIL, EV_USER_TYPE } from "@/utils/TYPES";
import { useRouter } from "next/navigation";
import axios from "axios";
import Recuring_App_Access from "@/components/Contracts/AppAccess/Recuring_App_Access";
import Recuring_Bi_weekly from "@/components/Contracts/Recurring/Recuring_Bi_weekly";
import Four_month_full from "@/components/Contracts/FourMonth/four_month_full";
import Bi_weekly_fourMonth_monthly from "@/components/Contracts/FourMonth/four_month_BiWeekly";
import Four_month_half from "@/components/Contracts/FourMonth/four_month_half";
import Four_month_monthly from "@/components/Contracts/FourMonth/four_month_monthly";
import Six_month_full_Agrement from "@/components/Contracts/SixMonth/Six_month_full";
import Bi_weekly_Six_month from "@/components/Contracts/SixMonth/Six_Month_BiWeekly";
import Six_month_half_Agrement from "@/components/Contracts/SixMonth/Six_month_half";
import Six_month_monthly_Agrement from "@/components/Contracts/SixMonth/Six_month_monthly";
import Recuring_Bi_weekly_monthly from "@/components/Contracts/Recurring/Recuring_Monthly";
import { CircularProgress } from "@mui/material";
const ContractPopulte = () => {
  const router = useRouter();
  const [user, setUser] = useState<CLIENT_OBJECT>();
  useEffect(() => {
    const query = async () => {
      let userEmail = localStorage.getItem(EV_USER_EMAIL);
      let userType = localStorage.getItem(EV_USER_TYPE);
      if (!userEmail || !userType) {
        router.back();
      }
      if (userType === "COACH") {
        const res = await axios.get(`/api/coach?email=${userEmail}`);
        if (!res.data.data) {
          console.log(res.data.message);
        }
        setUser(res.data.data);
      } else if (userType === "CLIENT") {
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
      switch (user.Client_payment_frequency__c) {
        case "Full":
          return <Four_month_full userName={user.Name} />;
        case "Bi-Weekly":
          return <Bi_weekly_fourMonth_monthly userName={user.Name} />;
        case "Half":
          return <Four_month_half userName={user.Name} />;
        case "Monthly":
          return <Four_month_monthly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "6 Month") {
      switch (user.Client_payment_frequency__c) {
        case "Full":
          return <Six_month_full_Agrement userName={user.Name} />;
        case "Bi-Weekly":
          return <Bi_weekly_Six_month userName={user.Name} />;
        case "Half":
          return <Six_month_half_Agrement userName={user.Name} />;
        case "Monthly":
          return <Six_month_monthly_Agrement userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "Monthly") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-Weekly":
          return <Recuring_Bi_weekly userName={user.Name} />;
        case "Monthly":
          return <Recuring_Bi_weekly_monthly userName={user.Name} />;
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
