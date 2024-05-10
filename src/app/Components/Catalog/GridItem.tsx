"use client";

import { selectQuantity } from "@/app/redux/lib/slices/cartSlice/selectors";
import { add, remove } from "@/app/redux/lib/slices/cartSlice/slice";
import { RootState } from "@/app/redux/store";
import { AddToCart } from "@/app/utils/addToCart";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const GridItem: FC<Product> = (product) => {
  const quantity = useSelector(selectQuantity(product.id));

  const dispatch = useDispatch();
  const onClickAdd = () => {
    dispatch(add(AddToCart(product)));
  };
  return (
    <div className=" select-none flex flex-col gap-[14px] w-full mb-[20px]">
      <div className="bg-[#f1f1f1] rounded-[25px] flex justify-center items-center lg:min-h-[350px]">
        <Image
          src={product.image}
          alt={product.name}
          className="p-[16px] md:p-[22px]"
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col gap-3 lg:gap-4">
        <div className="flex  justify-between items-center">
          <h2 className=" font-black  text-[12px] md:text-base lg:text-[22px]">
            {product.name}
          </h2>
          <p className=" whitespace-nowrap font-coiny text-[14px]  md:text-[24px]">
            {product.price} руб
          </p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] md:text-base font-light max-w-[90px] md:max-w-none text-[#454545]">
              2000х785х960мм
            </p>
            <p className="text-[11px] md:text-base font-light max-w-[90px] md:max-w-none text-[#454545]">
              Лиственница, металл
            </p>
          </div>
          {quantity?.count == null ? (
            <button
              onClick={() => onClickAdd()}
              className="bg-black md:text-base text-[11px] text-white rounded-[9px] md:p-[13px] p-[8px]"
            >
              В корзину
            </button>
          ) : (
            <button
              onClick={() => dispatch(remove(product.id))}
              className="px-2"
            >
              <img
                loading="lazy"
                src="/icons/delete-from-cart.svg"
                alt=""
                className="md:h-[40px] w-[30px] h-[30px] md:w-[40px]"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridItem;
