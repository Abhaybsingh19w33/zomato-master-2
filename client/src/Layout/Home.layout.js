import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

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