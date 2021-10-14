import React, { Fragment } from "react";

// Components
import Navbar from "../Components/Navbar";


const HomeLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
      {/* ---- this is home layout ----  */}
    </Fragment>
  );
};

export default HomeLayout;