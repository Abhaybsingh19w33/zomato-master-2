import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const Master = () => {
    const { type } = useParams();

    return <Fragment>{type}</Fragment>;
};

export default Master;