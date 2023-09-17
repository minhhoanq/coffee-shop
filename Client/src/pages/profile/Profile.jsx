import React, { useEffect, useState } from "react";

import './profile.scss';
import { useSelector, useDispatch } from "react-redux";
import { getProfileActions, updateUserbyUserAction } from "../../redux/asyncActions/authActions";
import { useForm } from "react-hook-form";
import { current } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
    const user = useSelector((state) => state.auth?.currentUser);
    const [edit, setEdit] = useState(true);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
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
        });
    },[current])

    const handleSubmitInfo = async(data) => {
        console.log(data);
        const formData = new FormData();
        if(data.image.length > 0) formData.append('image', data.image[0])
        delete data.image
        
        for(let i of Object.entries(data)) formData.append(i[0], i[1])

        const updateProfile = await dispatch(updateUserbyUserAction(formData));
        console.log(updateProfile);

        if(updateProfile.meta.requestStatus === 'fulfilled') {
            await dispatch(getProfileActions());
            setEdit(true);
              
            Toast.fire({
                icon: 'success',
                title: updateProfile.payload.data.mes,
            })
            
        }

        if(updateProfile.meta.requestStatus === 'rejected') {
            // await dispatch(getProfileActions());
            setEdit(true);
              
            Toast.fire({
                icon: 'error',
                title: 'Lỗi! Vui lòng thử lại sau.',
            })
            
        }
    }

    const handleEditProfile = (e) => {
        e.preventDefault();

        setEdit(!edit);
        const btn = document.querySelector('#btn-edit');

        btn.classList.toggle('active');
    }

    // username: Yup.string().required("Vui lòng nhập tên đăng nhập.").min(4, "Vui lòng nhập nhiều hơn 4 ký tự."),
    // firstname: Yup.string().required("Vui lòng nhập họ của bạn."),
    // lastname: Yup.string().required("Vui lòng nhập tên của bạn."),
    // email: Yup.string().required("Vui lòng nhập email của bạn.").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email."),
    // phone: Yup.string().required("Vui lòng nhập số điện thoại.").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại phải là số và tối thiểu 10 kí tự."),
    
    return (
        <div className="profile">
            <span className="profile__title">Hồ sơ của tôi</span>
            <span className="profile__title-2">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>

            <form className="profile__wrapper" onSubmit={handleSubmit(handleSubmitInfo)}>
                <div className="profile__wrapper__form" >
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit} >
                        <legend>Tên đăng nhập</legend>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Tên đăng nhập" 
                            {...register("username", 
                                    {
                                        required: 'Vui lòng nhập tên đăng nhập.',
                                        minLength: {
                                            value: 4,
                                            message: 'Vui lòng nhập nhiều hơn 4 ký tự.'
                                        }
                                    }
                                )
                            }
                            errors={errors}
                        />
                    </fieldset>
                    <span className="profile__wrapper__form__mess">{errors?.username && errors.username.message}</span>
                    
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit} >
                        <legend>Họ</legend>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            placeholder="Họ" 
                            {...register("firstname", 
                                    {
                                        required: 'Vui lòng nhập họ của bạn.'
                                    }
                                )
                            }
                            errors={errors}
                        />
                    </fieldset>
                    <span className="profile__wrapper__form__mess">{errors?.firstname && errors.firstname.message}</span>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Tên</legend>
                        <input 
                            type="text"
                            name="lastname" 
                            id="lastname" 
                            placeholder="Tên"
                            {...register("lastname", 
                                    {
                                        required: 'Vui lòng nhập tên của bạn.'
                                    }
                                )
                            }
                            errors={errors}
                        />
                    </fieldset>
                    <span className="profile__wrapper__form__mess">{errors?.lastname && errors.lastname.message}</span>

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
                            {...register("phone", 
                                    {
                                        required: 'Vui lòng nhập số điện thoại.',
                                        pattern: {
                                            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                                            message: 'Số điện thoại phải là số và tối thiểu 10 kí tự.'
                                        }
                                    }
                                )
                            }
                            errors={errors}

                        />
                    </fieldset>
                    <span className="profile__wrapper__form__mess">{errors?.phone && errors.phone.message}</span>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Địa chỉ email</legend>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Địa chỉ email" 
                            {...register("email", 
                                    {
                                        required: 'Vui lòng nhập email.',
                                        pattern: {
                                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            message: 'Chưa đúng định dạng email.'
                                        }
                                    }
                                )
                            }
                            errors={errors}
                        />
                    </fieldset>

                </div>
                <span className="profile__wrapper__form__mess">{errors?.email && errors.email.message}</span>
                
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

                <button className="profile__wrapper__btn" type="submit" disabled={!isDirty} hidden={!isDirty}>Lưu</button>
            </form>
        </div>
    )
}

export default Profile;