import React, { useEffect, useState } from "react";
import './ingredient.scss';
import { getAllIngredient } from "../../../../api/ingredientApi";

const Ingredient = () => {
    const [ingredient, setIngredient] = useState([]);

    useEffect(() => {
        const getApiIngredient = async() => {
            const response = await getAllIngredient();

            setIngredient(response.data);
        }

        getApiIngredient();
    },[])

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

                    <div className="ingredient__container__options__selects">
                        <div className="ingredient__container__options__selects__filter">
                            <select name="carts" id="carts">
                                <option value="default">Chọn đơn vị tính</option>
                                <option value="1">Kilograms</option>
                                <option value="2">Lít</option>
                                <option value="3">Cái</option>
                            </select>
                        </div>

                        <div className="ingredient__container__options__selects__sort" >
                            <select name="sort" id="sort">
                                <option value="default">Sắp xếp số lượng</option>
                                <option value="asc">Số lượng từ thấp đến cao</option>
                                <option value="desc">Số lượng từ cao đến thấp</option>
                            </select>
                        </div>
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

                    {
                        ingredient?.map((item, i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>
                                    <img src={item.ingredientImage} alt={item.ingredientName} />
                                </td>
                                <td>{item.ingredientName}</td>
                                <td>{item.amount}</td>
                                <td>{item.unitId}</td>
                            </tr>
                        ))
                    }
                    
                </table>
            </div>
        </div>
    );
}

export default Ingredient;