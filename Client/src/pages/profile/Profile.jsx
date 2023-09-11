import React, { useEffect, useState } from "react";

import './profile.scss';
import { useSelector, useDispatch } from "react-redux";
import { getProfileActions, updateUserbyUserAction } from "../../redux/asyncActions/authActions";
import { useForm } from "react-hook-form";
import { current } from "@reduxjs/toolkit";

const Profile = () => {
    const user = useSelector((state) => state.auth?.currentUser);
    const [edit, setEdit] = useState(true);
    const dispatch = useDispatch();
    const [imageUser, setImageUser] = useState();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            sex: user.sex ? '1' : '2',
            birth: user.birth,
            phone: user.phone,
            email: user.email,
            image: user.image,
        }
    });
    
    useEffect(() => {
        reset({
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            sex: user.sex ? '1' : '2',
            birth: user.birth,
            phone: user.phone,
            email: user.email,
            image: user.image,
        })
    },[current])


    // function readFileAsync(e) {
    //     return new Promise((resolve, reject) => {
    //       // const file = e.target.files[0];
    //       // if (!file) {
    //       //   return;
    //       // }
    //       const reader = new FileReader();
    
    //       reader.onload = () => {
    //         generateFromImage(reader.result, 700, 700, 0.9, (imgdata) => {
    //           resolve({
    //             id: uuid(),
    //             // url: `data:${file.type};base64,${btoa(reader.result)}`,
    //             url: imgdata,
    //             type: "image"
    //           });
    //         });
    //       };
    
    //       reader.onerror = reject;
    
    //       // reader.readAsBinaryString(e);
    //       reader.readAsDataURL(e);
    //     });
    //   }

    //   async function uploadimg(e) {
    //     const file = e.target.files[0];
    //     if (file) {
    //       console.log("e---image", e.target.files);
    //       const read = await readFileAsync(file);
    //       setImage([...image, read]);
    //       // setFiles([...files, file]);
    
    //       const value = [...files, file];
    //       setFiles(value);
    //       setValue("images", value);
    //     }
    //   }

    const handleSubmitInfo = async(data) => {
        console.log(data);
        const formData = new FormData();
        if(data.image.length > 0) formData.append('image', data.image[0])
        delete data.image
        
        for(let i of Object.entries(data)) formData.append(i[0], i[1])

        const updateProfile = await dispatch(updateUserbyUserAction(formData));

        if(updateProfile.meta.requestStatus === 'fulfilled') {
            await dispatch(getProfileActions());
            setEdit(true);
        }
    }

    const handleEditProfile = (e) => {
        e.preventDefault();

        setEdit(!edit);
        const btn = document.querySelector('#btn-edit');

        btn.classList.toggle('active');
    }
    
    return (
        <div className="profile">
            <span className="profile__title">Hồ sơ của tôi</span>
            <span className="profile__title-2">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>

            <form className="profile__wrapper" onSubmit={handleSubmit(handleSubmitInfo)}>
                <div className="profile__wrapper__form" >
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" >
                        <legend>Tên đăng nhập</legend>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Tên đăng nhập" 
                            {...register("username")}
                            errors={errors}
                            validate={
                                {
                                    required: 'Không bỏ trống'
                                }
                            }
                        />
                    </fieldset>
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit} >
                        <legend>Họ</legend>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            placeholder="Họ" 
                            {...register("firstname")}
                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Tên</legend>
                        <input 
                            type="text"
                            name="lastname" 
                            id="lastname" 
                            {...register("lastname")}
                            placeholder="Tên"
                        />
                    </fieldset>

                    <select 
                        className="profile__wrapper__form__fielset" 
                        id="sex" name="sex" 
                        {...register("sex")}
                        disabled={edit}
                        >
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </select>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Ngày sinh</legend>
                        <input 
                            type="date" id="birth" name="birth"
                            {...register("birth")}
                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Số điện thoại</legend>
                        <input 
                            type="text" 
                            name="phone" 
                            id="phone"
                            placeholder="Số điện thoại" 
                            {...register("phone")}

                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Địa chỉ email</legend>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Địa chỉ email" 
                            {...register("email")}
                        />
                    </fieldset>

                </div>
                
                <div className="profile__wrapper__img">
                    <img 
                        src={user.image}
                        alt="avatar"
                    />
                    <input 
                        id="image" 
                        name="image"
                        className="profile__wrapper__img__input"
                        type="file"
                        disabled={edit}
                        {...register('image')}
                        // onChange={(e) => {
                        //     uploadimg(e);
                        // }}
                    />
                    <label htmlFor={`image`} className={`${edit ? 'disable' : ''}`}>Chọn ảnh</label>
                    <span>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</span>
                </div>

                <button
                    id="btn-edit" 
                    className="profile__wrapper__btn-edit"
                    onClick={handleEditProfile}
                    >
                    <i class="ri-pencil-line profile__wrapper__btn-edit__ic"></i>
                    <i class="ri-pencil-fill profile__wrapper__btn-edit__ic-active"></i>
                </button>

                <button className="profile__wrapper__btn" type="submit">Lưu</button>
            </form>
        </div>
    )
}

export default Profile;