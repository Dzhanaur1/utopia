"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/lib/slices/filterSlice/slice";

type Categories = {
  id: string;
  name: string;
};

const categories: Categories[] = [
  { id: "bench", name: "Лавочки" },
  { id: "urn", name: "Урны" },
  { id: "table", name: "Столы" },
  { id: "gazebo", name: "Беседки" },
  { id: "pergole", name: "Беседки" },
  { id: "floweport", name: "Вазоны" },
];
const Sort = () => {
  const dispatch = useDispatch();
  const handleItemClick = (category: Categories) => {
    dispatch(setCategoryId(category));

    setActiveCategory(category);
  };

  const [activeCategory, setActiveCategory] = useState<Categories>({
    id: "bench",
    name: "Лавочки",
  });
  return (
    <div className=" container overflow-x-scroll">
      <ul className="flex gap-[18px] pb-3 select-none">
        {categories.map((category) => (
          <li
            onClick={() => handleItemClick(category)}
            key={category.id}
            className={` flex justify-center items-center cursor-pointer rounded-[20px] md:min-w-[205px] font-coiny px-[18px] py-[6px] md:text-[18px] border border-black  transitio duration-200 md:px-[55px] md:py-[15px] ${
              activeCategory.id === category.id
                ? "bg-black text-white hover:bg-black "
                : "bg-white text-black hover:bg-[#d8d8d8] hover:border-[#d8d8d8] "
            } `}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
