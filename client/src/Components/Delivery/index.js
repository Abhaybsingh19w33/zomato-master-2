import React, { Fragment } from "react";

// components
import DeliveryCarousal from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
    return (
        <Fragment>
            <DeliveryCarousal />
            {/* <Brand /> */}
            <RestaurantCard />
        </Fragment>
    );
};

export default Delivery;
