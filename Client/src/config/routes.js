import Home from "../pages/Home";
import Shop from '../pages/shop/Shop';
// import Cart from '../pages/cart/Cart';
import Cart from '../pages/Cart';
import Login from '../pages/login/Login';
import Register from '../pages/Register';
import FooterOnly from '../components/layout/footeronly/FooterOnly';
// import DetailProduct from "../pages/detailproduct/DetailProduct";
import ProductDetail from "../pages/ProductDetail";
// import HomeAdmin from "../pages/admin/home/HomeAdmin";
import Dashboard from "../pages/admin/Dashboard";
import Staff from "../pages/admin/staff/Staff";
import DefaultLayoutAdmin from "../components/layout/defaultlayoutAdmin/DefaultLayoutAdmin";
import StaffDetail from "../pages/admin/staffdetail/StaffDetail";
import StaffTrash from "../pages/admin/stafftrash/StaffTrash";
import FinalRegister from "../pages/finalregister/FinalRegister";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import Ingredient from "../pages/admin/ingredient-page/ingredient/Ingredient";
import Payment from "../pages/Payment";
import Payment2 from "../pages/payment/Payment";
import Address from "../pages/Address";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../components/layout/MainLayout";
import Menu from "../pages/Menu";
import DefaultProfileLayout from "../components/layout/DefaultProfileLayout";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";
import Employee from "../pages/admin/Employee";
import Customer from "../pages/admin/Customer";
import Product from "../pages/admin/Product";
import CreateProduct from "../pages/admin/CreateProduct";
import Category from "../pages/admin/Category";
import ProductDetailAdmin from "../pages/admin/product/ProductDetail"
import CreateEmployee from "../pages/admin/employee/CreateEmployee";
import EmployeeDetail from "../pages/admin/employee/EmployeeDetail";
import Order from "../pages/admin/Order";
import OrderDetail from "../pages/admin/order/OrderDetail";

//Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: null},
    { path: '/user/account/profile', component: Profile, layout: DefaultProfileLayout},
    // { path: '/user/account/profile', component: Profile2, layout: DefaultLayoutUser},
    { path: '/user/account/payment', component: Payment, layout: DefaultProfileLayout},
    { path: '/user/account/payment2', component: Payment2, layout: DefaultProfileLayout},
    { path: '/user/account/address', component: Address, layout: DefaultProfileLayout},
    { path: '/menu', component: Menu},
    { path: '/shop', component: Shop},
    { path: '/checkout', component: Checkout},
    // { path: '/shop/test', component: DetailProduct},
    { path: '/shop/:slug', component: ProductDetail},
    { path: '/cart', component: Cart},
    { path: '/login', component: LoginPage, layout: null},
    { path: '/signin', component: Login, layout: null},
    { path: '/forgot-password', component: ForgotPassword, layout: FooterOnly},
    { path: '/register', component: Register, layout: null},
    { path: '/finalregister/:status', component: FinalRegister,layout: FooterOnly},
    { path: '/reset-password/:token', component: ResetPassword,layout: FooterOnly},

    //dashboard
    { path: '/dashboard', component: Dashboard, layout: DefaultLayoutAdmin},
    { path: '/dashboard/employees', component: Employee, layout: DefaultLayoutAdmin},
    { path: '/dashboard/employees/create', component: CreateEmployee, layout: DefaultLayoutAdmin},
    { path: '/dashboard/employees/:id', component: EmployeeDetail, layout: DefaultLayoutAdmin},
    { path: '/dashboard/customers', component: Customer, layout: DefaultLayoutAdmin},
    { path: '/dashboard/products', component: Product, layout: DefaultLayoutAdmin},
    { path: '/dashboard/products/create', component: CreateProduct, layout: DefaultLayoutAdmin},
    { path: '/dashboard/products/:slug', component: ProductDetailAdmin, layout: DefaultLayoutAdmin},
    { path: '/dashboard/categories', component: Category, layout: DefaultLayoutAdmin},
    { path: '/dashboard/orders', component: Order, layout: DefaultLayoutAdmin},
    { path: '/dashboard/orders/:id', component: OrderDetail, layout: DefaultLayoutAdmin},

    { path: '/dashboard/staff/:id', component: StaffDetail,layout: DefaultLayoutAdmin},
    { path: '/dashboard/staff/trash', component: StaffTrash,layout: DefaultLayoutAdmin},
    { path: '/dashboard/ingredient', component: Ingredient,layout: DefaultLayoutAdmin},

    //test
    { path: '/dashboard', component: DashboardPage, layout: MainLayout}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes};
