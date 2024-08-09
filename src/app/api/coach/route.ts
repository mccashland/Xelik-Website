import { getAccessToken } from "@/actions/getAccessToken";
import axios from "axios";
export async function GET(request: Request) {
  const token = await getAccessToken();
  const { searchParams } = new URL(request.url);
  let email = searchParams.get("email");
  if (!email) {
    return Response.json({ error: "Email is required!" });
  }
  const res = await axios.get(
    `https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/query?q=SELECT Name, Email, IP_Address__c, Coach_payment_frequency__c from Contact where Email='${email}'`,
    {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
      },
    }
  );
  return Response.json({ data: res.data.records[0] });
}
