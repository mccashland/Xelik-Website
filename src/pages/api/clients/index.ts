import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const authorizationUrl = "https://login.salesforce.com/services/oauth2/token";
  // const clientId = "your_client_id";
  // const redirectUri = "your_redirect_uri";
  // const codeChallenge = "your_generated_code_challenge";
  // const codeMethod = "S256";
  // const authorizationCode = "your_authorization_code";
  // const headers = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  // };
  // const tokenParams = {
  //   grant_type: "authorization_code",
  //   code: authorizationCode,
  //   client_id: clientId,
  //   redirect_uri: redirectUri,
  //   code_verifier: codeChallenge,
  // };
  const accessToken =
    "00DHp0000033KK3!ARUAQLZq5esUFEp2R9pfJwC98A5z8Lmz0yvqe.SD6tYWoygd.8vYWUJT__u2GHSUGm0susn1BqJyBLAFTU0chZtzmVCwC9y2";
  const apiUrl = `${process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL}/services/data/v59.0/query`;
  const queryHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
  const queryParams = {
    q: `SELECT Name, Email__c, Client_Contract_Length__c, Client_Contract_Type__c, Client_Payment_Frequency__c from Client__c where Email__c = '${req.query.email}'`,
  };
  if (req.method === "GET") {
    try {
      const result = await axios.get(apiUrl, {
        params: queryParams,
        headers: queryHeaders,
      });
      if (result.data.records.length <= 0) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ data: result.data.records[0] });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
};
export default handler;
