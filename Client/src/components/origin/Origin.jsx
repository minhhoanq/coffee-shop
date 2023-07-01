import React from "react";

import './origin.scss';

const Origin = () => {

    return (
        <div className="origin">
            <div className="origin__overview">
                <h1 className="origin__overview_title">
                    THE COFFEE SHOP
                </h1>

                <p className="origin__overview__description">
                "Đi cà phê" từ lâu không đơn thuần chỉ là uống một tách cà phê mà còn là dịp gặp mặt và trò chuyện cùng bạn bè. Tại The Coffee Shop, chúng tôi trân trọng và đề cao giá trị kết nối giữa con người và trải nghiệm của khách hàng. Chúng tôi được truyền cảm hứng từ những tách cà phê và thức uống mình tạo ra. Chúng tôi tin tưởng mạnh mẽ rằng thức uống với chất lượng tốt nhất được phục vụ trong không gian thân thiện.
                </p>
            </div>

            <div className="origin__img">
                <div className="origin__img__left">
                    <img className="origin__img__left__up" src="https://theme.hstatic.net/1000092293/1000266421/14/banner-infor-index-1.png?v=188" alt=""/>
                    <img className="origin__img__left__down" src="https://theme.hstatic.net/1000092293/1000266421/14/banner-infor-index-2.png?v=188" alt="" />
                </div>

                <div className="origin__img__right">
                    <img src="https://theme.hstatic.net/1000092293/1000266421/14/background-infor-index.jpg?v=188" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Origin;