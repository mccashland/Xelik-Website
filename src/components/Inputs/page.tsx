interface Props {
  input: {
    label: string;
    placeholder: string;
  };
}
export default function Inputs({ input }: Props) {
  return (
    <div className="flex flex-col ">
      <label
        className="text-start my-3 text-[#fff] font-normal text-[20px]"
        htmlFor=""
      >
        {input.label}
      </label>
      <input
        className="font-[400] text-[20px] outline-none  text-[#FFFFFF] opacity-60 border border-[#FFFFFF1A] hover:border-[#CE0019] active:border-[#CE0019] bg-[#FFFFFF0F] rounded-[10px]  py-2 px-6 mb-5 transition duration-300"
        type="text"
        placeholder={input.placeholder}
      />
    </div>
  );
}
