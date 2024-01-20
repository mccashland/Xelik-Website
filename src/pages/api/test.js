const jsforce = require("jsforce");

const conn = new jsforce.Connection({
  loginUrl: "https://login.salesforce.com", // or use test.salesforce.com for sandbox
});

const username = "tariqbrohi143@gmail.com";
const password = "LifeIsGood@1122" + "ImQvDAFdGtNdESSZCEfXkuRt4"; // Concatenate the security token

conn.login(username, password, function (err, userInfo) {
  if (err) {
    return console.error(err);
  }
  console.log(userInfo);

  console.log("Connected to Salesforce");
  // Your logic to query data goes here

  // Example: Query all Accounts
  conn.query(
    "SELECT Name FROM Coach__c where email=tariqbrohi143@gmail.com",
    function (err, result) {
      if (err) {
        return console.error(err);
      }
      for (let i = 0; i < result.length; i++) {
        console.log(result.records);
      }
      console.log("Total Records : " + result.toString());
      console.log("Fetched : " + result.records.length);
      console.log(
        "First Record : " +
          JSON.stringify(result.records[result.records.length - 1])
      );
    }
  );
});
