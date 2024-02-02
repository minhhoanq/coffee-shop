import { Avatar, Drawer, List, ListItemButton, ListItemIcon, Stack, Toolbar } from "@mui/material";
import sizeConfigs from "../../config/sizeConfigs";
import colorConfigs from "../../config/colorConfigs";
import Sidebar2Item from "../common/Sidebar2Item";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import logo from "../../assets/images/logo.jpg";
import Sidebar2ItemCollapse from "./Sidebar2ItemCollapse";
import { useEffect } from "react";

const appRoutes= [
    {
      path: "/dashboard",
      state: "dashboard",
      sidebarProps: {
        displayText: "Dashboard",
        icon: <DashboardOutlinedIcon />
      }
    },
    {
      path: "/empployees",
      state: "empployees",
      sidebarProps: {
        displayText: "Empployees",
        icon: <AppsOutlinedIcon />
      },
      child: [
        {
          path: "/empployees/alert",
          state: "empployees.alert",
          sidebarProps: {
            displayText: "Alert"
          },
        },
        {
          path: "/empployees/button",
          state: "empployees.button",
          sidebarProps: {
            displayText: "Button"
          }
        }
      ]
    },
    {
      path: "/customers",
      state: "customers",
      sidebarProps: {
        displayText: "Customers",
        icon: <ArticleOutlinedIcon />
      }
    },
    {
      path: "/products",
      state: "products",
      sidebarProps: {
        displayText: "Products",
        icon: <FormatListBulletedOutlinedIcon />
      },
      child: [
        {
          path: "/dashboard/products/create",
          state: "dashboard.products.create",
          sidebarProps: {
            displayText: "Create"
          },
        },
        {
          path: "/product/button",
          state: "product.button",
          sidebarProps: {
            displayText: "Button"
          }
        }
      ]
    }
  ];

const Sidebar2 = () => {

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sizeConfigs.sideBar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: sizeConfigs.sideBar.width,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sideBar.bg
                }
            }}
        >
            <List disablePadding>
                <Toolbar sx={{marginBottom: "20px"}}>
                    <Stack
                        sx={{width: "100%"}}
                        direction={"row"}
                        justifyContent={"center"}
                    >
                        <Avatar src={logo} alt="logo"/>
                    </Stack>
                </Toolbar>
                {appRoutes.map((route, index) => (
                    route.sidebarProps ? (
                        route.child ? (
                            <Sidebar2ItemCollapse item={route} key={index}/>
                        ) : (
                            <Sidebar2Item item={route} key={index}/>
                        )
                    ) : null
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar2;