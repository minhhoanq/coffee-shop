import Home from "../pages/home/Home";
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/Cart';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import FooterOnly from '../components/layout/footeronly/FooterOnly';
import DetailProduct from "../pages/detailproduct/DetailProduct";
import HomeAdmin from "../pages/admin/home/HomeAdmin";
import Staff from "../pages/admin/staff/Staff";
import DefaultLayoutAdmin from "../components/layout/defaultlayoutAdmin/DefaultLayoutAdmin";
import StaffDetail from "../pages/admin/staffdetail/StaffDetail";
import StaffTrash from "../pages/admin/stafftrash/StaffTrash";
import FinalRegister from "../pages/finalregister/FinalRegister";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import Ingredient from "../pages/admin/ingredient-page/ingredient/Ingredient";
import Profile from "../pages/profile/Profile";
import Payment from "../pages/payment/Payment";
import DefaultLayoutUser from "../components/layout/defaultlayoutuser/DefaultLayoutUser";
import Address from "../pages/address/Address";
import LoginPage from "../pages/LoginPage";

//Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/user/account', component: Profile, layout: DefaultLayoutUser},
    { path: '/user/account/profile', component: Profile, layout: DefaultLayoutUser},
    { path: '/user/account/payment', component: Payment, layout: DefaultLayoutUser},
    { path: '/user/account/address', component: Address, layout: DefaultLayoutUser},
    { path: '/shop', component: Shop},
    { path: '/shop/:slug', component: DetailProduct},
    { path: '/cart', component: Cart},
    { path: '/login', component: LoginPage, layout: null},
    { path: '/forgot-password', component: ForgotPassword, layout: FooterOnly},
    { path: '/register', component: Register,layout: FooterOnly},
    { path: '/finalregister/:status', component: FinalRegister,layout: FooterOnly},
    { path: '/reset-password/:token', component: ResetPassword,layout: FooterOnly},
    { path: '/admin/home', component: HomeAdmin, layout: DefaultLayoutAdmin},
    { path: '/admin/staff', component: Staff, layout: DefaultLayoutAdmin},
    { path: '/admin/staff/:id', component: StaffDetail,layout: DefaultLayoutAdmin},
    { path: '/admin/staff/trash', component: StaffTrash,layout: DefaultLayoutAdmin},
    { path: '/admin/ingredient', component: Ingredient,layout: DefaultLayoutAdmin},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes};
