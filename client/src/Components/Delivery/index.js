import React, { Fragment } from "react";

// components
import DeliveryCarousal from "./DeliveryCarousel";
import Brand from "./Brand";

const Delivery = () => {
    return (
        <Fragment>
            <DeliveryCarousal />
            <Brand />
        </Fragment>
    );
};

export default Delivery;
