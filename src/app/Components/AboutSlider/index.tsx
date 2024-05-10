"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import SwiperCore from "swiper";
import { EffectCreative, Navigation } from "swiper/modules";

const swiperItems: SwiperItem[] = [
  { text: "Более 15 лет на рынке", title: "ОПЫТ", image: "/about/Опыт.jpg" },
  {
    text: "Вся продукция соответствует ГОСТам",
    title: "ГОСТы",
    image: "/about/ГОСТы.jpg",
  },
  {
    text: "Используем только качественные материалы",
    title: "КАЧЕСТВО",
    image: "/about/Качество.jpg",
  },

  {
    text: "Установим оборудование быстро и качественно",
    title: "МОНТАЖ",
    image: "/about/Монтаж.svg",
  },
  {
    text: "Нам доверяют администрации, бюджетные организации и строительные компании",
    title: "НАДЕЖНОСТЬ",
    image: "/about/Надежность.svg",
  },
  {
    text: "Наша продукция производится на заводе в г. Краснодар",
    title: "ПРОИЗВОДИТЕЛЬ",
    image: "/about/Производитель.svg",
  },
];
SwiperCore.use([Navigation, EffectCreative]);
const swiperOptions: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 0,

  breakpoints: {
    1040: {
      spaceBetween: 60,
      slidesOffsetBefore: 0,
      creativeEffect: {
        limitProgress: 3,
        // perspective: true,

        prev: {
          translate: ["-110%", "10%", 0],

          origin: "bottom",
        },
        next: {
          translate: ["110%", "10%", 0],

          origin: "bottom",
        },
      },
    },
  },
  loop: true,
  effect: "creative",
  centeredSlides: true,
  slidesOffsetBefore: -90,
  navigation: {
    nextEl: ".my-carousel__control--next",
    prevEl: ".my-carousel__control--prev",
  },
  creativeEffect: {
    limitProgress: 3,
    // perspective: true,

    prev: {
      translate: ["-150%", "10%", -100],

      origin: "bottom",
    },
    next: {
      translate: ["150%", "10%", -100],

      origin: "bottom",
    },
  },
  slideActiveClass: "about-active-slide",
};

interface SwiperItem {
  title: string;
  text: string;
  image: string;
}

const AboutSlider = () => {
  return (
    <div id="about" className="md:container my-[40px]">
      <div className=" pl-[25px] md:pl-[100px] flex flex-col gap-3 mb-[30px] mt-[35px] md:mt-[80px]">
        <div>
          <div className=" inline-block px-[12px] py-[5px] bg-black rounded-lg">
            <img
              src="/icons/nameplate.svg"
              className="h-[12px] md:h-[21px] w-auto"
              alt=""
            />
          </div>
        </div>

        <h2 className=" text-[30px] md:text-[54px]">
          Выбери <span className=" font-coiny">“УТОПИЮ”</span>
        </h2>
      </div>

      <Swiper
        className="min-h-[430px] md:min-h-[560px] !pt-[5px]"
        {...swiperOptions}
      >
        {swiperItems.map((obj: SwiperItem, i: number) => (
          <SwiperSlide key={i}>
            <Slide {...obj} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination " />
        <div className=" absolute top-1/2 left-0 z-30 my-carousel__control--next hidden md:block">
          <img src="/icons/arrow.svg" alt="" />
        </div>
        <div className=" absolute top-1/2 right-0 z-30 my-carousel__control--next  hidden md:block rotate-180">
          <img src="/icons/arrow.svg" alt="" />
        </div>
      </Swiper>
    </div>
  );
};

export default AboutSlider;
