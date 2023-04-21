import React from "react";

type ButtonStyledProps = {
  onClick: () => void;
  text: string;
  isLoading?: boolean;
};
//button with loading state
const ButtonStyled = ({
  onClick,
  text,
  isLoading = false,
}: ButtonStyledProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-darkBlue w-full h-10 rounded-xl text-ivory font-bold"
    >
      <div>{isLoading ? <span>loading...</span> : <span>{text}</span>}</div>
    </button>
  );
};

export default ButtonStyled;
