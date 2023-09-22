import React from "react";

//import './defaultlayout.scss';
import Footer from "../../footer/Footer";
import Header from "../../common/Header";

const DefaultLayout = props => {

    return (
        <div>
            <Header />
            {/* <div>
                <div>{props.children}</div>
                <Footer />
            </div> */}
        </div>
    )
}

export default DefaultLayout;