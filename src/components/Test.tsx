// import React from "react";


// import SubmitButton from "@/components/Submit_Button";
// import Link from "next/link";
// import Image from "next/image";
// const Coach_monthly = ({ userName }: { userName: string }) => {
//   return (
//     <>
//       <div className="flex w-full justify-center   ">
//         <div className="flex flex-col gap-10  my-4">
//           <div className="main-heading text-[1.5rem] sm:text-[3rem] 2xl:text-[5rem]  p-[3px] flex justify-center items-center text-center text-[#ffffff] font-bold">
//             Coach Agreement (Monthly)
//           </div>
//           <div className="flex flex-col gap-10  w-[90%] sm:w-[80%] m-auto">
//             <div className="paragraph text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
//               This Sales Agreement (“Agreement”) for the sale of products and
//               services is between Elevate Wellness and Personal Training LLC
//               (the “Seller”), and <span className="underline">{userName}</span>{" "}
//               (the “Coach”).
//             </div>
//             <div className="span text-[#ffff] text-[1rem] opacity-100 font-bold">
//               The parties agree as follows:
//             </div>
//             <div className="paragraph1">
//               <span className="span  text-[#ffff] text-[1rem] opacity-100 font-bold">
//                 1. Sale of Products and Services.{" "}
//               </span>
//               <span className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7]">
//                 In exchange for the Seller providing the Coach access to its
//                 products and services as set forth in Exhibit A (the “Product”)
//                 the Coach agrees to the payment terms as stated in clause 3. The
//                 Coach recognizes that it is his, her or their sole
//                 responsibility to pay all taxes and third-party expenses imposed
//                 on, or in connection with, any transactions associated with this
//                 agreement.
//               </span>
//             </div>
//             <div>
//               <div className="paragraph  text-[#ffffff] text-base ml-[5px]">
//                 Exhibit A:
//               </div>
//               <br />
//               <div className="paragraph  text-[#ffffff] text-base ml-[5px] opacity-[0.7] ">
//                 The Coach will receive access to the Seller’s online educational
//                 coaching platform that will provide training on the Seller’s
//                 proprietary systems, processes and templates. The Coach will
//                 also receive access to strength and conditioning management
//                 software, nutrition planning software, customer relationship
//                 management, use of our payment processing services, and client
//                 contract templates. An invitation to join the Seller’s coaching
//                 community, which includes access to communication channels, and
//                 an invitation to coaching community events the Seller holds, is
//                 also included.
//               </div>
//             </div>
          
//             <div className="paragraph  text-[#ffffff] text-base ml-[5px]">
//               Exhibit C:
//             </div>
//             <div className="paragraph flex flex-col items-center justify-start text-[#ffffff] text-base ml-[5px]">
//               <div className="text-[#fff] font-normal underline">
//                 Service Fee
//               </div>
//               <div className="flex gap-11">
//                 <div>Default</div>
//                 <div>30.0%</div>
//               </div>
//               <div className="flex gap-4">
//                 <div>Discounted</div>
//                 <div>20.0%</div>
//               </div>
//             </div>
//             <div className=" text-[#ffff] text-[1rem] opacity-[0.7]">
//               If (c) is met during a given biweekly payment period, then the
//               discounted Service Fee is to be applied instead of the default
//               Service Fee.
//               <div className="px-10">
//                 (c){" "}
//                 <span>
//                   The Coach is using the Seller’s Product to service the
//                   equivalent of twenty (20) fully paying clients. A fully paying
//                   client pays at least $349.00 monthly. The Coach will be
//                   receiving a minimum of $6,980.00 in client payment monthly.
//                 </span>
//               </div>
//             </div>
           
//             <div className="main dev flex flex-col space-y-8 text-[#ffff] text-[1rem] opacity-[0.7] font-bold">
            
//               <div>
//                 <span className="underline flex items-end ">
                  
//                 </span>
//                 <div className="py-3">
//                   <span className="underline">
//                     Date: {new Date().toDateString()}
//                   </span>
//                 </div>
//                 <div className="py-4">
//                   <SubmitButton
//                     url="https://buy.stripe.com/dR6bMx0zD6Lm9LG14A"
//                     userName={userName}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Coach_monthly;
