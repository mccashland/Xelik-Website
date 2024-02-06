import React from "react";
import Signature from "../Signature/Signature";
const Contract = ({ heading, prices, buyerName, date }) => {
  return (
    <div className="flex w-full justify-center   ">
      <div className="flex flex-col gap-10  my-4">
        <div className="main-heading ">
          {/* heading start here  */}
          {heading}
        </div>
        <div className="flex flex-col gap-10  w-[90%] sm:w-[80%] m-auto">
          <div className="paragraph ">
            This Sales Agreement (“Agreement”) for the sale of consulting
            services is between Elevate Wellness and Personal Training, in
            Partnership with <span className="underline">{buyerName}</span> (the
            “Sellers”), and
            <span className="underline"> seller</span> (the “Buyer”).
          </div>
          <div className="span">The parties agree as follows:</div>
          <div className="paragraph1">
            <span className="span">1. Sale of Services.</span>
            <span className="paragraph">
              Sellers shall sell to the Buyer and the Buyer shall purchase from
              the Sellers the services set forth on Exhibit A (the “Services”)
              in the quantities and at the prices stated in clause 3. The Buyer
              shall pay all taxes and third-party expenses imposed on, in
              connection with, or measured by the transaction contemplated by
              this agreement.
            </span>
          </div>
          <div className="paragraph1 ">
            <span className="span "> 2.Effectiveness; Date.</span>
            <span className="paragraph">
              This agreement is effective as of{" "}
              <span className="underline">
                {new Date().getDay() +
                  "-" +
                  new Date().getDate() +
                  "-" +
                  new Date().getFullYear()}
              </span>
              , given both parties have signed it with a time stamp within 14
              calendar days after this date. If the signature of either party is
              after 14 days of the stated effective date, the date of the last
              signature will then be used as the effective date.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span"> 3.Invoices; Payment.</span>
            <span className="paragraph">
              {/* price props start here */}
              The Buyer agrees to pay{" "}
              <span className="underline">{prices} </span>a payment that will
              occur one-time upfrontfor theServices. Cash payment for the
              Services is due within 30 days of the date of the Sellers’invoice.
              The Services will begin immediately upon the effective date and
              will end exactly 4 months after the beginning of the Services.
              Missed payments may result in suspension or termination of
              Services with no refund of pervious payments.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span"> 4.Confidentiality.</span>
            <span className="paragraph">
              The Sellers will keep the Buyer’s information confidential and
              will only share the information with parties when strictly
              required to fulfill the Services, or when the Buyer gives the
              Sellers consent in writing to share specific information.The Buyer
              agrees not to copy, share, reproduce, reverse engineer, or create
              derivatives of the Services provided by the Sellers.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">5.No Cancellation.</span>
            <span className="paragraph">
              The Buyer acknowledges that there is a no cancellation policy. The
              Buyer is committing to full payment for the 4-monthServices.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">6.Delivery; Title; and Risk of Loss.</span>
            <span className="paragraph">
              TheSellers shall deliver the Services online. Any goods purchased
              through the Sellerswill be providedvia drop shipping and title to
              and risk of loss of the goods will pass to the Buyer upon such
              delivery by the Sellers. Any stated delivery dates are
              approximate. The Sellers will not be liable for any losses,
              damages, penalties, or expenses for failure to meet any delivery
              date.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span">7.Disclaimer of Warranty;</span>
            <span className="spansemibold ">
              Due Diligence. The Goods and Services are being sold “as is,” and
              the Sellers disclaim all warranties of quality, whether express or
              implied, including the warranties of merchantability and fitness
              for particular purpose
            </span>
            <span className="paragraph">
              . The Buyer acknowledges that it has not been induced by any
              statements or representations of any person with respect to the
              quality or condition of the Services and that no such statements
              or representations have been made. The Sellers make no
              representations or warranties as to specific outcomes or results.
              The Buyer acknowledges that it has relied solely on the
              investigations, examinations, and inspections as the Buyer has
              chosen to make and that the Sellers have afforded the Buyer the
              opportunity for full and complete investigations, examinations,
              and inspections. date.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span">8. Limitation of Liability.</span>
            <span className="spansemibold ">
              The Sellers will not be liable for any indirect, special,
              consequential, or punitive damagesarising out of or relating to
              this agreement or the transactions it contemplates (whether for
              breach of contract, tort, negligence, or other form of action) and
              irrespective of whether the Sellers have been advised of the
              possibility of any such damage. In no event will the Sellers’s
              liability exceed the price the Buyer paid to the Sellers for the
              specific Goods and Services provided by the Sellers giving rise to
              the claim or cause of action.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">9. Limitation of Actions.</span>
            <span className="paragraph">
              . No action arising out of or relating to this agreement or the
              transactions it contemplates may be commenced against the Sellers
              more than 30 days after the basis for such claim could reasonably
              have been discovered.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">10. Security Interest.</span>
            <span className="paragraph">
              The Buyer hereby grants to the Sellers a security interest in the
              Goods and Services sold to the Buyer under this agreement and any
              proceeds therefrom (including accounts receivable), until payment
              in full for the Goods and Services has been received by the
              Sellers. The Buyer shall sign and deliver to the Sellers any
              document to perfect this security interest that the Sellers
              reasonably request.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">
              11. Governing Law and Designation Forum.
            </span>
            <span className="paragraph ">
              (a) The laws of the State of Tennessee (without giving effect to
              its conflicts of law principles) govern all matters arising out of
              or relating to this agreement and the transactions it
              contemplates, including, without limitation, its interpretation,
              construction, validity, performance (including the details of
              performance), and enforcement. In the event that any provision of
              this Agreement is deemed unenforceable, the remaining portions of
              the Agreement shall be severed and remain in full force
              <div className="mt-4">
                (b) Any dispute, controversy or claim arising out of or relating
                to this contract including any question regarding its existence,
                interpretation, validity, breach or termination or the business
                relationship created by it shall be referred to and finally
                resolved by arbitration under the American Arbitration
                Association Arbitration Rules.
              </div>
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">12. Unforeseen Circumstances.</span>
            <span className="paragraph ">
              The Sellers will not be liable for delays in performance or for
              non-performance due to unforeseen circumstances or causes beyond
              the Sellers’s reasonable control
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">13. Assignment; Delegation. </span>
            <span className="paragraph ">
              The Buyer may not assign any of its rights under this agreement or
              delegate any performance under this agreement, except with the
              prior written consent of the Sellers. Any purported assignment of
              rights or delegation of performance in violation of this section
              is void.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">14. Recovery of Expenses </span>
            <span className="paragraph ">
              . In any adversarial proceedings between the parties arising out
              of this agreement or the transactions it contemplates, the sole
              remedy the Buyer will be entitled to recover from the Sellers is a
              refund of payment for the Services.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">15. Entire Agreement. </span>
            <span className="paragraph ">
              This agreement constitutes the entire agreement between the
              parties with respect to the subject matter of this agreement and
              supersedes all other agreements, whether written or oral, between
              the parties.
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">16. Amendments. </span>
            <span className="paragraph ">
              No amendment to this agreement will be effective unless it is in
              writing and signed by both parties,
            </span>
          </div>
          <div className="paragraph1">
            <span className="span ">
              17. Counterparts; Electronic Signatures.{" "}
            </span>
            <span className="paragraph ">
              This agreement may be signed by one or more counterparts, which
              together will form a single agreement. This agreement may be
              signed electronically.
              <div className="mt-14">
                Each party is signing this agreement on the date stated under
                that party’s signature.
              </div>
              <div className="mt-20 flex flex-col w-[40%] m-auto gap-y-4">
                <span className="underline flex items-end ">
                  Buyer Signature: <Signature />
                </span>
                <div>
                  Buyer Name:
                  <span className="underline ml-4">{buyerName}</span>
                </div>
                <div>
                  Buying Date:
                  <span className="underline ml-4"> {date}</span>
                </div>
              </div>
              <div className="mt-20 flex flex-col w-[40%] m-auto gap-y-4">
                <span className="underline flex item">
                  Seller Signature: <Signature />
                </span>
                <div>
                  <span className="underline">
                    Seller Name: ______________________
                  </span>
                </div>
                <div>
                  <span className="underline">
                    Selling Date: ______________________
                  </span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
