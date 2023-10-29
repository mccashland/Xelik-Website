import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import LogoHeader from "@/components/LogoHeader/page";
import MainContent from "@/components/MainContent/page";
import { route } from "@/utils/Routes";

export default function Clients() {
  const content = {
    text1: "Your Partner",
    text2: "  in Fitness Success",
    description:
      "We help anyone who is looking to increase their health or performance. A customized plan and specialized coach are matched to each client's unique goals to optimize their likelihood of success.",
    mainImage: "/assets/imgs/main-clients.svg",
    button: {
      text: "Apply to get coaching",
      link: route.clients.passphrase,
    },
  };
  return (
    <div className="flex flex-col gap-10">
      <LogoHeader />
      <Banner text={"Clients"} />
      <MainContent content={content} />
      <Footer />
    </div>
  );
}
