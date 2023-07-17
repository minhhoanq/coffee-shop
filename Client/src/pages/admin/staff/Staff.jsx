import React, { useEffect, useState } from "react";

import './staff.scss';
import PersonCard from "../../../components/personcard/PersonCard";
import { getAllStaff } from "../../../redux/slice/apiRequest";

const Staff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const result = await getAllStaff();
            setStaff(result.data.staffData);
        };

        getData();
    },[]);

    return (
        <div className="staff">
            <div className="staff__title">
                Quản lý nhân viên
            </div>
            <div className="staff__list-st">
                {staff.map((item, i) => (
                    <PersonCard item={item} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default Staff;