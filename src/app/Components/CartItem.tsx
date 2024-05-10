import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { add, reduce, remove } from "../redux/lib/slices/cartSlice/slice";

const CartItem: FC<CartProduct> = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex relative justify-between border-2 p-[13px] border-[#F1F1F1] rounded-[15px] items-center h-full max-h-[135px] md:max-h-[170px]">
      <div className="bg-[#f1f1f1] rounded-[15px] md:rounded-[30px] max-w-[102px] md:max-w-[155px] :">
        <img src={props.image} className=" p-[8px]" alt="" />
      </div>

      <div className="md:flex-row pl-[12px] flex flex-col w-full justify-between md:items-center">
        <h4 className="font-coiny md:text-[22px]">{props.name}</h4>
        <p className="text-[11px] md:text-[14px] text-[#454545] ">
          {props.size}
        </p>
        <p className="text-[11px] md:text-[14px] text-[#454545]">
          {props.material}
        </p>
        <div className="w-full  mt-[15px] md:mt-0 font-black flex md:order-1 order-2 justify-end md:justify-center  items-center gap-[14px]">
          <button className="" onClick={() => dispatch(reduce(props.id))}>
            <img src="/icons/minus.svg" alt="" />
          </button>
          <p className="md:py-[10px] py-[4px] px-[20px] md:px-[29px] border-2 border-[#CED4D7] rounded-[10px] ">
            {props.count}
          </p>
          <button className="" onClick={() => dispatch(add(props))}>
            <img src="/icons/plus.svg" alt="" />
          </button>
        </div>
        <p className=" mt-[8px] md:mt-0 whitespace-nowrap  order-1 md:order-2 text-[18px] md:text-[21px] font-coiny">
          {props.price} руб
        </p>
        <button
          onClick={() => dispatch(remove(props.id))}
          className=" order-3 ml-[15px]  md:static absolute top-[15px] right-[15px]"
        >
          <img
            src="/icons/XMark.svg"
            className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
