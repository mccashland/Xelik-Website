import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import OurStory from "@/components/About/OurStory";
import OurFounder from "@/components/About/OurFounders/OurFounder";
import Health from "@/components/About/Health";
import OurValues from "@/components/About/OurValues/OurValues";

export default function About() {
  const content = {
    text1: "Our Story",
    description1:
      "Xelik is a marketplace that provides technology and consulting services to enable coaches to give the highest quality product to their clients.",
    description2:
      " We go above and beyond to help increase our community's health and performance.",
    mainImage: "/assets/imgs/main-about.svg",
  };
  return (
    <div className="flex flex-col gap-20">
      <LogoHeader />
      <Banner text={"We Are XE"} />
      <OurFounder />
      <OurValues />
      <Health />
      <OurStory content={content} />
      <Footer />
    </div>
  );
}
