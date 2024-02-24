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
  buttons?: { label: string; link: string }[];
}
export default function MainContent({ content, buttons }: Props) {
  const { mainImage, text1, text2, description, button } = content;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="xl:flex lg:flex-row flex flex-col items-center xl:gap-10 gap-12 w-[85%]">
        <div className="xl:flex xl:w-[70%] w-full">
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
              <div className="text-[#fff] text-[30px] md:text-[40px] ">
                {text1}
              </div>
            </div>
            <div className="text-[#fff] text-[30px] md:text-[40px]">
              {text2}
            </div>
            <div className="text-[rgba(255,255,255,1)] opacity-70 text-[20px] md:text-[24px]">
              {description}
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full" src={mainImage} alt="main image" />
        </div>
      </div>
      <div className="flex gap-x-4">
        {buttons?.map((btn: any) => {
          return (
            <Link
              key={btn.label}
              href={btn.link}
              className="bg-[#CE0019] text-[#fff] rounded-lg p-4 my-20"
            >
              {btn.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
