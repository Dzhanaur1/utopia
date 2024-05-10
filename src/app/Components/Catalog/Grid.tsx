"use client";
import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import { getProudcts } from "../../utils/getProducts";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const product: Product = {
  id: "1",
  name: "Скамья F1506",
  price: 8000,
  article: "F1506",
  size: "2000х785х960мм",
  material: "Лиственница, металл",
  sale: false,
  popular: false,
  category_id: 1,
  image: "/product/image.webp",
};

const Grid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const activeCategoryIndex: { id: string; name: string } = useSelector(
    (state: RootState) => state.filterSlice
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      console.log(activeCategoryIndex.id);
      try {
        const response = await getProudcts(activeCategoryIndex.id);
        console.log(response);

        setProducts(response);
        console.log("fetch");
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [activeCategoryIndex.id]);

  // const products: Product[] = await getProudcts();
  // console.log(products);
  if (isLoading) {
    return (
      <div className="containder h-[500px] md:h-[750px] flex justify-center items-center">
        <p className=" md:text-[22px]">Загрузка...</p>
      </div>
    );
  }

  return (
    <div
      id="catalog"
      className=" container min-h-[250px] mt-[20px] lg:mt-10 grid grid-cols-2  md:grid-cols-3 gap-[10px] md:gap-[15px]"
    >
      {products.map((product) => (
        <GridItem key={product.id} {...product} />
      ))}
      {/* <GridItem {...product} />
      <GridItem {...product} />
      <GridItem {...product} />
      <GridItem {...product} />
      <GridItem {...product} />
      <GridItem {...product} /> */}
    </div>
  );
};

export default Grid;
