"use server";

import axios from "axios";

const getClient = async ({ email }: { email: string }) => {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const apiUrl = `${process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL}/services/data/v59.0/query`;
  const queryHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
  const queryParams = {
    q: `SELECT Name, Email__c, Client_contract_length__c, Client_contract_type__c, Client_payment_frequency__c from Client__c where Email__c = '${email}'`,
  };
  try {
    const result = await axios.get(apiUrl, {
      params: queryParams,
      headers: queryHeaders,
    });
    if (result.data.records.length <= 0) {
      return { message: "User not found" };
    }
    return { data: result.data };
  } catch (err) {
    return { error: err };
  }
};
