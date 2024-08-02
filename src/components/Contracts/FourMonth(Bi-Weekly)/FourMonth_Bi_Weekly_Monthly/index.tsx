"use client";
import ContractInput from "../../ContractInput";
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SubmitButton from "@/components/Submit_Button";
import { useRouter } from 'next/navigation'
// import GeneratePDFButton from "@/app/test/GeneratePDFButton";
const FourMonth_Bi_Weekly_Monthly = ({ userName }: { userName: string }) => {
  const [loading, setLoading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter()
  const generatePDF = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
  
    if (!pdfRef.current) {
      alert("pdfRef is null");
      setLoading(false);
      return;
    }
  
    try {
      if (submitButtonRef.current) {
        submitButtonRef.current.style.display = "none";
      }
  
      (pdfRef.current as HTMLElement).style.backgroundColor = "#121c2f";
      const childElements = pdfRef.current.getElementsByTagName("*");
      for (let i = 0; i < childElements.length; i++) {
        (childElements[i] as HTMLElement).style.color = "#fff";
      }
  
      const canvas = await html2canvas(pdfRef.current, {
        scale: 1.1, 
        useCORS: true,
        backgroundColor: "#fff",
      });
  
      const imgData = canvas.toDataURL("image/jpeg", 0.5); 
  
      const pdf = new jsPDF("p", "mm", "a4", true); 
      const imgWidth = 210;
      const pageHeight = 297;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, 'FAST'); 
      heightLeft -= pageHeight;
  
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, 'FAST'); 
        heightLeft -= pageHeight;
      }
  
      const pdfBlob = pdf.output("blob");
      const formData = new FormData();
      formData.append(
        "pdfFile",
        pdfBlob,
        `${userName}_${new Date().toISOString().replace(/[:.]/g, "-")}.pdf`
      );
      formData.append("userName", userName);
  
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      const response = await fetch(`/api/upload-pdf`, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
       
        console.log("PDF uploaded successfully.");
        router.push("https://www.trainerize.me/checkout/xelik/Team.Xelik?planGUID=108eb8f61fae478281cf5e935b51cb28&mode=checkout")
      } else {
        console.error("Failed to upload PDF.");
      }
  
    
    } catch (error) {
      console.error("Error generating or uploading PDF:", error);
    } finally {
      if (submitButtonRef.current) {
        submitButtonRef.current.style.display = "block";
      }
      setLoading(false);
    }
  };
  ;

  return (
    <>
      <div ref={pdfRef} className="flex w-full justify-center ">
        <div className="flex flex-col gap-10 my-4">
          <div className="main-heading text-[1.5rem] sm:text-[3rem] 2xl:text-[5rem]  p-[3px] flex justify-center items-center text-center text-[#ffffff] font-bold">
            4 Month Bi-Weekly 1 on 1 coaching (Monthly)
          </div>
          <div className="flex flex-col gap-5  w-[90%] sm:w-[80%] m-auto">
            <div className="text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
              This Sales Agreement (“Agreement”) for the sale of consulting
              services is between Elevate Wellness and Personal Training, and{" "}
              <span className="underline">{userName}</span> (the “Buyer”).
            </div>
            <div className="span text-[#ffff] text-[1rem] opacity-100 font-bold">
              The parties agree as follows:
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                1. Sale of Services.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Sellers shall sell to the Buyer and the Buyer shall purchase
                from the Sellers the services set forth on Exhibit A (the
                “Services”) in the quantities and at the prices stated in clause
                3. The Buyer shall pay all taxes and third-party expenses
                imposed on, in connection with, or measured by the transaction
                contemplated by this agreement
              </span>
            </div>
            <div className="paragraph1 ">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                {" "}
                2. Effectiveness; Date.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                This agreement is effective as of{" "}
                <span>
                  <ContractInput
                    name="date"
                    value={new Date().toDateString()}
                  />
                </span>
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                {" "}
                3. Invoices; Payment.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Buyer agrees to pay $250 biweekly, a payment that will occur
                for 4 months over the duration of the Services. Cash payment for
                the Services is due within 30 days of the date of any given
                Sellers’s invoice. The Services will begin immediately upon the
                effective date and will end exactly 4 months after the beginning
                of the Services. Missed payments may result in suspension or
                termination of Services with no refund of pervious payments.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                {" "}
                4. Confidentiality.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Sellers will keep the Buyer’s information confidential and
                will only share the information with parties when strictly
                required to fulfill the Services, or when the Buyer gives the
                Sellers consent in writing to share specific information. The
                Buyer agrees not to copy, share, reproduce, reverse engineer, or
                create derivatives of the Services provided by the Sellers.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                5. No Cancellation.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Buyer acknowledges that there is a no cancellation policy.
                The Buyer is committing to full payment for the 4-month Services
                by the end of the 4-month period.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                6. Delivery; Title; and Risk of Loss.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
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
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                7. Disclaimer of Warranty;
              </span>
              <span className="spansemibold text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7] ">
                The Goods and Services are being sold “as is,” and the Sellers
                disclaim all warranties of quality, whether express or implied,
                including the warranties of merchantability and fitness for
                particular purpose.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Buyer acknowledges that it has not been induced by any
                statements or representations of any person with respect to the
                quality or condition of the Services and that no such statements
                or representations have been made. The Sellers make no
                representations or warranties as to specific outcomes or
                results. The Buyer acknowledges that it has relied solely on the
                investigations, examinations, and inspections as the Buyer has
                chosen to make and that the Sellers have afforded the Buyer the
                opportunity for full and complete investigations, examinations,
                and inspections.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                8. Limitation of Liability.
              </span>
              <span className="spansemibold text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7] ">
                The Sellers will not be liable for any indirect, special,
                consequential, or punitive damages arising out of or relating to
                this agreement or the transactions it contemplates (whether for
                breach of contract, tort, negligence, or other form of action)
                and irrespective of whether the Sellers have been advised of the
                possibility of any such damage. In no event will the Sellers’s
                liability exceed the price the Buyer paid to the Sellers for the
                specific Goods and Services provided by the Sellers giving rise
                to the claim or cause of action.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                9. Limitation of Actions.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                No action arising out of or relating to this agreement or the
                transactions it contemplates may be commenced against the
                Sellers more than 30 days after the basis for such claim could
                reasonably have been discovered.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                10. Security Interest.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Buyer hereby grants to the Sellers a security interest in
                the Goods and Services sold to the Buyer under this agreement
                and any proceeds therefrom (including accounts receivable),
                until payment in full for the Goods and Services has been
                received by the Sellers. The Buyer shall sign and deliver to the
                Sellers any document to perfect this security interest that the
                Sellers reasonably request.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                11. Governing Law and Designation Forum.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                (a) The laws of the State of Tennessee (without giving effect to
                its conflicts of law principles) govern all matters arising out
                of or relating to this agreement and the transactions it
                contemplates, including, without limitation, its interpretation,
                construction, validity, performance (including the details of
                performance), and enforcement. In the event that any provision
                of this Agreement is deemed unenforceable, the remaining
                portions of the Agreement shall be severed and remain in full
                force.
                <div className="mt-4">
                  (b) Any dispute, controversy or claim arising out of or
                  relating to this contract including any question regarding its
                  existence, interpretation, validity, breach or termination or
                  the business relationship created by it shall be referred to
                  and finally resolved by arbitration under the American
                  Arbitration Association Arbitration Rules.
                </div>
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                12. Unforeseen Circumstances.
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Sellers will not be liable for delays in performance or for
                non-performance due to unforeseen circumstances or causes beyond
                the Sellers’s reasonable control.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                13. Assignment; Delegation.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Buyer may not assign any of its rights under this agreement
                or delegate any performance under this agreement, except with
                the prior written consent of the Sellers. Any purported
                assignment of rights or delegation of performance in violation
                of this section is void.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                14. Recovery of Expenses.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                In any adversarial proceedings between the parties arising out
                of this agreement or the transactions it contemplates, the sole
                remedy the Buyer will be entitled to recover from the Sellers is
                a refund of payment for the Services.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                15. Entire Agreement.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                This agreement constitutes the entire agreement between the
                parties with respect to the subject matter of this agreement and
                supersedes all other agreements, whether written or oral,
                between the parties.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                16. Amendments.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                No amendment to this agreement will be effective unless it is in
                writing and signed by both parties,
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                17. Counterparts; Electronic Signatures.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
                This agreement may be signed by one or more counterparts, which
                together will form a single agreement. This agreement may be
                signed electronically.
              </span>
            </div>
            <div className="space-y-6 py-5 text-[#ffff] text-[1rem] opacity-100 font-bold">
              <div className="">Exhibit A</div>
              <div className="">Services</div>
              <div className=" opacity-[0.7]">
                The Sellers have a range of services to fulfill various wellness
                goals the Buyer may have. The Buyer will have the option to
                receive an average of one weekly personal training call that is
                set for at least 30 minutes, throughout the duration of the
                contract. This call may be rescheduled by the Sellers or the
                Buyer with 48 hours of notice or given written consent of the
                other party through email or text message it may be rescheduled
                at any time. Other supplemental services the Sellers may provide
                to the Buyer to help them reach their wellness goals include;
                weekly custom-made workout plans, habit formation plans,
                tailored nutrition plans including macronutrient and caloric
                recommendations, and tracking software. It is likely the Sellers
                will provide some, or all, of these supplemental services in
                accordance with supporting the Buyer in their wellness goals.
                However, if the Sellers do not include any of the supplemental
                services listed in the Buyer’s tailored plan, and the Buyer
                wishes to add them, the Sellers must provide the Buyer with the
                supplemental service within a reasonable time upon request.
              </div>
              <div className="py-5 ">
                The Buyer is signing this agreement on the date stated under
                their signature.
              </div>
              <div className="py-10 flex flex-col gap-y-4">
                <span className="underline flex items-end ">
                  Buyer Signature:{" "}
                  <ContractInput value="A" name="signature-one" />
                </span>
                <div>
                  <span className="underline">
                    Buyer Name:{" "}
                    <span>
                      <ContractInput value={userName} name="userName" />
                    </span>
                  </span>
                </div>
                <div>
                  <span className="underline">
                    Buying Date: {new Date().toDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-10 text-[1rem] sm:text-[1.5rem] 2xl:text-[5rem] text-[#ffffff] font-bold m-auto ">
              Release from Liability for Services
            </div>
            <div className="main dev flex flex-col space-y-5 text-[#ffff] text-[1rem] opacity-[0.7] font-bold">
              <div>
                <span className="underline">{userName}</span>, does hereby waive
                and release, indemnify, and forever discharges Elevate Wellness
                and Personal Training LLC, and its agents, employees, officers,
                directors, affiliates, successors, members, independent
                contractors, and assigns, of and from any and all claims,
                demands, debts, contracts, expenses, causes of action, lawsuits,
                damages and liabilities, of every kind and nature, whether known
                or unknown, in law or equity, that I, the Buyer, ever had or may
                have, arising from or in any way related to the Services being
                provided to me by the Seller provided that this waiver of
                liability does not apply to any acts of gross negligence, or
                intentional, willful or wanton misconduct.
              </div>
              <div>
                The buyer understands that all nutrition recommendations are
                merely recommendations and are not to be taken as medical
                advice. The recommendations are not prescriptions by any doctor
                or dietician. The buyer agrees to waive any liability due to
                nutrition or food related recommendations for any coaches,
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
                I have read, understand and fully agree to the terms of this
                Waiver and Release. I understand and confirm that by signing
                this Waiver and Release, I have given up considerable future
                legal rights. I have signed this Agreement freely, voluntarily,
                under no duress or threat of duress, without inducement, promise
                or guarantee being communicated to me. My signature is proof of
                my intention to execute a complete and unconditional Waiver and
                Release of all liability to the full extent of the law.
              </div>
              <div>
                I acknowledge that I am aware that Elevate Wellness and Personal
                Training LLC, its members, officers, agents, employees and
                independent contractors are not medical doctors and do not
                diagnose disease. I also acknowledge that I have been warned
                that I should consult a Physician before undergoing any dietary
                or food supplement changes. I also affirmatively state that I
                have disclosed any and all known medical or genetic conditions,
                medications I use, and any significant personal or family
                medical history. Any recommendations that I follow for changes
                in diet, including but not limited to the use of food
                supplements and medications are entirely my choice and my
                responsibility. I am knowingly assuming any risk associated with
                nutritional counseling.
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
              <div>
                I further agree to indemnify and hold harmless the Elevate
                Wellness and Personal Training, LLC, its members, officers,
                agents, employees and independent contractors, to the fullest
                extent permitted under law, from any and all liability for the
                injury or death of any person(s) and damage to property that may
                result from my negligent or intentional act or omission while
                participating in the described nutrition and fitness counseling
                session.
              </div>
              <div className=" text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7]">
                I HAVE CAREFULLY READ THIS AGREEMENT AND UNDERSTAND IT TO BE A
                RELEASE OF ALL CLAIMS AND CAUSES OF ACTION FOR MY INJURY OR
                DEATH OR DAMAGE TO MY PROPERTY THAT OCCURS WHILE PARTICIPATING
                IN NUTRITION AND FITNESS COUNSELING AND OR DEATH OF ANY PERSON
                AND DAMAGE TO PROPERTY.
              </div>
              <div>
                  <div>
                    <span className="underline flex items-end ">
                      Buyer Signature:{" "}
                      <ContractInput value="A" name="signature" />
                    </span>
                  </div>
                <div className="py-4">
                  <SubmitButton
                  ref={submitButtonRef}
                    loading={loading}
                    userName={userName}
                    url="https://www.trainerize.me/checkout/xelik/Team.Xelik?planGUID=bd4402b3df6f454694f4a4d40fe8dfd4"
                    onClick={generatePDF}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourMonth_Bi_Weekly_Monthly;
