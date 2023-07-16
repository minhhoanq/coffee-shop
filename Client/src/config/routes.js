import Home from "../pages/home/Home";
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/Cart';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import FooterOnly from '../components/layout/footeronly/FooterOnly';
import DetailProduct from "../pages/detailproduct/DetailProduct";
import HomeAdmin from "../pages/admin/home/HomeAdmin";

//Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/shop/:id', component: DetailProduct},
    { path: '/cart', component: Cart},
    { path: '/login', component: Login, layout: FooterOnly},
    { path: '/register', component: Register,layout: FooterOnly},
    { path: '/admin', component: HomeAdmin,layout: null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes};
