import React from "react";

import './person-card.scss';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUserById } from '../../redux/slice/apiRequest';

const PersonCard = props => {

    const item = props.item;
    const navigate = useNavigate();

    const handleDeleteUser = async(e) => {
        e.preventDefault();

        console.log(item.id);
        
        const res = await deleteUserById(item.id);
        navigate('/admin');

    }
    return (
        <div className="person-card">
            <div className="person-card__wrapper">
                <Link to={'/cc'} className="person-card__wrapper__inner">
                    <div className="person-card__wrapper__inner__up">
                        <img 
                            className="person-card__wrapper__inner__up__img"
                            src="https://thuthuatnhanh.com/wp-content/uploads/2019/02/anh-dai-dien-dep-cho-zalo.jpeg" 
                            alt="" />   
                        <div className="person-card__wrapper__inner__up__name">
                            <span className="person-card__wrapper__inner__up__name__txt">{item.username}</span>
                            <div className="person-card__wrapper__inner__up__name__dot"></div>
                        </div>
                        <span className="person-card__wrapper__inner__up__position">Senior HR Manager</span>
                    </div>
                    <div className="person-card__wrapper__inner__down">
                        <span className="person-card__wrapper__inner__down__sex">{item.sex}</span>
                        <span className="person-card__wrapper__inner__down__email">{item.email}</span>
                        <span className="person-card__wrapper__inner__address">{item.address}</span>
                    </div>

                </Link>
                <button className="person-card__wrapper__delete-user" onClick={handleDeleteUser}>
                    <i class="ri-user-unfollow-line"></i>
                </button>
            </div>
        </div>
    )
}

export default PersonCard;