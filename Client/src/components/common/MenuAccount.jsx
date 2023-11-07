import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuCart from './MenuCart'
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutActions } from "../../redux/asyncActions/authActions";
import Swal from "sweetalert2";

const MenuAccount = props => {
    const user = useSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.auth.isFetching);
    const navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleLogout = useCallback(async() => {
        const logout = await dispatch(logoutActions(user.id));
        // console.log(logout);
        const reqStatus = logout.meta.requestStatus;
        if(reqStatus === 'fulfilled' && isFetching === false) {
            Toast.fire({ icon: "success", title: logout.payload})
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } else if (reqStatus === 'rejected') {
            Toast.fire({ icon: "error", title: logout.payload})
        }
    })

    const MenuProfile = props => {
        return(
            <Menu
                anchorEl={props.props.anchorEl}
                id={props.props.id}
                open={props.props.open}
                onClose={props.props.onClose}
                onClick={props.props.onClick}
                PaperProps={{
                        elevation: 0,
                        sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1,
                        "& .AccountCircleIcon-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                        },
                        "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 1000
                    }
                }
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                {user && 
                <>
                    <Link to={props.props.item.pathname}
                        style={{
                            cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "rgba(0, 0, 0, 0.8)",
                                "&:hover" : {
                                    color: "#000"
                                }
                        }}
                    >
                        <MenuItem sx={{
                            width: "100%"
                        }}>
                            <ListItemIcon>
                                <AccountCircleIcon /> 
                            </ListItemIcon>
                                {props.props.item.title}
                        </MenuItem>
                    </Link>
                    <Divider />
                </>
                }
                <MenuItem onClick={props.props.onClose} sx={{
                        width: "100%"
                    }}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    SETTINGS
                </MenuItem>
                {user ? <Link
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover" : {
                            color: "#000"
                        }
                    }}
                    onClick={handleLogout}
                >
                    <MenuItem onClick={props.props.onClose} sx={{
                        width: "100%"
                    }}>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        LOGOUT
                    </MenuItem>
                </Link> : 
                <Link to={"/login"}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover" : {
                            color: "#000"
                        }
                    }}
                >
                    <MenuItem onClick={props.props.onClose} sx={{
                        width: "100%"
                    }}>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        LOGIN
                    </MenuItem>
                </Link>
                }
            </Menu>
        )
    }

    return (
        <>
            {props.id === "profile" ? (
                <MenuProfile props={props}/>
            ) : props.id === "cart" ? <MenuCart props={props}/> : <></>}
        </>
    )
}

export default MenuAccount;