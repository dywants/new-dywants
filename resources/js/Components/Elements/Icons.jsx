import React from "react";
import FaBars  from "../../icons/fa-bars.svg";
import FaTimes from "../../icons/fa-times.svg";

const iconTypes = {
    faBars: FaBars,
    faTimes: FaTimes,
};

const IconComponent = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />;
};

export default IconComponent;
