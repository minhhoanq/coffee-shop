import React, { useEffect, useState } from "react";
import './ingredient.scss';
import { getAllIngredient } from "../../../../api/ingredientApi";
import useDebounce from "../../../../hooks/useDebounce";
import Pagination from "../../../../components/pagination/Pagination";
import CreateIngredient from "./CreateIngredient";

const Ingredient = () => {
    const [ingredient, setIngredient] = useState([]);
    const [sort, setSort] = useState('default');
    const [search, setSearch] = useState('');
    const [idOfUnit, setIdOfUnit] = useState(0);
    const [numPage, setNumPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const numbers = [...Array(totalPage + 1).keys()].slice(1);

    const debounceValue = useDebounce(search, 500);

    console.log(numbers);

    useEffect(() => {
        const getApiIngredient = async() => {
            let name = debounceValue;
            let limit = 6;
            let page = numPage;
            
            let order = [];
            if(sort && sort !== 'default') {
                order = ['amount', sort];
            }

            let unitId = undefined;

            if(idOfUnit) {
                unitId = idOfUnit;
            }

            const response = await getAllIngredient({page, limit, order, name, unitId});

            setIngredient(response.data.rows);
            const quantityPage = Math.ceil((response.data.count || 0) / limit);
            setTotalPage(quantityPage);
        }

        getApiIngredient();
    },[debounceValue, sort, idOfUnit, numPage]);

    const handlePagination = (numberPage) => {
        setNumPage(numberPage);
    }

    const handleCreateIngredient = (e) => {
        e.preventDefault();
        const modal = document.querySelector('#modal');
        modal.classList.toggle('active');
    }

    return (
        <div className="ingredient">
            <div className="ingredient__header">
                <h1>Quản lý nguyên liệu</h1>
                <button className="ingredient__header__btn-create" onClick={handleCreateIngredient}>
                    Thêm nguyên liệu mới
                </button>
                <CreateIngredient/>
            </div>
            <div className="ingredient__container">
                <div className="ingredient__container__options">
                    <div className="ingredient__container__options__search">
                        <fieldset className="ingredient__container__options__search__fielset" id="fielset" disabled={false}>
                            <legend>Tìm kiếm</legend>
                            <input type="text" name="name" id="name" placeholder="Nhập tên nguyên liệu" onChange={(e) => setSearch(e.target.value)}/>
                        </fieldset>

                        <button className="ingredient__container__options__search__btn">
                            <i class="ri-search-line"></i>
                        </button>
                    </div>

                    <div className="ingredient__container__options__selects">
                        <div className="ingredient__container__options__selects__sort" >
                            <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
                                <option value="default">Sắp xếp số lượng</option>
                                <option value="asc">Số lượng từ thấp đến cao</option>
                                <option value="desc">Số lượng từ cao đến thấp</option>
                            </select>
                        </div>

                        <div className="ingredient__container__options__selects__filter">
                            <select name="carts" id="carts" onChange={(e) => setIdOfUnit(Number(e.target.value))}>
                                <option value="default">Chọn đơn vị tính</option>
                                <option value="1">Kilograms</option>
                                <option value="2">Lít</option>
                                <option value="3">Cái</option>
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
                                <td>{i + 1}</td>
                                <td>
                                    <img src={item.ingredientImage} alt={item.ingredientName} />
                                </td>
                                <td>{item.ingredientName}</td>
                                <td>{item.amount < 1 ? 'Hết hàng' : item.amount}</td>
                                <td>{item.unitData.unitName}</td>
                            </tr>
                        ))
                    }
                    
                </table>
            </div>

            <div className="ingredient__page">
                <Pagination parentCallback={handlePagination} numbers={numbers}/>
            </div>
        </div>
    );
}

export default Ingredient;