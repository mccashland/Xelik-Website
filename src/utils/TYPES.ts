export const EV_USER_EMAIL = "EV_USER_MAIL";
export const EV_USER_TYPE = "EV_USER_TYPE";
export type USER_TYPE = "CLIENT" | "COACH";
export type CONTRACT = {
  name:
    | ""
    | "4 Month 1 on 1 coaching (Full)"
    | "4 Month 1 on 1 coaching (Monthly)"
    | "4 Month 1 on 1 coaching (Half)"
    | "6 Month 1 on 1 coaching (Full)"
    | "6 Month 1 on 1 coaching (Half)"
    | "6 Month 1 on 1 coaching (Monthly)"
    | "Bi-Weekly 4 Month 1 on 1 coaching Agreement (Monthly)"
    | "Bi-Weekly 6 Month 1 on 1 coaching (Monthly)"
    | "Recurring Bi-Weekly Coaching Agreement (Bi-Weekly)"
    | "Recurring Bi-Weekly Coaching Agreement (Monthly)"
    | "Recurring App Access Agreement (Monthly)";
  contractLength: "" | "Monthly" | "4 Month" | "6 Month" | "12 Month";
  contractType: "" | "1 on 1 Coaching" | "App Access";
  paymentFrequency: "" | "Full" | "Half" | "Monthly" | "Bi-Weekly";
  pricing:
    | ""
    | "$1,400"
    | "$1,125"
    | "$2,100"
    | "$399"
    | "$750"
    | "$250"
    | "$99"
    | "$129"
    | "$249";
};

export type CLIENT_OBJECT = {
  attributes: {
    type: string;
    url: string;
  };
  Name: string;
  Email__c: string;
  Client_Contract_Length__c: "Monthly" | "4 Month" | "6 Month" | "12 Month";
  Client_Contract_Type__c: "1 on 1 Coaching" | "App Access";
  Client_Payment_Frequency__c: "Full" | "Half" | "Monthly" | "Bi-Weekly";
  Coach_payment_frequency__c:
    | "Bi-weekly"
    | "Monthly"
    | "Quarterly"
    | "Bi-annually";
  Date_Signed_Up__c: string;
};
