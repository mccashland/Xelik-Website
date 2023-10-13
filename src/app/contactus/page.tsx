import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import MainContent from "@/components/MainContent/page";

export default function ContactUs() {
  const content = {
    text1: "Check our ",
    text2: "  support ticket feature",
    description:
      "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    mainImage: "/assets/imgs/main-contactus.svg",
    button: {
      text: "Contact Us",
      link: "https://api.leadconnectorhq.com/widget/survey/lMNWOuJq3hLZugzjmcv1",
    },
  };
  return (
    <div>
      <LogoHeader />
      <Banner text={"Contact Us"} />
      <MainContent content={content} />
      <Footer/>
    </div>
  );
}
