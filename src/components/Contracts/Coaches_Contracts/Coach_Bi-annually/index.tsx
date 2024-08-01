import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import ContractInput from "../../ContractInput";
import SubmitButton from "@/components/Submit_Button";
import Link from "next/link";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Coach_Bi_annually = ({ userName }: { userName: string }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

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
        router.push("https://www.trainerize.me/checkout/xelik/Team.Xelik?planGUID=bd4402b3df6f454694f4a4d40fe8dfd4")
      } else {
        console.error("Failed to upload PDF.");
      }
  
      // pdf.save("coach_agreement.pdf");
    } catch (error) {
      console.error("Error generating or uploading PDF:", error);
    } finally {
      if (submitButtonRef.current) {
        submitButtonRef.current.style.display = "block";
      }
      setLoading(false);
    }
  };
  
  
  return (
    <>
      <div ref={pdfRef} className="flex w-full justify-center   ">
        <div className="flex flex-col gap-10  my-4">
          <div className="main-heading text-[1.5rem] sm:text-[3rem] 2xl:text-[5rem]  p-[3px] flex justify-center items-center text-center text-[#ffffff] font-bold">
            Coach Agreement (Biannual)
          </div>
          <div className="flex flex-col gap-5  w-[90%] sm:w-[80%] m-auto">
            <div className="paragraph text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
              This Sales Agreement (“Agreement”) for the sale of products and
              services is between Elevate Wellness and Personal Training LLC
              (the “Seller”), and <span className="underline">{userName}</span>{" "}
              (the “Coach”).
            </div>
            <div className="span text-[#ffff] text-[1rem] opacity-100 font-bold">
              The parties agree as follows:
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                1. Sale of Products and Services.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                In exchange for the Seller providing the Coach access to its
                products and services as set forth in Exhibit A (the “Product”)
                the Coach agrees to the payment terms as stated in clause 3. The
                Coach recognizes that it is his, her or their sole
                responsibility to pay all taxes and third-party expenses imposed
                on, or in connection with, any transactions associated with this
                agreement.
              </span>
            </div>
            <div>
              <div className="paragraph  text-[#ffffff] text-base ml-[5px]">
                Exhibit A:
              </div>
              <br />
              <div className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
                The Coach will receive access to the Seller’s online educational
                coaching platform that will provide training on the Seller’s
                proprietary systems, processes and templates. The Coach will
                also receive access to strength and conditioning management
                software, nutrition planning software, customer relationship
                management, use of our payment processing services, and client
                contract templates. An invitation to join the Seller’s coaching
                community, which includes access to communication channels, and
                an invitation to coaching community events the Seller holds, is
                also included.
              </div>
            </div>
            <div className="paragraph1 ">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                {" "}
                2. Effectiveness; Date.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                This agreement is effective as of the date of the last party’s
                signature,{" "}
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
                3. Invoices; Payment and Service Fees.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Coach agrees to pay a membership fee (“Membership Fee”) in
                accordance with the terms outlined in Exhibit B. The Coach has
                agreed to pay $474 biannually over the duration of this
                Agreement to meet the Membership Fee requirement. Payment for
                the Product is due within 30 days of the date of a credit charge
                or a Seller’s invoice. Access to all products and services will
                begin immediately upon the effective date and will continue in
                perpetuity unless the agreement is terminated. The agreement can
                only be terminated by the Coach after six (6) months have passed
                from the effective date by sending notice of termination through
                email to{" "}
                <span className="text-[#4f4ff2] underline font-bold">
                  <Link href={"mailto:zainegallagher@xelik.com"}>
                    zainegallagher@xelik.com.
                  </Link>
                </span>{" "}
                Thirty days of notice must be given before the termination can
                be fulfilled. A Coach forfeits any claim to or use of the
                Seller’s Product once the Agreement is terminated.
              </span>
              <br />
              <br />
              <div className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                Further, a service fee (“Service Fee”), in accordance with the
                terms outlined in Exhibit C, will be applied to all of the
                Coach’s revenue streams that use the Seller’s Product to provide
                fulfillment. For any client leads that the Seller provides the
                Coach, as will be stated in writing through email
                correspondence, an additional finder’s fee (“Finder’s Fee”) with
                the terms outlined in Exhibit C will be applied.
              </div>
            </div>
            <br />
            <div className="paragraph  text-[#ffffff] text-base ml-[5px]">
              Exhibit B:
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/assets/imgs/coach_price_img.png"
                alt=""
                height={500}
                width={500}
                className=""
              />
            </div>
            <div className=" text-[#ffff] text-[1rem] opacity-[0.7]">
              If both (a) and (b) are met during a given monthly period, then
              the discounted Membership Fee is to be applied instead of the
              default Membership Fee.
              <div className="px-10">
                (a){" "}
                <span className="">
                  Six (6) months have passed from the effective date.{" "}
                </span>
              </div>
              <div className="px-10">
                (b){" "}
                <span>
                  The Coach is using the Seller’s Product to service the
                  equivalent of ten (10) fully paying clients. A fully paying
                  client pays at least $349.00 monthly. The Coach will be
                  receiving a minimum of $3,490.00 in client payment monthly.{" "}
                </span>
              </div>
            </div>
            <div className="paragraph  text-[#ffffff] text-base ml-[5px]">
              Exhibit C:
            </div>
            <div className="paragraph flex flex-col items-center justify-start text-[#ffffff] text-base ml-[5px]">
              <div className="text-[#fff] font-normal underline">
                Service Fee
              </div>
              <div className="flex gap-11">
                <div>Default</div>
                <div>30.0%</div>
              </div>
              <div className="flex gap-4">
                <div>Discounted</div>
                <div>20.0%</div>
              </div>
            </div>
            <div className=" text-[#ffff] text-[1rem] opacity-[0.7]">
              If (c) is met during a given biweekly payment period, then the
              discounted Service Fee is to be applied instead of the default
              Service Fee.
              <div className="px-10">
                (c){" "}
                <span>
                  The Coach is using the Seller’s Product to service the
                  equivalent of twenty (20) fully paying clients. A fully paying
                  client pays at least $349.00 monthly. The Coach will be
                  receiving a minimum of $6,980.00 in client payment monthly.{" "}
                </span>
              </div>
            </div>
            <div className="paragraph flex flex-col items-center justify-start text-[#ffffff] text-base ml-[5px]">
              <div className="text-[#fff] font-normal underline">
                Finder&apos;s Fee
              </div>
              <div className="flex gap-11">
                <div>Default</div>
                <div>25.0%</div>
              </div>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                {" "}
                4. Delivery; Title; and Risk of Loss.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Seller shall deliver the Services ONLINE. Any goods or
                services purchased through the Seller will be provided via drop
                shipping and title to and risk of loss of the goods will pass to
                the Coach upon delivery by the Seller. Any stated delivery dates
                are approximate. The Seller will not be liable for any losses,
                damages, penalties, or expenses for failure to meet any delivery
                date.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                5. Disclaimer of Representations and Warranty; Due Diligence.
                The Product is being sold “as is,” and the Seller disclaims all
                warranties of quality, whether express or implied, including the
                warranties of merchantability and fitness for particular
                purpose.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Coach acknowledges that it has not been induced by any
                statements or representations of any person with respect to the
                quality or condition of the Product and that no such statements
                or representations have been made. The Coach acknowledges that
                he or she has relied solely on the investigations, examinations,
                and inspections as he or she has chosen to make and that the
                Seller has afforded the Coach the opportunity for full and
                complete investigations, examinations, and inspections.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                6. Delivery; Title; and Risk of Loss.6. Limitation of Liability.
                The Seller will not be liable for any indirect, special,
                consequential, or punitive damages (including lost profits)
                arising out of or relating to this agreement or the transactions
                it contemplates (whether for breach of contract, tort,
                negligence, or other form of action) and irrespective of whether
                the Seller has been advised of the possibility of any such
                damage. In no event will the Seller’s liability exceed the price
                the Coach paid to the Seller for the Product provided by the
                Seller giving rise to the claim or cause of action.{" "}
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                7. Limitation of Actions.{" "}
              </span>
              <span className="spansemibold text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7] ">
                No action arising out of or relating to this agreement or the
                transactions it contemplates may be commenced against the Seller
                more than 30 days after the basis for such claim could
                reasonably have been discovered.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                8. Security Interest.{" "}
              </span>
              <span className="spansemibold text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7] ">
                The Coach hereby grants to the Seller a security interest in the
                goods and services sold to their clients under this agreement
                and any proceeds therefrom (including accounts receivable),
                until payment in full for the goods and services has been
                received by the Seller. The Coach shall sign and deliver to the
                Seller any document to perfect this security interest that the
                Seller reasonably requests.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                9. Seller’s Rights to Property.{" "}
              </span>
              <span className=" ">
                <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                  {" "}
                  For purposes of this letter agreement,
                </span>{" "}
                <span className="text-bold text-[#fff] opacity-100">
                  “Designs and Materials”
                </span>{" "}
                <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                  shall mean all analytics, algorithms, designs, inventions,
                  products, computer programs, procedures, improvements,
                  developments, drawings, notes, documents, models, information,
                  and materials made, conceived, or developed by the Seller,
                  alone or with others. The Seller may use proprietary Designs
                  and Materials in business processes the Coach has exposure to
                  in this partnership. The Coach has no rights to the
                  intellectual property or Designs and Materials of the Seller.
                  The Seller retains all rights, titles, and interest in and to
                  Designs and Materials (including all modifications or
                  derivatives thereof), whether or not patentable,
                  copyrightable, or otherwise legally protectable.
                </span>
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                10. Confidentiality.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Coach recognizes that, in the course of performing services
                under this letter Agreement, information and materials from the
                Seller and knowledge about information of a confidential nature
                concerning the Seller, including, knowledge about its business,
                products and planned products, marketing plans, financial
                information, forecasts, personnel, customers, clients,
                suppliers, experimental work and programming techniques may be
                disclosed. All such proprietary knowledge, information, and
                materials acquired, are and will be the confidential information
                of the Seller (collectively, the
              </span>{" "}
              <span className="text-bold text-[#fff] opacity-100">
                “Confidential Information”
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                ). Confidential Information will not include, however, any
                information which (i) is or becomes part of the public domain
                through no fault of the Coach, or that the Seller regularly
                gives to third parties without restriction on use or disclosure,
                (ii) is rightfully acquired by the Coach or any of their
                Representatives (as defined below) from a third party who has
                the right to disclose such information or materials without
                breach of any confidentiality obligation to the Seller; or (iii)
                is independently developed by the Coach or any of their
                Representatives without access to any Confidential Information
                from the Seller.{" "}
              </span>
              <span className="text-bold text-[#fff] opacity-100">
                “Representatives”
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                includes their affiliates and their respective employees,
                consultants, agents, advisors, owners, shareholders,
                co-investors, partners, and financing sources. Except as
                required by applicable law, the Coach agrees to hold all such
                Confidential Information in strict confidence, not to disclose
                it to others, except to Representatives, who have a bona fide
                need to know such Confidential Information for the purposes of
                performing the obligations under this letter Agreement, or use
                such Confidential Information commercially, except in performing
                the obligations under this letter Agreement. The Coach agrees to
                return to the Seller upon reasonable request, and in any event
                after termination of this letter Agreement, any and all records,
                paper, media or other embodiment containing any Confidential
                Information.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                11. Governing Law and Designation of Forum.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                (a) The laws of the State of Tennessee (without giving effect to
                its conflicts of law principles) govern all matters arising out
                of or relating to this agreement and the transactions it
                contemplates, including, without limitation, its interpretation,
                construction, validity, performance (including the details of
                performance), and enforcement.
                <div className="mt-4">
                  (b) A party bringing a legal action or proceeding against the
                  other party arising out of or relating to this agreement or
                  the transactions it contemplates must bring the legal action
                  or proceeding in any court of the State of Tennessee sitting
                  in Knox County. Each party to this agreement consents to the
                  exclusive jurisdiction of the courts of the State of Tennessee
                  sitting in Knox County and its appellate courts, for the
                  purpose of all legal actions and proceedings arising out of or
                  relating to this agreement or the transactions it
                  contemplates.
                </div>
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                12. Liability Insurance.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                Coach acknowledges that Seller will not carry any liability
                insurance on behalf of Coach. Coach will be responsible for
                maintaining in force adequate liability insurance to protect
                Coach from (i) claims under workers’ compensation and state
                disability acts, and (ii) claims of personal injury (or death)
                or tangible or intangible property damage (including loss of
                use) that arise out of any act or omission of Coach or any Coach
                Personnel.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                13. Unforeseen Circumstances.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Seller will not be liable for delays in performance or for
                non-performance due to unforeseen circumstances or causes beyond
                the Seller’s reasonable control.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                14. Assignment; Delegation.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Coach may not assign any of its rights under this agreement
                or delegate any performance under this agreement, except with
                the prior written consent of the Seller. Any purported
                assignment of rights or delegation of performance in violation
                of this section is void.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                15. Seller’s Right to Termination.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                The Seller has the right to terminate this agreement at any time
                due to concerns about the Coach’s performance or ethics. The
                Seller has the right to terminate this agreement without cause
                after six (6) months have passed from the effective date. Notice
                of termination will be sent to the Coach via electronic mail.
                The Seller will have the right to immediately revoke the Coach’s
                access to the Seller’s product once the notice has been sent.
                The Seller is required to reimburse the Coach for any remaining
                prepaid Membership Fees at the time of termination.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                16. Recovery of Expenses.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
                In any adversarial proceedings between the parties arising out
                of this agreement or the transactions it contemplates, the
                prevailing party will be entitled to recover from the other
                party, in addition to any other relief awarded, all expenses
                that the prevailing party incurs, including legal fees and
                expenses.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                17. Entire Agreement.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
                This agreement constitutes the entire agreement between the
                parties with respect to the subject matter of this agreement and
                supersedes all other agreements, whether written or oral,
                between the parties.
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                18. Amendments.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
                No amendment to this agreement will be effective unless it is in
                writing and signed by both parties,
              </span>
            </div>
            <div className="paragraph1">
              <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
                19. Counterparts; Electronic Signatures.{" "}
              </span>
              <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
                This agreement may be signed by one or more counterparts, which
                together will form a single agreement. This agreement may be
                signed electronically.
              </span>
            </div>
            <div className="space-y-6 py-5 text-[#ffff] text-[1rem] opacity-100 font-bold">
              <div className="py-16 flex flex-col gap-y-4">
                <span className="underline flex items-end ">
                  Coach Signature:{" "}
                  <ContractInput value="A" name="signature-one" />
                </span>
                <div>
                  <span className="underline">
                    Name:{" "}
                    <span>
                      <ContractInput value={userName} name="userName" />
                    </span>
                  </span>
                </div>
                <div>
                  <span className="underline">
                    Date: {new Date().toDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-10 text-[1rem] sm:text-[1.5rem] 2xl:text-[5rem] text-[#ffffff] font-bold m-auto ">
              Release from Liability for Services
            </div>
            <div className="main dev flex flex-col space-y-5 text-[#ffff] text-[1rem] opacity-[0.7] font-bold">
              <div>
                <span className="underline">{userName}</span>{" "}
                <span>
                  {" "}
                  (“Coach”), does hereby waive and release, indemnify, and
                  forever discharges Elevate Wellness and Personal Training LLC
                  (“Seller”), and its agents, employees, officers, directors,
                  affiliates, successors, members, independent Coachs, and
                  assigns, of and from any and all claims, demands, debts,
                  contracts, expenses, causes of action, lawsuits, damages and
                  liabilities, of every kind and nature, whether known or
                  unknown, in law or equity, that I ever had or may have,
                  arising from or in any way related to the products and
                  services (“Product”) being provided to me by the Seller
                  provided that this waiver of liability does not apply to any
                  acts of gross negligence, or intentional, willful or wanton
                  misconduct.
                </span>
              </div>
              <div>
                The Coach understands that all nutrition recommendations are
                merely recommendations and are not to be taken as medical
                advice. The recommendations are not prescriptions by any doctor
                or dietician. The Coach agrees to waive any liability due to
                nutrition or food related recommendations for anyone related to
                Elevate Wellness and Personal Training LLC in the event of
                illness or otherwise.
              </div>
              <div>
                By this Waiver, I assume any risk, and take full responsibility
                and waive any claims of personal injury, death or damage to
                personal property associated with the Product, including but not
                limited to temporary or permanent damage, unsatisfactory results
                from said Product being provided to me, and personal property
                damage.
              </div>
              <div>
                The provision of this Waiver and Release will continue in full
                force and effect even after termination of the Product being
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
                independent Coachs are not medical doctors and do not diagnose
                disease. I also acknowledge that I have been warned that I
                should consult a Physician before undergoing any dietary or food
                supplement changes. I also affirmatively state that I have
                disclosed any and all known medical or genetic conditions,
                medications I use, and any significant personal or family
                medical history. Any recommendations that I follow for changes
                in diet, including but not limited to the use of food
                supplements, are entirely my choice and my responsibility. I am
                knowingly assuming any risk associated with nutritional
                counseling.
              </div>
              <div>
                In consideration of my participation in nutrition counseling, I
                hereby accept all risk to my health and of my injury or death
                that may result from such participation and I hereby release
                Elevate Wellness and Personal Training LLC, its members,
                officers, agents, employees and independent Coachs from any
                liability whatsoever to me, my personal representatives, estate,
                heirs, next of kin, and assigns for any and all claims and
                causes of action for loss of or damage to my property and for
                any and all illness, injury or other harm to my person,
                including my death, that may result from or occur during my
                participation in nutrition counseling, whether caused by the
                sole or concurrent negligence of Elevate Wellness and Personal
                Training, LLC, its members, officers, agents, employees and
                independent Coachs.
              </div>
              <div>
                I further agree to indemnify and hold harmless the Elevate
                Wellness and Personal Training, LLC, its members, officers,
                agents, employees and independent Coachs, to the fullest extent
                permitted under law, from any and all liability for the injury
                or death of any person(s) and damage to property that may result
                from my negligent or intentional act or omission while
                participating in the described nutrition counseling session.
              </div>
              <div className=" text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7]">
                I HAVE CAREFULLY READ THIS AGREEMENT AND UNDERSTAND IT TO BE A
                RELEASE OF ALL CLAIMS AND CAUSES OF ACTION FOR MY INJURY OR
                DEATH OR DAMAGE TO MY PROPERTY THAT OCCURS WHILE PARTICIPATING
                IN NUTRITION COUNSELING AND OR DEATH OF ANY PERSON AND DAMAGE TO
                PROPERTY.
              </div>
              <div>
                <span className="underline flex items-end ">
                  Coach Signature: <ContractInput value="A" name="signature" />
                </span>
                <div className="py-3">
                  <span className="underline">
                    Date: {new Date().toDateString()}
                  </span>
                </div>
                <div className="py-4">
                <SubmitButton ref={submitButtonRef} loading={loading} userName={userName}  url="https://www.trainerize.me/checkout/xelik/Team.Xelik?planGUID=bd4402b3df6f454694f4a4d40fe8dfd4" onClick={generatePDF} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coach_Bi_annually;
