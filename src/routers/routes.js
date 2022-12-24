import Home from "../layout/home/home";
import ReceiveGift from "../layout/receive-gift/receive-gift";
import MyWish from "../layout/my-wish/my-wish";
import { Navigate} from 'react-router-dom'
import FirstScreen from "../layout/first-screen/first_screen";
import GiftBox from "../layout/gift-box/gift_box";
import TwinklingStar from "../layout/TwinklingStar/twinkling_star";

const publicRoutes = [
    { path: '/', element: FirstScreen},
    { path: '/gift-box', element: GiftBox},
    { path: '/star', element: TwinklingStar},
    { path: '/home', element: Home},
    { path: '/receive-gift', element: ReceiveGift},
    { path: '/my-wish', element: MyWish },
];

export {publicRoutes}