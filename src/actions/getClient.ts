"use server";
const jsforce = require("jsforce");
export const getClient = async (email: string | null) => {
  if (!email) {
    return { error: "Email is required!" };
  }
  try {
    var conn = new jsforce.Connection({
      oauth2: {
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URL,
      },
      instanceUrl: process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL,
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
    });
    conn.on("refresh", function (accessToken: any, res: any) {
      // Refresh event will be fired when renewed access token
      // to store it in your storage for next request
    });
    await conn.query(
      `SELECT Name, Email, Client_contract_length__c, Client_contract_type__c, Client_payment_frequency__c from Contact where Email='${email}'`,
      function (err: any, result: any) {
        if (err) {
          console.log(err);
          return { error: "Time Outdd" };
        }
        console.log(result.records[0]);
        return { data: result.records[0] };
      }
    );
  } catch (err) {
    return { error: err };
  }
};
