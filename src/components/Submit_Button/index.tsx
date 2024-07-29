import { SignContext } from "@/context";
import React, { useContext, forwardRef, Ref } from "react";
import { useRouter } from 'next/navigation'
interface SubmitButtonProps {
  url: string;
  userName: string;
  loading: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}


const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ loading, userName, onClick, url }, ref) => {
    const { signature } = useContext(SignContext);
    const router = useRouter()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); 

      if (userName === signature) {
        if (onClick) onClick(event);
      } else {
        alert("Signature must match with your name!");
      }
    };

    if (loading) {
      return null;
    }

    return (
      <div>
        {/* <div className="pb-3 underline">
          <span>Signature: </span>
          {userName}
        </div> */}

        <button
          ref={ref} // Attach ref here
          type="button"
          onClick={handleClick}
          className="bg-primary border-none text-white px-8 py-2 rounded-md transition-all"
        >
          submit
        </button>
      </div>
    );
  }
);

export default SubmitButton;
