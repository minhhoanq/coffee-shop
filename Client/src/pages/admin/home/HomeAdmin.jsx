import React from "react";

import './home-admin.scss';
import InfoCard from "../../../components/infocard/InfoCard";

const MORES_CARD = [
    {
        icon: '',
        text1: '',
        text2: '',
    },
    {
        icon: '',
        text1: '',
        text2: '',
    },
    {
        icon: '',
        text1: '',
        text2: '',
    },
    {
        icon: '',
        text1: '',
        text2: '',
    },
    {
        icon: '',
        text1: '',
        text2: '',
    },
    {
        icon: '',
        text1: '',
        text2: '',
    },
]

const HomeAdmin = () => {

    return (
        <div className="home-admin">
            <img style={{zIndex : "1"}} src="https://nimentrix.files.wordpress.com/2023/07/cropped-nimentrix_banner_elegant_flamenco_dancer_dancing_beach_comics_style_ai_art_midjourney.jpg" alt="" />
            <div className="home-admin__list-card">
                {MORES_CARD.map((item, i) => (
                    <InfoCard key={i}/>
                ))}
            </div>
        </div>
    )
}

export default HomeAdmin;