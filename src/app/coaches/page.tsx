import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import MainContent from "@/components/MainContent/page";
import { route } from "@/utils/Routes";

export default function Coaches() {
  const content = {
    text1: "Revolutionizing",
    text2: " Fitness Education",
    description:
      "We form long-term partnerships with passionate coaches.  We enable coaches through mentorship, technology, and community to help their clients reach health and performance goals.",
    mainImage: "/assets/imgs/main-coaches.svg",
    button: {
      text: "Apply to be an Xelik Coach",
      link: route.coaches.passphrase,
    },
  };
  return (
    <div className="flex flex-col gap-10">
      <LogoHeader />
      <Banner text={"Coaches"} />
      <MainContent content={content} />
      <Footer />
    </div>
  );
}
