import React, { useRef, useState } from "react";

import './pagination.scss';

const Pagination = props => {
    const [page, setPage] = useState(1);
    const numbers = props.numbers;

    const active = numbers.findIndex(e => e === page);

    //Choose page
    const handleClickPage = (e) => {
        e.preventDefault();
        const numberPage = (Number(e.target.id) + 1);
        
        if(props.parentCallback) {
            props.parentCallback(numberPage);
        };
        setPage(numberPage);
    }

    //Prev page
    const handlePrevPage = (e) => {
        e.preventDefault();

        if(page <= 1) {
            return;
        }
        if(props.parentCallback) {
            props.parentCallback(page - 1);
        };
        setPage(page - 1);
    }

    //Next page
    const handleNextPage = (e) => {
        e.preventDefault();

        if(page >= (numbers).length) {
            return;
        }
        if(props.parentCallback) {
            props.parentCallback(page + 1);
        };
        setPage(page + 1);
    }

    return (
        <div className="pagination">
            <div className="pagination__page-action">
                <ul className="pagination__page-action__ul">
                    <li className="pagination__page-action__ul__li">
                        <button className="pagination__page-action__ul__li__btn-prev" onClick={handlePrevPage}>
                            <i class="ri-arrow-left-s-line"></i>
                        </button>
                    </li>
                    {numbers.map((item, i) => (
                        <li 
                            className={`pagination__page-action__ul__li ${i === active ? 'active' : ''}`} 
                            onClick={handleClickPage}
                            key={i}
                            id={i}
                        >{item}</li>
                    ))}
                    <li className="pagination__page-action__ul__li">
                        <button className="pagination__page-action__ul__li__btn-next" onClick={handleNextPage}>
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="pagination__page-of">
                {`${page} - ${(numbers).length} of ${(numbers).length}`}
            </div>
        </div>
    )
}

export default Pagination;