import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <div className=" cursor-pointer transition duration-200 hover:scale-105 inline-block font-coiny text-white bg-black px-[2rem] py-[1rem] rounded-[10px] ">
      {text}
    </div>
  );
};

export default Button;
