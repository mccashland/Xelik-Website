import Image from "next/image";

interface Props {
  text: any;
}
export default function Banner({ text }: Props) {
  return (
    <div className="flex w-full 2xl:h-[350px] rounded-lg xl:h-[300px] lg:h-[223px] h-[120px]  justify-center items-center">
      <div className="rounded-lg w-[90%] relative h-[90%]">
        <img
          className="object-cover rounded-lg w-full h-full"
          src="/assets/imgs/Banner.svg"
          alt="banner"
        />
        <div className="font-bold translate-x-[-50%]  translate-y-[-50%] left-[50%] top-[50%] absolute text-[7.5vw] text-[#fff]">
          {text}
        </div>
      </div>
    </div>
  );
}
