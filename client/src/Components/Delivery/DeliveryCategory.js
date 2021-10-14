import React, { Fragment } from "react";

const DeliverySmCard = ({ image, title }) => {
    return (
        <Fragment>
            <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56 sm:w-48">
                <div className="w-full h-24">
                    <img
                        src={image}
                        alt="food"
                        className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div>
                    <h3 className="text-sm my-1 text-center font-light">{title}</h3>
                </div>
            </div>
        </Fragment>
    );
};

const DeliveryLgCard = ({ image, title }) => {
    return (
        <Fragment>
            <div className="hidden lg:block w-64 h-48">
                <div className="w-full h-full">
                    <img
                        src={image}
                        alt="food"
                        className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                </div>
                <div>
                    <h3 className="text-xl my-1 font-medium">{title}</h3>
                </div>
            </div>
        </Fragment>
    );
};

const DeliveryCatagory = (props) => {
    return (
        <Fragment>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </Fragment>
    );
};

export default DeliveryCatagory;