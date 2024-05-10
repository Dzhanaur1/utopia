import axios from "axios";

type FormData = {
  name: string;
  tel: string;
  email: string;
};

export const sendFormToBitrix = async (formData: FormData) => {
  try {
    await axios.post(
      "https://b24-32j3sx.bitrix24.ru/rest/1/i2u320sj9j54eazq/crm.lead.add.json",
      {
        fields: {
          TITLE: "Новый лид",
          NAME: formData.name,
          PHONE: [{ VALUE: formData.tel, VALUE_TYPE: "WORK" }],
          EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
          COMMENTS: "Utopia.com",
        },
      }
    );
    alert("Успешно отправилось");
  } catch (error) {
    alert("Произошла ошибка:");
  }
};

export const sendCartFormToBitrix = async (
  cartProducts: CartProduct[],
  totalPrice: number,
  formData: FormData
) => {
  try {
    const leadResponse = await axios.post(
      "https://b24-32j3sx.bitrix24.ru/rest/1/i2u320sj9j54eazq/crm.lead.add.json",
      {
        fields: {
          TITLE: "Тест1",
          NAME: formData.name,
          PHONE: [{ VALUE: formData.tel, VALUE_TYPE: "WORK" }],
          EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
          SOURCE_DESCRIPTION: "Utopia.com",
        },
      }
    );
    const leadId = leadResponse.data.result;

    const productsResponse = await axios.post(
      `https://b24-32j3sx.bitrix24.ru/rest/1/53fwfzi3dl4cv4ww/crm.lead.productrows.set.json`,
      {
        id: leadId,
        rows: cartProducts.map((product) => ({
          PRODUCT_ID: product.id,
          PRICE: product.price,
          QUANTITY: product.count,
          CURRENCY_ID: "RUB",
          NAME: product.name,
          IMAGE_URL: product.image,
        })),
      }
    );
    if (productsResponse.data.result) {
      alert("Новый лид успешно создан со списком товаров");
    } else {
      alert("Ошибка при добавлении товаров к лиду:");
    }

    // window.location.reload();
  } catch (error) {
    alert("Произошла ошибка:");
  }
};
