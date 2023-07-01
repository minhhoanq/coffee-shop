import React from "react";

import "./overview.scss";

const Overview = () => {

    return (
        <div className="overview">
            <div className="overview__wrapper">
                <div className="overview__wrapper__header">
                    <span>CHI TIẾT VÀ TỔNG QUAN</span>
                    <h1 className="overview__wrapper__header__title">LỊCH SỬ CỦA HẠT CÀ PHÊ</h1>
                </div>

                <div className="overview__wrapper__body">
                    <div className="overview__wrapper__body__left">
                        <span className="overview__wrapper__body__left__title">
                            Nguồn gốc của cà phê Việt Nam
                        </span>

                        <div className="overview__wrapper__body__left__desc">
                            <p className="overview__wrapper__body__left__desc__line-1">
                            Cà phê (gốc từ café trong tiếng Pháp) là một loại thức uống màu đen có chứa chất caffein, được sản xuất từ những hạt cà phê rang lên. Cà phê được sử dụng lần đầu tiên vào thế kỉ thứ 9, khi nó được khám phá ra từ vùng cao nguyên Ethiopia.
                            </p>

                            <p className="overview__wrapper__body__left__desc__line-2">
                            Từ đó, nó lan ra Ai Cập và Yemen và tới thế kỉ thứ 15 thì đến Armenia, Ba Tư, Thổ Nhĩ Kỳ và phía bắc Châu Phi. Từ thế giới Hồi giáo, cà phê đến Ý, sau đó là phần còn lại của Châu Âu, Indonesia và Hoa Kỳ. Ngày nay, cà phê là một trong những thức uống thông dụng toàn cầu.
                            </p>
                            <p className="overview__wrapper__body__left__desc__line-3">
                            Đồn điền cà phê đầu tiên được lập ở Việt Nam là do người Pháp khởi sự ở gần Kẻ Sở, Bắc Kỳ vào năm 1888. Giống cà phê arabica (tức cà phê chè) được trồng ở ven sông. Sau việc canh tác cà phê lan xuống vùng Phủ Lý, Ninh Bình, Thanh Hóa, Nghệ An, Kon Tum và Di Linh.
                            </p>
                        </div>
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