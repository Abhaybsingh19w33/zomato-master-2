import React, { Fragment } from "react";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
      {/* ---- this is home layout ----  */}
    </Fragment>
  );
};

export default HomeLayout;