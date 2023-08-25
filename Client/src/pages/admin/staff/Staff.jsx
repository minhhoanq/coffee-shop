import React, { useEffect, useState } from "react";

import './staff.scss';
import PersonCard from "../../../components/personcard/PersonCard";
import { getAllStaff } from "../../../api/userApi";
import StaffCreate from "./StaffCreate";
import { useSelector } from "react-redux";

const Staff = () => {
    const [staff, setStaff] = useState([]);
    const isFetching = useSelector((state) => state.user.softDelete.isFetching);
    const error = useSelector((state) => state.user.error);
    const user = useSelector(state => state.auth.currentUser);
    const accessToken = user?.token;

    useEffect(() => {
        const getData = async() => {
            const result = await getAllStaff(accessToken);
            setStaff(result.usersData);
            console.log(result);
        };

        getData();
    },[isFetching]);

    const handleAddStaff = (e) => {
        e.preventDefault();
        const modal = document.querySelector('#modal');
        modal.classList.toggle('active');
    }

    return (
        <div className="staff">
            {isFetching ? 
                <div className="staff__loading">
                    <i class="ri-loader-4-line staff__loading__icon"></i>
                    Vui lòng đợi ...
                </div> : 
            <>
                <div className="staff__title">
                    Quản lý nhân viên
                </div>

                <a href="/admin/staff/trash" className="staff__trash">
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
            </>}
        </div>
    )
};
export default Staff;