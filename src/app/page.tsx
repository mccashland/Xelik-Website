import LogoHeader from "@/components/LogoHeader/page";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 6b02110 (working)
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
<<<<<<< HEAD
      link: "/partners",
=======
      link: "#",
>>>>>>> 6b02110 (working)
    },
  ];
  return (
    <div>
      <LogoHeader />
<<<<<<< HEAD
      <center className="h-full mt-[3vh]">
        <img className="h-[20vh]" src="/assets/imgs/Arrow Down.svg" alt="arrow line" />
        <div className="text-white flex my-10 flex-col gap-y-4">
          {items.map((item, key) => {
            return (
              <div key={key}>
=======
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
>>>>>>> 6b02110 (working)
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
<<<<<<< HEAD
        <img
          className="rotate-180 h-[20vh]"
          src="/assets/imgs/Arrow Down.svg"
=======
        <Image
          className="rotate-180"
          src="/assets/imgs/Arrow Down.svg"
          // layout="fill"
          width={10}
          height={500}
>>>>>>> 6b02110 (working)
          alt="arrow line"
        />
      </center>
    </div>
  );
}
