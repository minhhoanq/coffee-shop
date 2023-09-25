import React from "react";

//import './defaultlayout.scss';
import Footer from "../../footer/Footer";
import Header from "../../common/Header";

const DefaultLayout = props => {

    return (
        <div>
            <Header />
            <div>
                <div style={{marginTop: "123px"}}>{props.children}</div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default DefaultLayout;