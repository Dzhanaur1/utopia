import React from "react";
import Sort from "./Sort";
import Grid from "./Grid";

const index = () => {
  return (
    <div id="catalog" className='"mt-[15px] md:mt-[30px] lg:mt-[50px]'>
      <Sort />
      <Grid />
    </div>
  );
};

export default index;
