import { Link, ListItemButton, ListItemIcon } from "@mui/material";
import colorConfigs from "../../config/colorConfigs";
import { useDispatch } from "react-redux";
import { setAppState } from "../../redux/slice/appStateSlice";

const Sidebar2 = (props) => {
    const item = props.item;
    // const { appState } = use
    const dispatch = useDispatch();

    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                onClick={() => {
                    dispatch(setAppState(item.state))
                }}
                component={Link}
                to={item.path}
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
                {item.sidebarProps.displayText}
            </ListItemButton>
        ) : null
    )
}

export default Sidebar2;