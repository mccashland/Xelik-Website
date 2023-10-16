import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";

export default function Clients() {
  return (
    <div className="flex flex-col gap-10">
      <LogoHeader />
      <Banner text={"Partners"} />
      <center className="text-3xl mb-10 text-[#fff]">
        <div className="w-[50%]">
          WE believe in helping others succeed and take pride in our partners.
          All official partnerships will be listed here
        </div>
      </center>
      <Footer />
    </div>
  );
}
