import React from "react";

import './page-header.scss';
import bg from '../../assets/images/bg-shop01.jpg';

const PageHeader = props => {

    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            {props.title}
        </div>
    )
}

export default PageHeader;