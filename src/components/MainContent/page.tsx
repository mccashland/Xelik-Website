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
      <div className="flex items-center gap-10 w-[85%]">
        <div>
          <div className="w-[70%]">
            <div className="flex items-center gap-3">
              <img src="/assets/imgs/Arrow Small.svg" alt="" />
              <div className="text-[#fff] text-[40px]">{text1}</div>
            </div>
            <div className="text-[#fff] text-[40px]">{text2}</div>
            <div className="text-[rgba(255,255,255,1)] opacity-70 text-[24px]">
              {description}
            </div>
          </div>
        </div>
        <div className="relative w-[50vw] h-full">
          <img src={mainImage} alt="main image" />
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
