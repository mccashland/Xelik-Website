"use client"
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FourMonth_Bi_Weekly_Monthly = ({ userName }: { userName: string }) => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!pdfRef.current) {
      alert("pdfRef is null");
      return;
    }

    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff", 
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("coach_agreement.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <div ref={pdfRef} className="flex w-full justify-center"> {/* Added bg-white */}
        <div className="flex flex-col gap-10 my-4">
          <div className="main-heading text-[1.5rem] sm:text-[3rem] 2xl:text-[5rem] p-[3px] flex justify-center items-center text-center text-[#000000] font-bold">
            4 Month Bi-Weekly 1 on 1 coaching (Monthly)
          </div>
          <div className="flex flex-col gap-10 w-[90%] sm:w-[80%] m-auto">
            <div className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
              This Sales Agreement (“Agreement”) for the sale of consulting
              services is between Elevate Wellness and Personal Training, and{" "}
              <span className="underline">{userName}</span> (the “Buyer”).
            </div>
            <div className="span text-[#000000] text-[1rem] opacity-100 font-bold">
              The parties agree as follows:
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                1. Sale of Services.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                The Sellers shall sell to the Buyer and the Buyer shall purchase
                from the Sellers the services set forth on Exhibit A (the
                “Services”) in the quantities and at the prices stated in clause
                3. The Buyer shall pay all taxes and third-party expenses
                imposed on, in connection with, or measured by the transaction
                contemplated by this agreement
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                3. Invoices; Payment.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                The Buyer agrees to pay $250 biweekly, a payment that will occur
                for 4 months over the duration of the Services. Cash payment for
                the Services is due within 30 days of the date of any given
                Sellers’s invoice. The Services will begin immediately upon the
                effective date and will end exactly 4 months after the beginning
                of the Services. Missed payments may result in suspension or
                termination of Services with no refund of previous payments.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                4. Confidentiality.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                The Sellers will keep the Buyer’s information confidential and
                will only share the information with parties when strictly
                required to fulfill the Services, or when the Buyer gives the
                Sellers consent in writing to share specific information. The
                Buyer agrees not to copy, share, reproduce, reverse engineer, or
                create derivatives of the Services provided by the Sellers.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                5. No Cancellation.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                The Buyer acknowledges that there is a no cancellation policy.
                The Buyer is committing to full payment for the 4-month Services
                by the end of the 4-month period.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                6. Delivery; Title; and Risk of Loss.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                The Sellers shall deliver the Services online. Any goods
                purchased through the Sellers will be provided via drop shipping
                and title to and risk of loss of the goods will pass to the
                Buyer upon such delivery by the Sellers. Any stated delivery
                dates are approximate. The Sellers will not be liable for any
                losses, damages, penalties, or expenses for failure to meet any
                delivery date.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                14. Recovery of Expenses.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                In any adversarial proceedings between the parties arising out
                of this agreement or the transactions it contemplates, the sole
                remedy the Buyer will be entitled to recover from the Sellers is
                a refund of payment for the Services.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                15. Entire Agreement.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                This agreement constitutes the entire agreement between the
                parties with respect to the subject matter of this agreement and
                supersedes all other agreements, whether written or oral,
                between the parties.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                16. Amendments.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                No amendment to this agreement will be effective unless it is in
                writing and signed by both parties,
              </span>
            </div>
            <div className="paragraph1">
              <span className="span text-[#000000] text-[1rem] opacity-100 font-bold">
                17. Counterparts; Electronic Signatures.
              </span>
              <span className="paragraph text-[#000000] text-base ml-[5px] opacity-[0.7]">
                This agreement may be signed by one or more counterparts, which
                together will form a single agreement. This agreement may be
                signed electronically.
              </span>
            </div>
            <div className="pt-20 text-[1rem] sm:text-[1.5rem] 2xl:text-[5rem] text-[#000000] font-bold m-auto">
              Release from Liability for Services
            </div>
            <div className="main dev flex flex-col space-y-8 text-[#000000] text-[1rem] opacity-[0.7] font-bold">
              <div>
                The buyer understands that all nutrition recommendations are
                merely recommendations and are not to be taken as medical
                advice. The recommendations are not prescriptions by any doctor
                or dietician. The buyer agrees to waive any liability due to
                nutrition or food-related recommendations for any coaches,
                partners, or anyone related to Elevate Wellness and Personal
                Training LLC in the event of illness or otherwise.
              </div>
              <div>
                By this Waiver, I assume any risk, and take full responsibility
                and waive any claims of personal injury, death or damage to
                personal property associated with such Services, including but
                not limited to temporary or permanent damage, unsatisfactory
                results from said Service being provided to me, and personal
                property damage.
              </div>
              <div>
                The provision of this Waiver and Release will continue in full
                force and effect even after termination of the Services being
                provided to me, whether by agreement, by operation of law, or
                otherwise.
              </div>
              <div>
                In consideration of my participation in nutrition counseling, I
                hereby accept all risk to my health and of my injury or death
                that may result from such participation and I hereby release
                Elevate Wellness and Personal Training LLC, its members,
                officers, agents, employees and independent contractors from any
                liability whatsoever to me, my personal representatives, estate,
                heirs, next of kin, and assigns for any and all claims and
                causes of action for loss of or damage to my property and for
                any and all illness, injury or other harm to my person,
                including my death, that may result from or occur during my
                participation in nutrition and fitness counseling, whether
                caused by the sole or concurrent negligence of Elevate Wellness
                and Personal Training, LLC, its members, officers, agents,
                employees and independent contractors.
              </div>
              <input type="text" />
              <div className="py-4">
                <button onClick={generatePDF}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourMonth_Bi_Weekly_Monthly;
