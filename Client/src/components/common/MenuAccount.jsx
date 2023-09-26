import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const MenuAccount = props => {

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
                zIndex: 0
                }
            }
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <MenuItem onClick={props.props.onClose}>
            <ListItemIcon>
                <AccountCircleIcon /> 
            </ListItemIcon>
            {props.props.item.title}
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.props.onClose}>
            <ListItemIcon>
                <SettingsIcon fontSize="small" />
            </ListItemIcon>
                SETTINGS
            </MenuItem>
            <MenuItem onClick={props.props.onClose}>
            <ListItemIcon>
                <LogoutIcon fontSize="small" />
            </ListItemIcon>
            LOGOUT
            </MenuItem>
        </Menu>
        )
    }

    return (
        <>
            {props.id === "profile" ? (
                <MenuProfile props={props}/>
            ):<></>}
        </>
    )
}

export default MenuAccount;