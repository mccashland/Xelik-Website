import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Replace these values with your Salesforce credentials
    const salesforceBaseUrl = process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL;
    const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    // Salesforce REST API endpoint for querying objects
    const apiUrl = `${salesforceBaseUrl}/services/data/v51.0/query/?q=SELECT Name FROM ${process.env.NEXT_PUBLIC_CLIENT_OBJECT_NAME}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const data = response.data.records[1].attributes.url;
    const apiUrl2 = `${salesforceBaseUrl}${data}`;
    console.log(apiUrl2);
    const response2 = await axios.get(apiUrl2, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const data2 = response2.data;
    res.status(200).json({ data2 });
  } catch (error: any) {
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
    console.error("Response headers:", error.response.headers);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
