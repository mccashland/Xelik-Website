"use client";
import React, { useEffect, useState } from "react";
import { CLIENT_OBJECT, EV_USER_EMAIL, EV_USER_TYPE } from "@/utils/TYPES";
import { useRouter } from "next/navigation";
import axios from "axios";
import Recuring_App_Access from "@/components/Contracts/AppAccess/Recuring_App_Access";
import Recuring_Bi_weekly from "@/components/Contracts/Recurring/Recuring_Bi_weekly";
import Four_month_full from "@/components/Contracts/FourMonth/four_month_full";
import Four_month_half from "@/components/Contracts/FourMonth/four_month_half";
import Four_month_monthly from "@/components/Contracts/FourMonth/four_month_monthly";
import Recuring_Bi_weekly_monthly from "@/components/Contracts/Recurring/Recuring_Monthly";
import { CircularProgress } from "@mui/material";
import FourMonth_BiWeekly from "@/components/Contracts/FourMonth/four_month_BiWeekly";
import SixMonth_Bi_Weekly_Monthly from "@/components/Contracts/SixMonth(Bi-Weekly)/SixMonth_Bi-Weekly_Monthly";
import FourMonth_Bi_Weekly_BiWeekly from "@/components/Contracts/FourMonth(Bi-Weekly)/FourMonth_Bi_Weekly_BiWeekly";
import FourMonth_Bi_Weekly_Monthly from "@/components/Contracts/FourMonth(Bi-Weekly)/FourMonth_Bi_Weekly_Monthly";
import Six_Month_BiWeekly from "@/components/Contracts/SixMonth/Six_Month_BiWeekly";
import Six_month_monthly from "@/components/Contracts/SixMonth/Six_month_monthly";
import Six_month_half from "@/components/Contracts/SixMonth/Six_month_half";
import Six_month_full from "@/components/Contracts/SixMonth/Six_month_full";
import SixMonth_Bi_Weekly_BiWeekly from "@/components/Contracts/SixMonth(Bi-Weekly)/SixMonth_Bi_Weekly_BiWeekly";
import Recuring_Monthly from "@/components/Contracts/Recurring/Recuring_Monthly";
import Recuring_Bi_Weekly_BiWeekly from "@/components/Contracts/Recurring(Bi-Weekly)/Recuring_Bi_Weekly_BiWeekly";
import Half_Year from "@/components/Contracts/Years/Half_year";
import Full_Year from "@/components/Contracts/Years/Full_year";
import Coach_Monthly from "@/components/Contracts/Coaches_Contracts/Coach_Monthly";
import Coach_Bi_annually from "@/components/Contracts/Coaches_Contracts/Coach_Bi-annually";
import Coach_Quarterly from "@/components/Contracts/Coaches_Contracts/Coach_Quarterly";
const ContractPopulte = () => {
  const router = useRouter();
  const [user, setUser] = useState<CLIENT_OBJECT>();
  const [email, setEmail] = useState("");
  console.log(user);
  useEffect(() => {
    const query = async () => {
      let userEmail = localStorage.getItem(EV_USER_EMAIL);
      let userType = localStorage.getItem(EV_USER_TYPE);
      if (!userEmail || !userType) {
        router.back();
      }
      setEmail(userEmail as string);
      if (userType === "Coach") {
        const res = await axios.get(`/api/coach?email=${userEmail}`);
        if (!res.data.data) {
          setUser(res.data.message);
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
      case "Monthly":
        return (
          <Coach_Monthly
            userName={user.Name}
            IP={user.IP_Address__c}
            email={email}
          />
        );
      case "Bi-annually":
        return (
          <Coach_Bi_annually
            userName={user.Name}
            IP={user.IP_Address__c}
            email={email}
          />
        );
      case "Quarterly":
        return (
          <Coach_Quarterly
            userName={user.Name}
            IP={user.IP_Address__c}
            email={email}
          />
        );
      default:
        return <div>Invalid data sent</div>;
    }
  }

  if (user?.Client_contract_type__c === "App Access") {
    return (
      <Recuring_App_Access
        userName={user.Name}
        IP={user.IP_Address__c}
        email={email}
      />
    );
  }
  if (user?.Client_contract_type__c === "1 on 1 Coaching") {
    if (user?.Client_contract_length__c === "4 Month") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-weekly":
          return (
            <FourMonth_BiWeekly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Monthly":
          return (
            <Four_month_monthly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Half":
          return (
            <Four_month_half
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Full":
          return (
            <Four_month_full
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "4 Month (Bi-Weekly)") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-weekly":
          return (
            <FourMonth_Bi_Weekly_BiWeekly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Monthly":
          return (
            <FourMonth_Bi_Weekly_Monthly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "6 Month") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-weekly":
          return (
            <Six_Month_BiWeekly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Monthly":
          return (
            <Six_month_monthly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Half":
          return (
            <Six_month_half
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Full":
          return (
            <Six_month_full
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "6 Month (Bi-Weekly)") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-weekly":
          return (
            <SixMonth_Bi_Weekly_BiWeekly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Monthly":
          return (
            <SixMonth_Bi_Weekly_Monthly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "Recurring") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-weekly":
          return (
            <Recuring_Bi_weekly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Monthly":
          return (
            <Recuring_Monthly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "Recurring (Bi-Weekly)") {
      switch (user.Client_payment_frequency__c) {
        case "Bi-weekly":
          return (
            <Recuring_Bi_Weekly_BiWeekly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Monthly":
          return (
            <Recuring_Bi_weekly_monthly
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        default:
          return <div>Invalid data sent</div>;
      }
    }
    if (user?.Client_contract_length__c === "12 Month") {
      switch (user.Client_payment_frequency__c) {
        case "Half":
          return (
            <Half_Year
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
        case "Full":
          return (
            <Full_Year
              userName={user.Name}
              IP={user.IP_Address__c}
              email={email}
            />
          );
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
