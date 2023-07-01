import React from "react";

import "./overview.scss";

const Overview = () => {

    return (
        <div className="overview">
            <div className="overview__wrapper">
                <div className="overview__wrapper__header">
                    <span>CHI TIẾT VÀ TỔNG QUAN</span>
                    <h2>MÁY PHA CÀ PHÊ CLIVE COFFEE</h2>
                </div>

                <div className="overview__wrapper__body">
                    <div className="overview__wrapper__body__left">
                        <h3 className="overview__wrapper__body__left__title">
                        Máy pha cà phê chuyên nghiệp
                        </h3>

                        <p className="overview__wrapper__body__left__desc">
                        Máy pha cà phê hạt A1 chính là một trong top các loại máy pha chế chuyên nghiệp. Máy pha này phù hợp với những quán cà phê có hiệu suất phục vụ khoảng 200-300 ly/ngày. Máy hoạt động với công suất lớn nhưng vẫn đảm bảo chất lượng hương vị cà phê nguyên chất thơm ngon.

                        Sở hữu đầy đủ các chức năng cần thiết nhất của một máy pha cà phê chuyên dụng. Thiết kế bề ngoài khá tinh tế và hiện đại. Các chức năng, phím bấm dễ sử dụng với tất cả mọi người. Đánh giá sơ lược tổng quan, máy pha cafe Clive là một sản phẩm rất phù hợp cho quán cà phê nhỏ, kinh doanh cafe mang đi take away.

                        Máy pha cafe mini bán tự động, máy pha cafe viên nén, máy lọc cà phê, máy pha cà phê tự động và máy pha cà phê chuyên nghiệp là 5 loại chính trên thị trường hiện nay. Giá cả của 5 loại này cũng chênh lệch nhau khá nhiều, tương đương với mức độ tăng dần của sự tiện lợi, công suất phục vụ và chất lượng ly cafe thành phẩm.
                        </p>
                    </div>

                    <div className="overview__wrapper__body__right">
                        <img src="https://theme.hstatic.net/200000670943/1001037508/14/home_introduce_img.jpg?v=124" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;