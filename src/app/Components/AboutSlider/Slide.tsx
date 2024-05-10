import Image from "next/image";
import React, { FC } from "react";

interface SwiperItem {
  title: string;
  text: string;
  image: string;
}
const Slide: FC<SwiperItem> = (props) => {
  return (
    <div className=" relative flex w-[300px] md:w-[420px] shadow-3xl rounded-md flex-col justify-between items-center h-[385px] md:h-[500px] bg-white p-[24px]">
      <Image
        src={props.image}
        alt={props.title}
        className="max-h-[234px] w-auto md:max-h-[358px]"
        width={346}
        height={358}
      />

      <div className="flex flex-col w-full items-start">
        <span className="  text-[11px] py-[2px] px-[9px] border border-black rounded-[5px] ">
          Utopia
        </span>
        <h4 className=" my-[5px] text-[30px] font-coiny">{props.title}</h4>
        <p>{props.text}</p>
      </div>
      <img
        className=" absolute top-[22px] right-[17px]"
        src="/icons/logo-icon.svg"
        alt=""
      />
    </div>
  );
};

export default Slide;
