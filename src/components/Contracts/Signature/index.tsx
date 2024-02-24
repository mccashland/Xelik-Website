"use client";

const Signature = () => {
  //   const [sign, setSign] = useState();
  //   const signRef = useRef(null);
  //   useEffect(() => {
  //     console.log(sign);
  //   }, [signRef]);
  //   const handleClear = () => {
  //     sign.clear();
  //   };
  return (
    <div className="flex flex-row ml-4 gap-x-3 shadow-lg">
      <div className=" w-[65%] border border-[#ffff]">
        {/* <SignatureCanvas
          penColor="green"
          penWidth={0.3} // Set the desired pen width
          canvasProps={{ width: 200, height: 40, className: "sigCanvas" }}
          ref={signRef}
        /> */}
        <input
          type="text"
          name="signature"
          id="sign"
          className="bg-[transparent] border-none "
        />
      </div>
      {/* <div className="flex items-end cursor-pointer text-[white] text-[14px] hover:text-[red] transition-all">
        Clear
      </div> */}
    </div>
  );
};

export default Signature;
