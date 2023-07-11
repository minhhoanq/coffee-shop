import React, { useRef, useState } from "react";

import './pagination.scss';

const Pagination = props => {
    const [page, setPage] = useState(1);

    const active = props.array.findIndex(e => e.arr === page);

    const handleClickPage = (e) => {
        e.preventDefault();
        const numberPage = (Number(e.target.id) + 1);
        
        if(props.parentCallback) {
            props.parentCallback(numberPage);
        };
        if(numberPage === 1) {
            setPage(1);
            return;
        } 
        if(numberPage === 2) {
            setPage(2);
            return;
        } 
        if(numberPage === 3) {
            setPage(3);
            return;
        }
    }

    return (
        <div className="pagination">
            <div className="pagination__page-action">
                <ul className="pagination__page-action__ul">
                    <li className="pagination__page-action__ul__li">
                        <button className="pagination__page-action__ul__li__btn-prev">
                            <i class="ri-arrow-left-s-line"></i>
                        </button>
                    </li>
                    {props.array.map((item, i) => (
                        <li 
                            className={`pagination__page-action__ul__li ${i === active ? 'active' : ''}`} 
                            onClick={handleClickPage}
                            key={i}
                            id={i}
                        >{item.arr}</li>
                    ))}
                    <li className="pagination__page-action__ul__li">
                        <button className="pagination__page-action__ul__li__btn-next">
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="pagination__page-of">
                1-12 of 12
            </div>
        </div>
    )
}

export default Pagination;