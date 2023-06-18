import Home from "../pages/home/Home";
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/Cart';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import FooterOnly from '../components/layout/footeronly/FooterOnly';

//Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/cart', component: Cart},
    { path: '/login', component: Login, layout: FooterOnly},
    { path: '/register', component: Register,layout: FooterOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes};
