import Image from "next/image";
import Hero from "./Components/Hero";
import Catalog from "./Components/Catalog";
import React from "react";
import AboutSlider from "./Components/AboutSlider";
export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Catalog />
      <AboutSlider />
    </React.Fragment>
  );
}
