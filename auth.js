var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://login.salesforce.com/services/oauth2/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "authorization_code",
    client_id:
      "3MVG9Xl3BC6VHB.ZKH6Y1bGcY89pEht2VIYH3xpCKMHfTok141SjXFeWFAAJMwqpxLrSlku_FqwaNh2G.ITXq",
    code_verifier: "50s6cTTSlKGko0n-tJNAQBbv2GWu5_3BzzTicswC1oo",
    code: "aPrxHq9CBrrwsA4QAI5xeiexsTlIQG52AT0rNZ59OyidJOoVm0CgE0NgPLPqXa16EZJzEMxi0Q%3D%3D",
    redirect_uri: "https://login.salesforce.com",
  }),
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
