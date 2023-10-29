interface Props {
  pakage: {
    months: string;
  };
}
export default function PakageBox({ pakage }: Props) {
  const { months } = pakage;
  return (
    
      <div className="cursor-pointer  py-3 w-[100px] md:w-[162px] rounded-[120px] font-normal md:text-xl text-sm text-[#fff] opacity-60 border border-[#FFFFFF1A] bg-[#FFFFFF0F] hover:bg-[#CE0019] hover:opacity-100">
        {months}
      </div>
   
  );
}
