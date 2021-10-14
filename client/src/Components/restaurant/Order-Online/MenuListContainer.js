import React, { Fragment, useState } from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
    return (
        <Fragment>
            <div className="w-full flex flex-col gap-3">
                <MenuCategory
                    name={props.name}
                    items={props.items}
                    onClickHandler={props.onClickHandler}
                    isActive={props.selected === props.name}
                />
            </div>
        </Fragment>
    );
};

export default MenuListContainer;
