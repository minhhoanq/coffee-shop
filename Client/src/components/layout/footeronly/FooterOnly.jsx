import React from "react";
import Footer from "../../footer/Footer";

const FooterOnly = props => {

    return (
        <div>
            <div className="container">
                <div className="content" style={{margin: '0', padding: '0'}}>{props.children}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default FooterOnly;