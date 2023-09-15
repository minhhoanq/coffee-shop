import React, { useEffect, useState } from "react";

import Modal, { ModalContent } from '../../components/modal/Modal';
import axios from "axios";

const CreateAddress = () => {
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();

    const host = "https://provinces.open-api.vn/api/";

    const getProvinceApi = (api) => {
        return axios.get(api)
            .then((response) => {
                renderData(response.data, "province");
            });
    }
    
    var callApiDistrict = (api) => {
        return axios.get(api)
            .then((response) => {
                renderData(response.data.districts, "district");
            });
    }
    var callApiWard = (api) => {
        return axios.get(api)
            .then((response) => {
                renderData(response.data.wards, "ward");
            });
    }
    
    useEffect(() => {
        getProvinceApi(host);
    },[])

    var renderData = (array, select) => {
        let row = `<option disabled value="">Chọn ${
            select === 'province' ? 'Tỉnh/Thành Phố' : 
            select === 'district' ? 'Quận/Huyện' : 
            'Phường/Xã'}</option>`;

        array.forEach(element => {
            row += `<option value="${element.code}">${element.name}</option>`
        });
        document.querySelector("#" + select).innerHTML = row
    }

    const onChangeProvince = (e) => {
        const provinceEl =  document.querySelector("#province");
        callApiDistrict(host + "p/" + provinceEl.value + "?depth=2");
        setProvince(provinceEl.value)
    }

    const onChangeDistrict = (e) => {
        const districtEl =  document.querySelector("#district");
        callApiWard(host + "d/" + districtEl.value + "?depth=2");
        setDistrict(districtEl.value)
    }

    const onChangeWard = (e) => {
        const wardEl =  document.querySelector("#ward");
        setWard(wardEl.value)
    }

    console.log(province + ' / ' + district + ' / ' + ward);

    return (
        <Modal id={'modal'} >
            <ModalContent className={'address__header__modal'}>
                <span className="address__header__modal__title">
                    Địa chỉ mới
                </span>

                <form className="address__header__modal__wrapper">
                    <div className="address__header__modal__wrapper__options">
                        <label>Tỉnh/Thành phố</label>
                        <select name="" id="province" onChange={onChangeProvince}>
                            <option value="">Chọn Tỉnh/Thành Phố</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Quận/Huyện</label>
                        <select name="" id="district" onChange={onChangeDistrict}>
                            <option  value="">Chọn Quận/Huyện</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Phường/Xã</label>
                        <select name="" id="ward" onChange={onChangeWard}>
                            <option   value="">Chọn Phường/Xã</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Số nhà, tên đường</label>
                        <input className="address__header__modal__wrapper__input-address" type="text" placeholder="Số nhà, tên đường" />
                    </div>

                    <div className="address__header__modal__wrapper__default-address">
                        <input type="checkbox" />
                        <label>Đặt làm địa chỉ mặc định</label>
                    </div>

                    <div className="address__header__modal__wrapper__address-type">
                        <label htmlFor="">Loại địa chỉ:</label>

                        <div className="address__header__modal__wrapper__address-type__btn">
                            <button className="address__header__modal__wrapper__address-type__btn__home">Nhà riêng</button>
                            <button className="address__header__modal__wrapper__address-type__btn__office">Văn phòng</button>
                        </div>
                    </div>

                    <div className="address__header__modal__wrapper__choose">
                        <button className="address__header__modal__wrapper__choose__cancel">Trở lại</button>
                        <button className="address__header__modal__wrapper__choose__submit">Xác nhận</button>
                    </div>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default CreateAddress;