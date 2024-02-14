import LogoHeader from "@/components/LogoHeader/page";
import { Phrase } from "@/components/Phrase";
import { FORMS_NAMES } from "@/utils/TYPES";

export default function ClientPhrase({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q } = searchParams;
  return (
    <div className="mb-10 mx-3">
      <LogoHeader />
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-[20vh]"
          src="/assets/imgs/Arrow Down.svg"
          alt="arrow line"
        />
        <div className="maincnt py-10 flex justify-center items-center flex-col gap-10 ">
          <div className="font-bold text-[40px]  text-[#FFFFFF] w-[95%] text-center">
            Enter Your Cilents Passphrase
          </div>
          <Phrase q={q as FORMS_NAMES} userType="CLIENT" />
        </div>
        <img
          className="rotate-180 h-[20vh]"
          src="/assets/imgs/Arrow Down.svg"
          alt="arrow line"
        />
      </div>
    </div>
  );
}
