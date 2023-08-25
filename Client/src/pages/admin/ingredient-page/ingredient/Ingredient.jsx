import React from "react";
import './ingredient.scss';

const Ingredient = () => {
    return (
        <div className="ingredient">
            <h1>Quản lý nguyên liệu</h1>
            <div className="ingredient__container">
                <div className="ingredient__container__options">
                    <div className="ingredient__container__options__search">
                        <fieldset className="ingredient__container__options__search__fielset" id="fielset" disabled={false}>
                            <legend>Tìm kiếm</legend>
                            <input type="text" name="name" id="name" placeholder="Nhập tên nguyên liệu" />
                        </fieldset>

                        <button className="ingredient__container__options__search__btn">
                            <i class="ri-search-line"></i>
                        </button>
                    </div>
                </div>
                <table className="ingredient__container__table">
                    <tr>
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Số lượng tồn</th>
                        <th>Đơn vị tính</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkVrmen8EzBl2BjJS6ZIE55D2q8Ag-imMNkpqjIDzrMjZtfEAp8IesahkIu4ur8eaQnM&usqp=CAU" alt="" />
                        </td>
                        <td>Đường đen</td>
                        <td>20</td>
                        <td>Kg</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkVrmen8EzBl2BjJS6ZIE55D2q8Ag-imMNkpqjIDzrMjZtfEAp8IesahkIu4ur8eaQnM&usqp=CAU" alt="" />
                        </td>
                        <td>Đường đen</td>
                        <td>23</td>
                        <td>Kg</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkVrmen8EzBl2BjJS6ZIE55D2q8Ag-imMNkpqjIDzrMjZtfEAp8IesahkIu4ur8eaQnM&usqp=CAU" alt="" />
                        </td>
                        <td>Đường đen</td>
                        <td>20</td>
                        <td>Kg</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkVrmen8EzBl2BjJS6ZIE55D2q8Ag-imMNkpqjIDzrMjZtfEAp8IesahkIu4ur8eaQnM&usqp=CAU" alt="" />
                        </td>
                        <td>Đường đen</td>
                        <td>23</td>
                        <td>Kg</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Ingredient;