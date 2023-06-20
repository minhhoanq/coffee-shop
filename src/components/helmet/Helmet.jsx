import React from "react";

import './helmet.scss';

import dataHelmet from '../../assets/data/serviceData';

const Helmet = () => {

    return (
        <div className="helmet">
            {
                dataHelmet.map((item, i) => (
                    <HelmetItem key={i} item={item}/>
                ))
            }
        </div>
    );
}

export const HelmetItem = props => {

    const item = props.item;
    return (
        <div className="helmet-item" style={{backgroundColor: `${item.bg}`}}>
            <div className="helmet-item__wrapper">
                <div className="helmet-item__wrapper__icon">
                    <i className={`${item.icon}`}></i>
                </div>

                <div className="helmet-item__wrapper__content">
                    <span className="helmet-item__wrapper__content__title">
                        {item.title}
                    </span>

                    <p className="helmet-item__wrapper__content__sub-title">
                        {item.subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Helmet;