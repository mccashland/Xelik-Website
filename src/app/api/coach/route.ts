import axios from "axios";

export async function GET(request: Request) {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const apiUrl = `${process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL}/services/data/v59.0/query`;
  const queryHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
  const { searchParams } = new URL(request.url);
  let email = searchParams.get("email");
  if (!email) {
    return Response.json({ error: "Email is required!" });
  }
  const queryParams = {
    q: `SELECT Name, Email, Coach_payment_frequency__c, RecordTypeId from Contact where Email='${email}' and RecordTypeId='012Hp000001yiv0IAA'`,
  };
  try {
    const result = await axios.get(apiUrl, {
      params: queryParams,
      headers: queryHeaders,
    });
    if (result.data.records.length <= 0) {
      return Response.json({ message: "User not found" });
    }
    return Response.json({ data: result.data.records });
  } catch (err) {
    return Response.json({ error: err });
  }
}
