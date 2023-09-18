import React from "react";

import './page-header.scss';

const PageHeader = props => {

    return (
        <div className="page-header" style={{backgroundImage: `url(https://file.hstatic.net/200000351187/file/blog_-_6_cong_thuc_bacxiu_6bdee6c825024cbab10fa0bdab903e8e_1024x1024.png)`}}>
            {props.title}
        </div>
    )
}

export default PageHeader;