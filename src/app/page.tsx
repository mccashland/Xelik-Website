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
      <center className="h-full">
        <Image
          src="/assets/imgs/Arrow Down.svg"
          // layout="fill"
          width={10}
          height={600}
          alt="arrow line"
        />
        <div className="text-white py-4 flex flex-col gap-y-4">
          {items.map((item, key) => {
            return (
              <div>
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
        <Image
          className="rotate-180"
          src="/assets/imgs/Arrow Down.svg"
          // layout="fill"
          width={10}
          height={500}
          alt="arrow line"
        />
      </center>
    </div>
  );
}
