import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import Link from "next/link";

export default function Clients() {
  return (
    <div className="flex flex-col gap-10">
      <LogoHeader />
      <Banner text={"Partners"} />
      <center className="text-3xl mb-10 text-[#fff]">
        <div className="w-[50%]">
          We believe in helping others succeed and take pride in our partners.
          All official partnerships will be listed here
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
