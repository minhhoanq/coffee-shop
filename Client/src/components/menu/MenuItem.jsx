import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ data, onClick }) => {
    console.log(data);
    return (
        <Link to={`${data?.path}`} className="menu__popper__item" onClick={onClick}>
            <i className={data.icon}></i>
            <span className="menu__popper__item__title">{data.title}</span>
        </Link>
    );
}

export default MenuItem;
