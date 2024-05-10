import React from "react";
import Form from "./Form";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex-[0_0_auto] py-[30px] bg-black text-white">
      <div className="container">
        <div
          id="contact"
          className="flex flex-col items-center gap-[100px] lg:gap-[167px] justify-center"
        >
          <div className=" flex flex-col gap-[18px]">
            <h3 className=" text-center lg:text-[32px]">Свяжитесь с нами</h3>
            <Form />
          </div>
          <div className="flex w-full items-center text-[13px] md:text-[18px]">
            <ul className="hidden  flex-1 md:flex items-start flex-col gap-2 md:gap-[12px]">
              <li>
                <Link href="">Каталог</Link>
              </li>
              <li>
                <Link href="">Портфолио</Link>
              </li>
              <li>
                <Link href="">Контакты</Link>
              </li>
              <li>
                <Link href="">О нас</Link>
              </li>
            </ul>
            <div className="flex-1 flex justify-center">
              <img src="/icons/footer_icon.svg" alt="" />
            </div>
            <div className=" hidden flex-1 items-end md:flex flex-col gap-3">
              <p>Контакты для связи</p>
              <div className="flex gap-1">
                <p>WhatsApp: </p>
                <Link href=""> 8 905 410 10 10</Link>
              </div>
              <div className="flex gap-1">
                <p>Почта:</p>
                <Link href="">info@utopia.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
