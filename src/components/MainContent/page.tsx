import Image from "next/image";
import Link from "next/link";

interface Props {
  content: {
    mainImage: any;
    text1: any;
    text2: any;
    description: any;
    button: any;
  };
}
export default function MainContent({ content }: Props) {
  const { mainImage, text1, text2, description, button } = content;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="xl:flex xl:flex-row flex flex-col items-center xl:gap-10 gap-12 w-[85%]">
        <div className="xl:flex ">
          <div className="xl:w-[70%] lg:w-[80%] relative ">
          <Image
          className="cnt-img absolute right-7 bottom-20"
            src="/assets/imgs/maincnt-backimg.svg"
            alt="img"
            width={200}
            height={200}
          />
            <div className="flex  items-center gap-3">
              <img src="/assets/imgs/Arrow Small.svg" alt="" />
              <div className="text-[#fff] text-[40px]">{text1}</div>
            </div>
            <div className="text-[#fff] text-[40px]">{text2}</div>
            <div className="text-[rgba(255,255,255,1)] opacity-70 text-[24px]">
              {description}
            </div>
          </div>
        </div>
        <div className="relative xl:w-[50vw] lg:w-[60vw]  h-full">
          <img className="w-full h-full" src={mainImage} alt="main image" />
        </div>
      </div>
      <Link
        href={button.link}
        className="bg-[#CE0019] text-[#fff] rounded-lg p-4 my-20"
      >
        {button.text}
      </Link>
    </div>
  );
}
