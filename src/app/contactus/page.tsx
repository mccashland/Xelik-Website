import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import MainContent from "@/components/MainContent/page";

export default function ContactUs() {
  const content = {
    text1: "Check our ",
    text2: "support ticket feature",
    description:
      "Our mission is to help you. Let's start a conversation as to what we can do for you.",
    mainImage: "/assets/imgs/main-contactus.svg",
    button: {
      text: "Open a support ticket",
      link: "https://api.leadconnectorhq.com/widget/survey/lMNWOuJq3hLZugzjmcv1",
    },
  };
  const buttons = [
    {
      label: "Help for Coaches",
      link: "https://formstack.io/17285",
    },
    {
      label: "Help for Clients",
      link: "https://formstack.io/D9D30",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <LogoHeader />
      <Banner text={"Contact Us"} />
      <MainContent content={content} buttons={buttons} />
      <Footer />
    </div>
  );
}
