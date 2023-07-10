import React from "react";

import './pagination.scss';

const Pagination = () => {
    return (
        <div className="pagination">
            <div className="pagination__page-action">
                <ul className="pagination__page-action__ul">
                    <li className="pagination__page-action__ul__li">
                        <button className="pagination__page-action__ul__li__btn-prev">
                            <i class="ri-arrow-left-s-line"></i>
                        </button>
                    </li>
                    <li className="pagination__page-action__ul__li">1</li>
                    <li className="pagination__page-action__ul__li">...</li>
                    <li className="pagination__page-action__ul__li">5</li>
                    <li className="pagination__page-action__ul__li active">6</li>
                    <li className="pagination__page-action__ul__li">7</li>
                    <li className="pagination__page-action__ul__li">...</li>
                    <li className="pagination__page-action__ul__li">12</li>
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