import React from "react";

import './staff.scss';
import PersonCard from "../../../components/personcard/PersonCard";

const Staff = () => {

    return (
        <div className="staff">
            <div className="staff__title">
                Quản lý nhân viên
            </div>
            <div className="staff__list-st">
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
            </div>
        </div>
    )
}

export default Staff;