import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col py-10 bg-[#0C0E0D] justify-center items-center gap-10">
      <div className=" text-[#FFFFFF] text-[40px]">Our Socials</div>
      <div className="icons">
        <div className="flex gap-[20px]">
          <Link href="https://www.facebook.com/ElevateYourMindBodyLife">
            <img src="/assets/imgs/f-facebook.svg" alt="facebook" />
          </Link>
          <Link href=" https://twitter.com/Xelik_Fitness">
            <img src="/assets/imgs/f-twitter.svg" alt="twitter" />
          </Link>
          <Link href="https://www.instagram.com/theelevatewellness/">
            <img src="/assets/imgs/f-instagram.svg" alt="instagram" />
          </Link>
          <Link href="https://www.tiktok.com/@xelik_fitness">
            <img src="/assets/imgs/f-tiktok.svg" alt="tiktok" />
          </Link>
          <Link href="#">
            <img src="/assets/imgs/f-google.svg" alt="google" />
          </Link>
        </div>
      </div>
      <div className=" text-[#FFFFFF] text-[20px]"> + 178 34279277</div>
    </div>
  );
}
