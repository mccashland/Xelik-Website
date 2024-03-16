import { PrismaClient } from "@prisma/client";

var jsforce = require("jsforce");
export async function GET(request: Request) {
  const prismaClient = new PrismaClient();
  const accessToken = await prismaClient.token.findFirst();

  const { searchParams } = new URL(request.url);
  let email = searchParams.get("email");
  if (!email) {
    return Response.json({ error: "Email is required!" });
  }
  try {
    var conn = new jsforce.Connection({
      oauth2: {
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URL,
      },
      instanceUrl: process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL,
      accessToken: accessToken?.accessToken,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
    });
    conn.on("refresh", function (newToken: any, res: any) {
      prismaClient.token.update({
        where: {
          id: accessToken?.id,
        },
        data: {
          accessToken: newToken,
        },
      });
      // Refresh event will be fired when renewed access token
      // to store it in your storage for next request
    });
    var res;
    await conn.query(
      `SELECT Name, Email, Client_contract_length__c, Client_contract_type__c, Client_payment_frequency__c from Contact where Email='${email}'`,
      function (err: any, result: any) {
        if (err) {
          return Response.json({ error: err });
        }
        res = result.records[0];
        return Response.json({ data: result.records[0] });
      }
    );
    // This line will only be executed after the query completes
    return Response.json({ data: res });
  } catch (err) {
    return Response.json({ error: err });
  }
}
