import React from "react";
import Monthly_year from "@/components/Contracts/Monthly_year";
import Half_yearly from "@/components/Contracts/Half_yearly";
import Full_yearly from "@/components/Contracts/Full_yearly";
import Bi_weekly_fourMonth_biweekly from "@/components/Contracts/Bi_weekly_fourMonth_biweekly";
import Bi_weekly_sixMonth from "@/components/Contracts/Bi_weekly_sixMonth";
const Test = () => {
  return (
    <div>
      <Monthly_year userName={"arslan"} />
      <Half_yearly userName={""} />
      <Full_yearly userName={""} />
      <Bi_weekly_fourMonth_biweekly userName={""} />
      <Bi_weekly_sixMonth userName={""} />
    </div>
  );
};

export default Test;
