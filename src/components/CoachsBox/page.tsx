interface Props {
  coachBox: {
    image: any;
    name: string;
    experience: string;
  };
}
export default function coachsBox({ coachBox }: Props) {
  const { image, name, experience } = coachBox;
  return (
    
      <div className="flex flex-col sm:w-[23%] md:w-[23%] justify-center items-center gap-4 border border-[#FFFFFF1A] rounded-[10px] bg-[#FFFFFF0F] md:p-7 p-3">
      <img className="w-full h-full" src={image} alt="" />
      <div className="font-semibold text-xl text-[#fff] text-center">{name}</div>
      <div className="font-normal text-center text-base text-[#fff] opacity-60">{experience}</div>
    </div>
    
    
  );
}
