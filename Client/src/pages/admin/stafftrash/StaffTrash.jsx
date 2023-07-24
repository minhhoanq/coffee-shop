import React, { useEffect, useState } from "react";

import './staff-trash.scss';
import UserCardHorizontal from "../../../components/usercardhorizontal/UserCardHorizontal";
import { getAllUserSoftDelete } from "../../../redux/slice/apiRequest";

const StaffTrash = () => {
    const [users, setUsers] = useState([]);
    const [chooses, setChooses] = useState([]);

    useEffect(() => {
        const getDataUser = async() => {
            const roles = 2;
            const response = await getAllUserSoftDelete(roles);
            setUsers(response.data.usersData);
        }

        getDataUser();
    },[]);

    const handleUserChoose = (e) => {
        console.log(e.target.value);
        setChooses((prev) => [...prev, prev]);
    }
    console.log(chooses);

    return (
        <div className="staff-trash">
            Thùng rác

            <div className="staff-trash__wrapper">
                <div className="staff-trash__wrapper__header">
                    <div className="staff-trash__wrapper__header__checkbox">
                        <input type="checkbox" />
                        <span> Chọn tất cả</span>
                    </div>

                    <button className="staff-trash__wrapper__header__btn-delete-forever">
                        <i class="ri-delete-bin-5-line"></i>
                        Xóa vĩnh viễn
                    </button>

                    <button className="staff-trash__wrapper__header__btn-undo">
                        <i class="ri-loop-left-line"></i>
                        Khôi phục
                    </button>

                    <div className="staff-trash__wrapper__header__search">
                        <input className="staff-trash__wrapper__header__search__input" type="text" placeholder="Nhân viên cần tìm ?"/>
                        <i class="ri-search-line"></i>
                    </div>
                </div>

                <div className="staff-trash__wrapper__footer">
                    {users?.map((item, i) => (
                        <div className="staff-trash__wrapper__footer__inner" key={i}>
                            <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" value={item.id} onChange={handleUserChoose}/>

                            <UserCardHorizontal item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StaffTrash;