import React from "react";

const MenuItem = ({ data, onClick }) => {
    // const classes = cx('menu-item', {
    //     not_border_bottom: data.not_border_bottom,
    //     bulkhead: data.bulkhead,
    // });
    return (
        <button onClick={onClick}>
            <span >{data.title}</span>
        </button>
    );
}

export default MenuItem;
