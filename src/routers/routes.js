import Home from "../layout/home/home";
import ReceiveGift from "../layout/receive-gift/receive-gift";
import MyWish from "../layout/my-wish/my-wish";
import { Navigate} from 'react-router-dom'
import FirstScreen from "../layout/first-screen/first_screen";

const publicRoutes = [
    { path: '/', element: FirstScreen},
    { path: '/home', element: Home},
    { path: '/receive-gift', element: ReceiveGift},
    { path: '/my-wish', element: MyWish },
];

export {publicRoutes}