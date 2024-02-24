interface Props {
  content: {
    Image: string;
    heading: string;
    description: string;
  };
}
export default function ValueCard({ content }: Props) {
  const { Image, heading, description } = content;
  return (
    <div className="bg-[#0B0C1780] p-10 flex flex-col  gap-6 xl:w-[30%] w-full rounded-lg">
      <div className="icon">
        <img src={Image} alt="" />
      </div>
      <div className="cnt flex flex-col gap-4">
        <div className="heading text-[#FFFFFF] font-bold text-[32px]">{heading}</div>
        <div className="descrpition text-base font-normal text-[#FFFFFF] ">{description}</div>
      </div>
    </div>
  );
}
