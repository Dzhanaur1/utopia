import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container xl:min-h-[490px] my-[40px] xl:my-[100px] flex items-center relative ">
      <div className="flex  leading-none lg:gap-[30px] justify-center items-center   flex-col xl:max-w-[624px] text-center">
        <h1 className="text-[36px] md:text-[48px] font-bold">
          Малые архитектурные формы <span className=" font-coiny">Utopia</span>
        </h1>
        <p className="py-[30px] lg:py-0 text-center font-bold md:max-w-[527px] leading-tight text-[14px] max-w-[280px] md:text-[20px]">
          Скамейки, урны, столы, перголы для обустройства <br></br> улиц, парков
          и скверов от производителя.{" "}
        </p>
        <div className="order-3 mt-[30px] lg:mt-0">
          <Button text="Написать нам" />
        </div>
        <div className=" -z-10 order-2 xl:absolute right-0 top-0">
          <Image src="/hero_desktop.webp" alt="" width={665} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
