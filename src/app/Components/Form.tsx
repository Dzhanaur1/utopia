"use client";
import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { sendCartFormToBitrix, sendFormToBitrix } from "../utils/leedBirtix";
import PhoneInputMask from "react-input-mask";
type FormProps = {
  cart?: CartProduct[];
  totalPrice?: number;
};
const Form: FC<FormProps> = ({ cart, totalPrice }) => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (cart && totalPrice) {
      sendCartFormToBitrix(cart, totalPrice, formData);
      return;
    }
    sendFormToBitrix(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col min-w-[300px] md:min-w-[700px] py-[30px] px-[60px] rounded-2xl md:py-[50px] md:px-[100px] bg-white text-black gap-[30px] items-center  md:gap-[45px]"
      action=""
    >
      <input
        type="text"
        className=" w-full outline-none border-b border-black"
        name="name"
        placeholder="Имя*"
        onChange={handleChange}
        required={true}
      />
      <PhoneInputMask
        mask="+7 (999) 999-99-99"
        maskChar="_"
        onChange={handleChange}
        required={true}
        placeholder="Телефон*"
        type="tel"
        className="w-full text-[16px] font-bold  outline-none  border-b border-black"
        name="tel"
      ></PhoneInputMask>

      <input
        type="email"
        className="w-full  outline-none border-b border-black"
        name="email"
        placeholder="Почта"
        onChange={handleChange}
      />

      <div>
        <input
          type="submit"
          className=" cursor-pointer transition duration-200 hover:scale-105 inline-block font-coiny text-white bg-black px-[2rem] py-[1rem] rounded-[10px]"
          value="Отправить"
        />
      </div>
    </form>
  );
};

export default Form;
