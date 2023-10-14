interface Props {
  content: {
    Image: string;
    founder: string;
    name: string;
  };
}
export default function FounderCard({ content }: Props) {
  const { Image, founder, name } = content;
  return (

      <div className="relative rounded-lg justify-center xl:min-h-[600px]  xl:w-[30%]">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={Image}
          alt=""
        />
        <div className="founder absolute z-10 w-full h-full top-0 rounded-lg"></div>
        <div className=" absolute bottom-10 z-20 left-7 ">
          <div className="flex gap-3  items-center">
            <div className="h-1 w-10  rounded bg-[#FFFFFF] "></div>
            <div className="text-base text-[#FFFFFF] font-normal">
              {founder}
            </div>
          </div>

          <div className="name  font-semibold text-[28px] text-[#FFFFFF] ">
            {name}
          </div>
        </div>
      </div>
    
  );
}
