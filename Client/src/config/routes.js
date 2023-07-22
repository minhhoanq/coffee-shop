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

//Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/shop/:id', component: DetailProduct},
    { path: '/cart', component: Cart},
    { path: '/login', component: Login, layout: FooterOnly},
    { path: '/register', component: Register,layout: FooterOnly},
    { path: '/admin', component: HomeAdmin,layout: DefaultLayoutAdmin},
    { path: '/admin/staff', component: Staff,layout: DefaultLayoutAdmin},
    { path: '/admin/staff/:id', component: StaffDetail,layout: DefaultLayoutAdmin},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes};
