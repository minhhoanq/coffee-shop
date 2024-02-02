import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Dashboard from '../pages/admin/Dashboard';

const appRoutes = [
    {
      path: "/dashboard",
      state: "dashboard",
      element: <Dashboard />,
      sidebarProps: {
        displayText: "Dashboard",
        icon: <DashboardOutlinedIcon />
      }
    },
    {
      path: "/empployees",
      state: "empployees",
      element: <Dashboard />,
      sidebarProps: {
        displayText: "Empployees",
        icon: <AppsOutlinedIcon />
      },
      child: [
        {
          path: "/empployees/alert",
          state: "empployees.alert",
          element: <Dashboard />,
          sidebarProps: {
            displayText: "Alert"
          },
        },
        {
          path: "/empployees/button",
          state: "empployees.button",
          element: <Dashboard />,
          sidebarProps: {
            displayText: "Button"
          }
        }
      ]
    },
    {
      path: "/customers",
      state: "customers",
      element: <Dashboard />,
      sidebarProps: {
        displayText: "Customers",
        icon: <ArticleOutlinedIcon />
      }
    },
    {
      path: "/products",
      state: "products",
      element: <Dashboard />,
      sidebarProps: {
        displayText: "Products",
        icon: <FormatListBulletedOutlinedIcon />
      },
      child: [
        {
          path: "/dashboard/products/create",
          state: "dashboard.products.create",
          element: <Dashboard />,
          sidebarProps: {
            displayText: "Create"
          },
        },
        {
          path: "/product/button",
          state: "product.button",
          element: <Dashboard />,
          sidebarProps: {
            displayText: "Button"
          }
        }
      ]
    }
  ];

export default appRoutes;