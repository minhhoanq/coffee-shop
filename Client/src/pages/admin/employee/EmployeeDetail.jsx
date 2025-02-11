import { Box } from "@mui/material";
import UserForm from "../../../components/common/UserForm";
import { useState, useEffect } from "react";
import { getUserById } from "../../../api/userApi";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState();
    const { id } = useParams();

    const getEmployeeDetail = async() => {
        const res = await getUserById(Number(id));
        console.log(res);
        setEmployee(res.usersData);
    }
    console.log(employee);

    useEffect(() => {
        getEmployeeDetail();
    },[])

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <UserForm item={employee}/>
        </Box>
    )
}

export default EmployeeDetail;