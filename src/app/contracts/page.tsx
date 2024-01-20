import React from 'react';
import Contract from '../../components/Contracts/page';
import Clients from '../../components/Contracts/ClientsWaiver';
 const fourMonth_full = "4 Month 1-on-1 Coaching Agreement (Full)";
const fourMonth_half = "4 Month 1-on-1 Coaching Agreement (Half)";
const fourMonth_monthly = "4 Month 1-on-1 Coaching Agreement (Monthly)";
const sixMonth_full = "6 Month 1-on-1 Coaching Agreement (Full)";
const sixMonth_half = "6 Month 1-on-1 Coaching Agreement (Half)";
const sixMonth_monthly = "6 Month 1-on-1 Coaching Agreement (Monthly)";
const FourBi_weekly = "Bi-Weekly 4 Month 1-on-1 Coaching Agreement (Monthly)";
const SixBi_weekly = "Bi-Weekly 6 Month 1-on-1 Coaching Agreement (Monthly)";
const recuringBi_weekly="Recurring Bi-Weekly 1-on-1 CoachingAgreement (Bi-Weekly)";
const recuringBi_monthly="Recurring Bi-Weekly 1-on-1 CoachingAgreement (Monthly)";
const recuringApp_Access="Recurring App Access Agreement";
const fourMonth_Full ="$1400 ";
const fourMonth_Half ="$750";
const fourMonth_Monthly="$399";
const sixMonth_Full ="$2100";
const sixMonth_Half="$1,125";
const sixMonth_Monthly="$399";
const four_MonthBiWeekly_Monthly="$250 ";
const six_MonthBiWeekly_Monthly="$250 ";
const recuringbi_weekly="$129 ";
const recuringbi_monthly="$249 ";
const recuringApp_access="$99 ";
const page = () => {
  return (
    <div>
      <Contract heading={fourMonth_full} prices={fourMonth_Full} />
      <Contract heading={fourMonth_half} prices={fourMonth_Half} />
      <Contract heading={fourMonth_monthly} prices={fourMonth_Monthly} />
      <Contract heading={sixMonth_full} prices={sixMonth_Full} />
      <Contract heading={sixMonth_half} prices={sixMonth_Half} />
      <Contract heading={sixMonth_monthly} prices={sixMonth_Monthly} />
      <Contract heading={FourBi_weekly} prices={four_MonthBiWeekly_Monthly} />
      <Contract heading={SixBi_weekly} prices={six_MonthBiWeekly_Monthly} />
      <Contract heading={recuringBi_weekly} prices={recuringbi_weekly} />
      <Contract heading={recuringBi_monthly} prices={recuringbi_monthly} />
      <Contract heading={recuringApp_Access} prices={recuringApp_access} />
       <Clients />
        </div>
  );
};

export default page;
