"use server";
import axios from "axios";
import { getAccessToken } from "./getAccessToken";
var jsforce = require("jsforce");

export const getCoach = async ({ email }: { email: string }) => {
  const base_url = process.env.SALSEFORCE_BASE_URL;
  const accessToken = await getAccessToken();
  let api_base_url = `https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/query?q=SELECT Name, Email, Coach_payment_frequency__c from Contact`;
  try {
    let res = await axios.get(api_base_url, {
      headers: {
        Authorization: "Bearer " + accessToken.access_Token,
      },
    });
    console.log(res.data);
    return { data: res.data };
    console.log(accessToken.access_token);
    var conn = new jsforce.Connection({
      instanceUrl: base_url,
      accessToken: accessToken.access_token,
    });
    await conn.query(
      `SELECT Name, Email, Coach_payment_frequency__c from Contact where Email='${email}'`,
      function (err: any, result: any) {
        console.log(result);
        console.log(err);
        if (err) {
          return { error: err };
        }
        return { data: result.records[0] };
      }
    );
  } catch (err) {
    return { error: err };
  }
};
