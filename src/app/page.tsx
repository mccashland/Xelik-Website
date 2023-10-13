import LogoHeader from "@/components/LogoHeader/page";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Coaches",
      link: "/coaches",
    },
    {
      text: "Clients",
      link: "/clients",
    },
    {
      text: "Contact Us",
      link: "/contactus",
    },
    {
      text: "Partners",
      link: "#",
    },
  ];
  return (
    <div>
      <LogoHeader />
      <center className="h-full mt-[3vh]">
        <img className="h-[20vh]" src="/assets/imgs/Arrow Down.svg" alt="arrow line" />
        <div className="text-white flex my-10 flex-col gap-y-4">
          {items.map((item, key) => {
            return (
              <div key={key}>
                <Link
                  className="text-[#fff] text-[26px] hover:text-[#CE0019]"
                  key={key}
                  href={`${item.link}`}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}
        </div>
        <img
          className="rotate-180 h-[20vh]"
          src="/assets/imgs/Arrow Down.svg"
          alt="arrow line"
        />
      </center>
    </div>
  );
}
