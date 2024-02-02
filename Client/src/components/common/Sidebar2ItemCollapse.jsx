import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import colorConfigs from "../../config/colorConfigs";
import Sidebar2Item from "../common/Sidebar2Item";
import { useSelector } from "react-redux";

const Sidebar2ItemCollapse = (props) => {
    const item = props.item;
    const [open, setOpen] = useState(false);

    const { appState } = useSelector((state) => state.appState)

    console.log(appState);

    useEffect(() => {
        if(appState.includes(item.state)) {
            setOpen(true);
        }
    },[item])
    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.sideBar.hoverBg
                        },
                        paddingY: "12px",
                        paddingX: "24px"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            color: colorConfigs.sideBar.color
                        }}
                    >
                        {item.sidebarProps.icon && item.sidebarProps.icon}
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }
                    />
                    {open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                </ListItemButton>
                <Collapse in={open} timeout={"auto"}>
                    <List>
                        {item.child?.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ? (
                                    <Sidebar2ItemCollapse item={route} key={index}/>
                                ) : (
                                    <Sidebar2Item item={route} key={index}/>
                                )
                            ) : null
                        ))}
                    </List>
                </Collapse>
            </>
        ) : null
    )
}

export default Sidebar2ItemCollapse;