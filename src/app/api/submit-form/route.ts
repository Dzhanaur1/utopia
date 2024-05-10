import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type ReqType = {
  body: {
    name: string;
    tel: string;
    email: string;
  };
};
export async function POST(req: ReqType) {
  try {
    // Извлекаем данные из запроса
   
    // Отправляем данные в CRM Битрикс24
    // const url =
    //   "https://b24-32j3sx.bitrix24.ru/rest/1/i2u320sj9j54eazq/crm.lead.add.json";
    // const urlParams = {
    //   fields: {
    //     TITLE: "Новый Лид",
    //     NAME: "Осман",
    //   },
    // };

    // const response = await axios.post(url, urlParams);
    //     // https://b24-32j3sx.bitrix24.ru/rest/1/5deo1w4i46ggb4ox/crm.lead.add.json?fields[TITLE]=Новый%20Лид&[NAame]=Осман
    //   "https://b24-32j3sx.bitrix24.ru/rest/1/5deo1w4i46ggb4ox/crm.lead.add.json",
    //   {
    //     fields: {
    //       TITLE: "Новый лид",
    //       NAME: name,
    //       PHONE: [{ VALUE: tel, VALUE_TYPE: "WORK" }],
    //       EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
    //     },
    //   }
    // );

    // Отправляем ответ об успешной отправке формы
    return NextResponse.json(
      { success: true, message: "Форма успешно отправлена" },
      { status: 500 }
    );
  } catch (error) {
    // Обрабатываем ошибку и отправляем ответ с кодом ошибки
    console.error("Ошибка:", error);
    return NextResponse.json(
      { success: false, message: "Произошла ошибка при отправке формы" },
      { status: 500 }
    );
  }
}
