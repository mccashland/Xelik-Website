import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col py-10 bg-[#0C0E0D] justify-center items-center gap-10">
      <div className=" text-[#FFFFFF] text-[40px]">Our Socials</div>
      <div className="icons">
        <div className="flex gap-[20px]">
          <Link href="https://www.facebook.com/ElevateYourMindBodyLife" target="_blank">
            <Image
              width={60}
              height={60}
              src="/assets/imgs/f-facebook.svg"
              alt="facebook"
            />
          </Link>
          <Link href=" https://twitter.com/Xelik_Fitness" target="_blank">
            <Image
              width={60}
              height={60}
              src="/assets/imgs/f-twitter.svg"
              alt="twitter"
            />
          </Link>
          <Link href="https://www.instagram.com/theelevatewellness/" target="_blank">
            <Image
              width={60}
              height={60}
              src="/assets/imgs/f-instagram.svg"
              alt="instagram"
            />
          </Link>
          <Link href="https://www.tiktok.com/@xelik_fitness" target="_blank">
            <Image
              width={60}
              height={60}
              src="/assets/imgs/f-tiktok.svg"
              alt="tiktok"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              width={60}
              height={60}
              src="/assets/imgs/f-google.svg"
              alt="google"
            />
          </Link>
        </div>
      </div>
      <div className=" text-[#FFFFFF] text-[20px]">+1 402-302-0745</div>
    </div>
  );
}
