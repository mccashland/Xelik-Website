import Image from "next/image";
interface Props {
  text: any;
}
export default function Banner({ text }: Props) {
  return (
    <center className="">
      <div className="relative w-[90vw] h-[40vh]">
        <Image src="/assets/imgs/Banner.svg" alt="banner" layout="fill" />
        <div className="flex font-bold text-[7.5vw] text-[#fff] justify-center items-center h-full">
          {text}
        </div>
      </div>
    </center>
  );
}
