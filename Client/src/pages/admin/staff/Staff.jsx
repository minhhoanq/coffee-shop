import React, { useEffect, useState } from "react";

import './staff.scss';
import PersonCard from "../../../components/personcard/PersonCard";
import { getAllStaff } from "../../../redux/slice/apiRequest";
import StaffCreate from "./StaffCreate";

const Staff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const result = await getAllStaff();
            setStaff(result.data.staffData);
        };

        getData();
    },[]);

    const handleAddStaff = (e) => {
        e.preventDefault();
        const modal = document.querySelector('#modal');
        modal.classList.toggle('active');
    }

    return (
        <div className="staff">
            <div className="staff__title">
                Quản lý nhân viên
            </div>

            <a href="/staff" className="staff__trash">
                <i class="ri-archive-line"></i>
                Thùng rác
            </a>

            <div className="staff__modal">
                <button className="staff__modal__btn-create" onClick={handleAddStaff}>
                    <i class="ri-user-add-line"></i>
                    <span>Thêm nhân viên</span>
                </button>
                <StaffCreate item={staff[0]}/>
            </div>

            <div className="staff__list-st">
                {staff.map((item, i) => (
                    <PersonCard item={item} key={i}/>
                ))}
            </div>
        </div>
    )
};
export default Staff;