import React, { useEffect, useState } from "react";

//import './defaultlayout.scss';
import Footer from "../../footer/Footer";
import Header from "../../common/Header";
import Header2 from "../../common/Header2";

const DefaultLayout = props => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scollHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                setHeader(true)
            } else {
                setHeader(false)
            }
        }

        window.addEventListener('scroll', scollHeader);

        return () => {
            window.removeEventListener('scroll', scollHeader)
        }
    },[])

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Header/>
            {
                header && <Header2/>
            }
            <div>
                <div>{props.children}</div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default DefaultLayout;