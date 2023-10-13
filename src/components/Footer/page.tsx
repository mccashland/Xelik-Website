
  
  export default function Footer() {
  return (
    <div className="flex flex-col py-10 bg-[#0C0E0D] justify-center items-center gap-10">
      <div className=" text-[#FFFFFF] text-[40px]">Our Socials</div>
      <div className="icons">
        <div className="flex gap-[20px]">
        
            <img src="/assets/imgs/f-facebook.svg" alt="" />
            <img src="/assets/imgs/f-twitter.svg" alt="" />
            <img src="/assets/imgs/f-instagram.svg" alt="" />
            <img src="/assets/imgs/f-tiktok.svg" alt="" />
            <img src="/assets/imgs/f-google.svg" alt="" />
        </div>
      </div>
      <div className="nmbr text-[#FFFFFF] text-[20px]"> + 178 34279277</div>
    </div>
  );
}
