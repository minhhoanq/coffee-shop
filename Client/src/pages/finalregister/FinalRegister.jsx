import React, { useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FinalRegister = () => {
    const { status } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(status === 'failed') Swal.fire('Oops!', 'Đăng ký không thành công.', 'error').then(() => {
            navigate('/login');
        })

        if(status === 'success') Swal.fire('Congratidications!', 'Đăng ký thành công.', 'success').then(() => {
            navigate('/login');
        })
    })

    return (
        <Navigate to={'/login'} state={{status}} />
    ) 
}

export default FinalRegister;