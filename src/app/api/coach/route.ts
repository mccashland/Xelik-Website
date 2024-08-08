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
    `https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/query?q=SELECT Name, Email, Coach_payment_frequency__c from Contact where Email='${email}'`,
    {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`,
      },
    }
  );
  return Response.json({ data: res.data.records[0] });
}

// export async function createContact(pdfUrl:any) {
//   console.log("pdf url",pdfUrl)
//   const token = await getAccessToken();
//   console.log("token",token.data)
//   try {
//     const res = await axios.post(
//       "https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/sobjects/Contact",
//       JSON.stringify({
//         Name:pdfUrl,
           
//       }),
//       {
//         headers: {
//           Authorization: `Bearer ${token.data.access_token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log("responsecdff",res.data)
//     return res.data;
//   } catch (error) {
//     console.error("Error creating contact:", error);
//     throw error;
//   }
// }