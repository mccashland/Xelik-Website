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
const Page = () => {
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
          alert("Something went wrong!!!");
        }
        setUser(res.data.data);
      } else if (userType === "CLIENT") {
        const res = await axios.get(`/api/client?email=${userEmail}`);
        if (!res.data.data) {
          alert("Something went wrong!!!");
        }
        setUser(res.data.data);
      }
      // }
    };
    query();
  }, []);
  if (user?.Coach_payment_frequency__c) {
    switch (user.Coach_payment_frequency__c) {
      case "Bi-weekly":
        return <Bi_weekly_fourMonth_monthly name={user.Name} />;
      case "Monthly":
        return <Bi_weekly_fourMonth_monthly name={user.Name} />;
      case "Bi-annually":
        return <Bi_weekly_fourMonth_monthly name={user.Name} />;
      case "Quarterly":
        return <Bi_weekly_fourMonth_monthly name={user.Name} />;
      default:
        return <div>Invalid data sent</div>;
    }
  }
  if (user?.Client_Contract_Type__c === "App Access") {
    return <Recuring_App_Access />;
  }
  if (user?.Client_Contract_Type__c === "1 on 1 Coaching") {
    if (user?.Client_Contract_Length__c === "4 Month") {
      switch (user.Client_Payment_Frequency__c) {
        case "Full":
          return <Four_month_full />;
        case "Bi-Weekly":
          return <Bi_weekly_fourMonth_monthly name={user.Name} />;
        case "Half":
          return <Four_month_half />;
        case "Monthly":
          return <Four_month_monthly userName={user.Name} />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_Contract_Length__c === "6 Month") {
      switch (user.Client_Payment_Frequency__c) {
        case "Full":
          return <Six_month_full_Agrement />;
        case "Bi-Weekly":
          return <Bi_weekly_Six_month />;
        case "Half":
          return <Six_month_half_Agrement />;
        case "Monthly":
          return <Six_month_monthly_Agrement />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_Contract_Length__c === "Monthly") {
      switch (user.Client_Payment_Frequency__c) {
        case "Bi-Weekly":
          return <Recuring_Bi_weekly />;
        case "Monthly":
          return <Recuring_Bi_weekly_monthly />;
        default:
          return <div>Invalid data sent</div>;
      }
    }
  }

  return <div className="font-bold  text-[white]">Loading...</div>;
};
export default Page;
