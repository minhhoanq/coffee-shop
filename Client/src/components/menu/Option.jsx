import React from "react";

const Options = props => {
    return (
        <header className="menu__popper__options">
            <button className="menu__popper__options__btn" onClick={props.onBack}>
                <i class="ri-arrow-left-s-line"></i>
            </button>
            <span className="menu__popper__options__title">{props.title}</span>
        </header>
    )
}

export default Options;