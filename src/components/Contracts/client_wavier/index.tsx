import React from "react";
import Signature from "../Signature";
import ContractInput from "../ContractInput";
import SubmitButton from "@/components/Submit_Button";
const Client_wavier = ({ userName }: { userName: string }) => {
  return (
    <div className="flex w-full justify-center   ">
      <div className="flex flex-col gap-10  my-4">
        <div className="pt-20 text-[1rem] sm:text-[1.5rem] 2xl:text-[5rem] text-[#ffffff] font-bold m-auto ">
          <div className="py-3">Client Waiver</div>
          Release from Liability for Services
        </div>
        <div className="main dev flex flex-col space-y-8 text-[#ffff] text-[1rem] opacity-[0.7] font-bold w-[90%] sm:w-[80%] m-auto">
          <div>
            <span className="underline">{userName}</span> (the “Buyer”). does
            hereby waive and release, indemnify, and forever discharges Elevate
            Wellness and Personal Training LLC (“Seller”), and its agents,
            employees, officers, directors, affiliates, successors, members,
            independent contractors, and assigns, of and from any and all
            claims, demands, debts, contracts, expenses, causes of action,
            lawsuits, damages and liabilities, of every kind and nature, whether
            known or unknown, in law or equity, that I ever had or may have,
            arising from or in any way related to the services (“Services”)
            being provided to me by the Seller provided that this waiver of
            liability does not apply to any acts of gross negligence, or
            intentional, willful or wanton misconduct.
          </div>
          <div>
            The buyer understands that all nutrition recommendations are merely
            recommendations and are not to be taken as medical advice. The
            recommendations are not prescriptions by any doctor or dietician.
            The buyer agrees to waive any liability due to nutrition or food
            related recommendations for any coaches, partners, or anyone related
            to Elevate Wellness and Personal Training LLC in the event of
            illness or otherwise.
          </div>
          <div>
            By this Waiver, Iassume any risk, and take full responsibility and
            waive any claims of personal injury, death or damage to personal
            property associated with such Services, including but not limited to
            temporary or permanent damage, unsatisfactory results from said
            Service being provided to me, and personal property damage.
          </div>
          <div>
            The provision of this Waiver and Release will continue in full force
            and effect even after termination of the Services being provided to
            me, whether by agreement, by operation of law, or otherwise.
          </div>
          <div>
            I have read, understand and fully agree to the terms of this Waiver
            and Release. I understand and confirm that by signing this Waiver
            and Release, I have given up considerable future legal rights. I
            have signed this Agreement freely, voluntarily, under no duress or
            threat of duress, without inducement, promise or guarantee being
            communicated to me. My signature is proof of my intention to execute
            a complete and unconditional Waiver and Release of all liability to
            the full extent of the law.
          </div>
          <div>
            I acknowledge that I am aware that Elevate Wellness and Personal
            Training LLC, its members, officers, agents, employees and
            independent contractors are not medical doctors and do not diagnose
            disease. I also acknowledge that I have been warned that I should
            consult a Physician before undergoing any dietary or food supplement
            changes. I also affirmatively state that I have disclosed any and
            all known medical or genetic conditions, medications I use, and any
            significant personal or family medical history. Any recommendations
            that I follow for changes in diet, including but not limited to the
            use of food supplements and medications are entirely my choice and
            my responsibility. I am knowingly assuming any risk associated with
            nutritional counseling.
          </div>
          <div>
            In consideration of my participation in nutrition counseling, I
            hereby accept all risk to my health and of my injury or death that
            may result from such participation and I hereby release Elevate
            Wellness and Personal Training LLC, its members, officers, agents,
            employees and independent contractors from any liability whatsoever
            to me, my personal representatives, estate, heirs, next of kin, and
            assigns for any and all claims and causes of action for loss of or
            damage to my property and for any and all illness, injury or other
            harm to my person, including my death, that may result from or occur
            during my participation in nutrition and fitness counseling, whether
            caused by the sole or concurrent negligence of Elevate Wellness and
            Personal Training, LLC, its members, officers, agents, employees and
            independent contractors.
          </div>
          <div>
            I further agree to indemnify and hold harmless the Elevate Wellness
            and Personal Training, LLC, its members, officers, agents, employees
            and independent contractors, to the fullest extent permitted under
            law, from any and all liability for the injury or death of any
            person(s) and damage to property that may result from my negligent
            or intentional act or omission while participating in the described
            nutrition and fitness counseling session.
          </div>
          <div className=" text-[#ffff] font-bold text-base ml-[5px] opacity-[0.7]">
            I HAVE CAREFULLY READ THIS AGREEMENT AND UNDERSTAND IT TO BE A
            RELEASE OF ALL CLAIMS AND CAUSES OF ACTION FOR MY INJURY OR DEATH OR
            DAMAGE TO MY PROPERTY THAT OCCURS WHILE PARTICIPATING IN NUTRITION
            AND FITNESS COUNSELING AND OR DEATH OF ANY PERSON AND DAMAGE TO
            PROPERTY.
          </div>
          <div>
            <span className="underline flex items-end ">
              Buyer Initials: <ContractInput value="A" name="signature" />
            </span>
            <div className="py-4">
              <SubmitButton url="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client_wavier;
