"use client";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectCart } from "../redux/lib/slices/cartSlice/selectors";
import CartItem from "../Components/CartItem";
import Link from "next/link";
import Form from "../Components/Form";

const CartPage = () => {
  const { products, totalPrice } = useSelector(selectCart);
  const [cartItems, setCartItems] = useState<CartProduct[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(products);

  return (
    <div className="container mt-[40px] justify-center mb-[50px] md:mt-[60px] flex-col flex lg:flex-row gap-[15px]">
      {products?.length > 0 ? (
        <React.Fragment>
          <div className="  border-[#F1F1F1] rounded-[15px]   mb-[15px]  md:rounded-[30px] border-2 flex md:flex-[3]  gap">
            <div className="max-h-[690px] h-full w-full overflow-y-scroll mr-[5px] my-[10px] p-[10px] md:mr-[10px] flex  flex-col gap-[20px]   ">
              <h1 className=" text-[24px] font-coiny mt-[20px]  md:mt-0">
                Корзина
              </h1>

              <div className="flex flex-col gap-[20px] md:gap-[30px]">
                {products.map((product) => (
                  <CartItem key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
          <div className=" flex-[1] flex max-h-[380px] flex-col py-[35px] px-[16px] bg-[#F1F1F1] rounded-[30px] ">
            <h3 className=" text-[24px] text-bold mb-[40px]">Оформление</h3>
            <p className="font-black">Уточняйте цены у менеджеров</p>
            <p className="text-[14px] max-w-[270px] my-[13px]">
              Актуальная цена может быть как ниже, так и выше. Чтобы узнать
              актуальную цену позвоните менеджеру.
            </p>
            <span className="w-full max-w-[325px] mx-auto min-h-[1px] mb-[36px] mt-[18px] bg-black"></span>
            <p className=" text-[24px] mb-[36px]">
              Итого:
              <span className=" ml-[10px]  text-[18px] font-coiny">
                {totalPrice} руб
              </span>
            </p>
            <form action=""></form>
            <div className="flex w-full justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="py-[15px] px-[40px] inline-block text-white bg-black rounded-[20px]  "
              >
                Оофрмить заказ
              </button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="flex justify-center items-center flex-col gap-3 min-h-[500px]">
          <h2 className=" md:text-[56px] text-[34px] font-coiny">
            Корзина пустая
          </h2>
          <Link
            href="/"
            className="bg-black  text-[16px] text-white rounded-[9px] p-[13px] "
          >
            Перейти к каталогу
          </Link>
        </div>
      )}
      {isOpen && (
        <div className=" z-[1000] fixed bg-black bg-opacity-90 top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="relative">
            <button onClick={() => setIsOpen(false)}>
              <img
                className="absolute top-[25px] right-[10px] md:w-[18px]"
                src="icons/Xmark.svg"
                alt=""
              />
            </button>
            <Form cart={products} totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
