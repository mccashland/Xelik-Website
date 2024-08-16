import { getAccessToken } from "@/actions/getAccessToken";
import axios from "axios";

export async function PATCH(request: Request) {
  const token = await getAccessToken();
  const { searchParams } = new URL(request.url);
  let email = searchParams.get("email");
  let contractUrl = searchParams.get("contractUrl");

  if (!email) {
    return Response.json({ error: "Email is required!" });
  }
  if (!contractUrl) {
    return Response.json({ error: "Contract URL is required!" });
  }

  try {
    // First, query the Contact to get its ID
    const contactQuery = await axios.get(
      `https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/query?q=SELECT Id FROM Contact WHERE Email='${email}'`,
      {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      }
    );

    if (contactQuery.data.records.length === 0) {
      return Response.json({ error: "Contact not found" });
    }

    const contactId = contactQuery.data.records[0].Id;
    // // Then, update the Contract_URL__c field on the Contact
    const updateRes = await axios.patch(
      `https://data-enterprise-9179.my.salesforce.com/services/data/v59.0/sobjects/Contact/${contactId}`,
      {
        Contract_URL__c: contractUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!updateRes) {
      return Response.json({ error: "Failed to update Contract URL" });
    }
    return Response.json({
      success: true,
      message: "Contract URL updated successfully",
    });
  } catch (error) {
    console.error("Error updating Contract URL:", error);
    return Response.json({ error: "Failed to update Contract URL" });
  }
}
