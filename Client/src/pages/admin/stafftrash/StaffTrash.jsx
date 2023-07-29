import React, { useEffect, useState } from "react";

import './staff-trash.scss';
import UserCardHorizontal from "../../../components/usercardhorizontal/UserCardHorizontal";
import { getAllUserSoftDelete, hardDeleteUserById, restoreUserById } from "../../../api/userApi";

const StaffTrash = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getDataUser = async() => {
            const roles = 2;
            const response = await getAllUserSoftDelete(roles);
            setUsers(response.usersData);
        }

        getDataUser();
    },[]);

    const handleUserChoose = (e) => {
        const {name, checked} = e.target;
        if(name === 'check-all') {
            let tempUser = users.map((user) =>
                {
                    return {...user, isChecked: checked}
                }
            );

            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.username === name ? {...user, isChecked: checked} : user
            );
            setUsers(tempUser);
        }
        
    };

    const handleRestoreUser = () => {
        let arrs;
        arrs = (users.filter(user => user.isChecked === true));
        arrs.map(async(arr) => (await restoreUserById(arr.id)));
        window.location.reload(false);
    }

    const handleHardDeleteUser = () => {
        let arrs;
        arrs = (users.filter(user => user.isChecked === true));
        arrs.map(async(arr) => (await hardDeleteUserById(arr.id)));
        window.location.reload(false);
    }

    return (
        <div className="staff-trash">
            Thùng rác

            <div className="staff-trash__wrapper">
                <div className="staff-trash__wrapper__header">
                    <div className="staff-trash__wrapper__header__checkbox">
                        <input 
                            type="checkbox" 
                            id="checkbox-all"
                            name="check-all"
                            checked={users.filter((user) => user?.isChecked !== true).length < 1}
                            onChange={handleUserChoose}
                        />
                        <span> Chọn tất cả</span>
                    </div>

                    <button className="staff-trash__wrapper__header__btn-delete-forever" onClick={handleHardDeleteUser}>
                        <i class="ri-delete-bin-5-line"></i>
                        Xóa vĩnh viễn
                    </button>

                    <button className="staff-trash__wrapper__header__btn-undo" onClick={handleRestoreUser}>
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
                            <input 
                                className="staff-trash__wrapper__footer__inner__checkbox" 
                                name={item.username} 
                                type="checkbox" 
                                value={item.id}
                                checked={item?.isChecked ? true : false}
                                onChange={handleUserChoose}/>

                            <UserCardHorizontal item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StaffTrash;