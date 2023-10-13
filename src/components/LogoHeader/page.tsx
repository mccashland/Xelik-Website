import Image from "next/image";
import Link from "next/link";

export default function LogoHeader() {
  return (
    <div className="flex justify-between items-center gap-4 mx-2 mt-5">
      <Link className="relative w-[10%] h-[65px]" href={"/"}>
        <Image
          src="/assets/imgs/Logo Red.svg"
          alt="Logo Red"
          layout="fill"
        />
      </Link>
      <div className="w-[70%] h-[20px] relative">
        <Image
          src="/assets/imgs/Header Line.svg"
          alt="Logo Red"
          layout="fill"
        />
      </div>
      <div className="text-[#CE0019] w-[10%]">Menu</div>
    </div>
  );
}
