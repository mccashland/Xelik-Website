import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import Image from "next/image";
import Link from "next/link";

export default function Clients() {
  return (
    <div className="flex flex-col gap-10">
      <LogoHeader />
      <Banner text={"Partners"} />
      <center className="text-3xl mb-10 text-[#fff]">
        <div className="w-[50%]">
          We believe in helping others succeed and take pride in our partners.
        </div>
        <div className="w-[40%] mx-auto border">
          <Link
            target="_blank"
            href="https://www.elitenutritionomaha.com/xelik/"
          >
            <div className="w-full bg-[#999]">
              <Image
                src={"/assets/imgs/partner-1.png"}
                width={100}
                height={100}
                alt="logo"
              />
            </div>
            <div className="p-4 mt-10">
              <p className="text-[18px]">
                At Elite Nutrition, we carry true tried, and tested professional
                grade products that are proven to produce results and get you
                the edge you need to achieve your fitness goals. Brands that are
                trusted and verified ensuring you're getting exactly what you
                expect!
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-[4rem]">
          <Link
            href={"https://formstack.io/77E61"}
            className="bg-[#CE0019] text-[#fff] rounded-lg p-4 my-30"
          >
            Partner with us
          </Link>
        </div>
      </center>
      <Footer />
    </div>
  );
}
