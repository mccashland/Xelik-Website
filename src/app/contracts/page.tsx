"use client";
import React, { useEffect, useState } from "react";
import Contract from "../../components/Contracts/page";
import Clients from "../../components/Contracts/ClientsWaiver";
import {
  CLIENT_OBJECT,
  CONTRACT,
  EV_USER_EMAIL,
  EV_USER_TYPE,
} from "@/utils/TYPES";
import { useRouter } from "next/navigation";
import axios from "axios";
import { contracts } from "@/utils/const";
const page = () => {
  const router = useRouter();
  const [user, setUser] = useState<CLIENT_OBJECT>();
  const [contract, setContract] = useState<CONTRACT>({
    name: "",
    contractLength: "",
    contractType: "",
    paymentFrequency: "",
    pricing: "",
  });
  useEffect(() => {
    const query = async () => {
      let userEmail = localStorage.getItem(EV_USER_EMAIL);
      let userType = localStorage.getItem(EV_USER_TYPE);
      if (!userEmail || !userType) {
        router.back();
      }
      if (userEmail !== null) {
        const res = await axios.get(`/api/clients?email=${userEmail}`);
        if (!res.data.data) {
          alert("Something went wrong!!!");
        }
        setUser(res.data.data);
      }
    };
    query();
  }, []);

  useEffect(() => {
    console.log(user);
    const contractInfo = contracts.filter((contr) => {
      if (
        user?.Client_Contract_Length__c === contr.contractLength &&
        user.Client_Contract_Type__c === contr.contractType &&
        user.Client_Payment_Frequency__c === contr.paymentFrequency
      ) {
        return contr;
      }
    });
    console.log(contractInfo);
    setContract(contractInfo[0]);
  }, [user]);

  return (
    <div>
      <Contract
        buyerName={user?.Name}
        heading={contract?.name}
        prices={contract?.pricing}
        date={user?.Date_Signed_Up__c}
      />
      <Clients />
    </div>
  );
};

export default page;
