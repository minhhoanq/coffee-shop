import React, { useEffect, useState } from "react";

import Modal, { ModalContent } from '../../components/modal/Modal';
import axios from "axios";
import { useForm } from "react-hook-form";
import { createUserAddress, setDefaultAddress } from "../../api/userApi";

const CreateAddress = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        // reset,
    } = useForm({
        defaultValues: {
            city_province: "",
            district: "",
            ward: "",
            address: "",
            is_delivery_address: false,
        }
    });

    const host = "https://provinces.open-api.vn/api/";

    const getProvinceApi = (api) => {
        return axios.get(api)
            .then((response) => {
                renderData(response.data, "city_province");
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
            select === 'city_province' ? 'Tỉnh/Thành Phố' : 
            select === 'district' ? 'Quận/Huyện' : 
            'Phường/Xã'}</option>`;

        array.forEach(element => {
            row += `<option id="option" value="${element.code}">${element.name}</option>`
        });
        document.querySelector("#" + select).innerHTML = row
    }

    const onChangeProvince = (e) => {
        const provinceEl =  document.querySelector("#city_province");
        callApiDistrict(host + "p/" + provinceEl.value + "?depth=2");
    }

    const onChangeDistrict = async(e) => {
        const districtEl =  document.querySelector("#district");
        await callApiWard(host + "d/" + districtEl.value + "?depth=2");
    }

    const onChangeWard = (e) => {
        const wardEl =  document.querySelector("#ward");
    }

    const setValueAddress = (data) => {
        const province = document.querySelector("#city_province").querySelector('#option').text;
        const district = document.querySelector("#district").querySelector('#option').text;
        const ward = document.querySelector("#ward").querySelector('#option').text;
        data.city_province = province;
        data.district = district;
        data.ward = ward;
        return data;
    }

    const handleSubmitAddress = async(data) => {
        setValueAddress(data);
        console.log(data.is_delivery_address);
        
        const response = await createUserAddress(data);
        console.log(response.data.id);
        if(data.is_delivery_address) {
            const value = {
                id: response.data.id
            };
            const re = await setDefaultAddress(value);
            console.log(re);
        }
    }

    return (
        <Modal id={'modal'} >
            <ModalContent className={'address__header__modal'}>
                <span className="address__header__modal__title">
                    Địa chỉ mới
                </span>

                <form className="address__header__modal__wrapper" onSubmit={handleSubmit(handleSubmitAddress)}>
                    <div className="address__header__modal__wrapper__options">
                        <label>Tỉnh/Thành phố</label>
                        <select 
                            name="city_province" 
                            id="city_province" 
                            {...register("city_province")} 
                            onChange={onChangeProvince}
                        >
                            <option value="">Chọn Tỉnh/Thành Phố</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Quận/Huyện</label>
                        <select 
                            name="district" 
                            id="district" 
                            {...register("district")} 
                            onChange={onChangeDistrict}
                        >
                            <option value="">Chọn Quận/Huyện</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Phường/Xã</label>
                        <select
                            onChange={onChangeWard}
                            id="ward" 
                            name="ward"
                            {...register("ward")}
                        >
                            <option value="">Chọn Phường/Xã</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Số nhà, tên đường</label>
                        <input 
                            id="address"
                            name="address"
                            {...register("address")}
                            className="address__header__modal__wrapper__input-address" 
                            type="text" 
                            placeholder="Số nhà, tên đường" 
                        />
                    </div>

                    <div className="address__header__modal__wrapper__default-address">
                        <input type="checkbox" id="is_delivery_address" name="is_delivery_address" {...register("is_delivery_address")}/>
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