// const jsforce = require("jsforce");
// export async function GET(request: Request) {
//   const conn = new jsforce.Connection({
//     oauth2: {
//       clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
//       redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URL,
//     },
//     instanceUrl: process.env.NEXT_PUBLIC_SALSEFORCE_BASE_URL,
//     refreshToken: refreshToken,
//   });

//   // Use the connection to interact with Salesforce REST APIs
//   async function querySalesforceData() {
//     try {
//       // Example: Query Salesforce data
//       const records = await conn.query("SELECT Id, Name FROM Account LIMIT 10");
//       console.log("Query Result:", records);
//     } catch (error) {
//       console.error("Error querying Salesforce data:", error);
//     }
//   }

//   // Perform operations using the existing connection
//   querySalesforceData();
// }

const axios = require("axios");

export async function GET(request: Request) {
  // Salesforce credentials
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL;
  const authorizationCode = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  // Token endpoint
  const tokenUrl = "https://login.salesforce.com/services/oauth2/token"; // Use 'https://test.salesforce.com/services/oauth2/token' for sandbox

  // Request body for token exchange
  const data = {
    grant_type: "authorization_code",
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code: authorizationCode,
  };

  // Make a POST request to the token endpoint
  axios
    .post(tokenUrl, new URLSearchParams(data))
    .then((response: any) => {
      console.log("Access Token:", response.data.access_token);
      console.log("Refresh Token:", response.data.refresh_token);
    })
    .catch((error: any) => {
      console.error(
        "Error exchanging authorization code for tokens:",
        error.response.data.error_description
      );
    });
  return Response.json({ code: authorizationCode });
}
