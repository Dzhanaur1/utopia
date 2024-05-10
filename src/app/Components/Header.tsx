"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const count = useSelector(
    (state: RootState) => state.cartSlice.products.length
  );
  console.log(count);

  return (
    <header className="w-full flex-[0_0_auto] fixed bg-white z-50">
      <div className=" md:max-h-[64px] h-full py-3 container flex items-center">
        <Link href="/" className="md:flex-1  flex items-start">
          <img
            src="icons/Logo_black.svg"
            className="md:max-h-[52px] max-h-[40px]  w-auto  "
            alt=""
          />
        </Link>

        <nav className=" w-full flex-1">
          <ul className=" w-full hidden lg:flex md:gap-[20px] lg:gap-[30px] font-bold text-lg">
            <li className=" cursor-pointer transition duration-200 hover:scale-110">
              <Link href="#catalog">Каталог</Link>
            </li>
            <li className=" cursor-pointer transition duration-200 hover:scale-110">
              <Link href="#about">О нас</Link>
            </li>
            <li className=" cursor-pointer transition duration-200 hover:scale-110">
              Портфолио
            </li>
            <li className=" cursor-pointer transition duration-200 hover:scale-110">
              <Link href="#contact">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex w-full justify-end items-center  md:gap-[30px] lg:gap-[40px]  ">
          <Link href="/cart" className="relative">
            {count > 0 && (
              <span className=" bg-red-600 rounded-full w-[8px] h-[8px] absolute top-0 right-0"></span>
            )}

            <img src="icons/cart.svg" alt="" />
          </Link>
          <Link
            href="tel:89183923328"
            className=" lg:block hidden font-coiny text-white bg-black rounded-xl leading-none px-[9px] py-[12px]"
          >
            8 905 410 10 10
          </Link>
          <button className="block ml-3 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
