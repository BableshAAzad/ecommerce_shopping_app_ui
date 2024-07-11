import LogoutComp from "../auth/LogoutComp";
import CartComp from "../navbarpage/CartComp";
import GiftCardComp from "../navbarpage/GiftCardComp";
import OrderComp from "../navbarpage/OrderComp";
import RewardComp from "../navbarpage/RewardComp";
import SuperCoinZone from "../navbarpage/SuperCoinZone";
import WishListComp from "../navbarpage/WishListComp";
import ProfilePage from "../user/ProfilePage";

export const ProtectedC = [
    {
        comp: <CartComp />,
        urlC: "cart"
    },
    {
        comp: <LogoutComp />,
        urlC: "logout"
    },
    {
        comp: <ProfilePage />,
        urlC: "profile-page"
    },
    {
        comp: <SuperCoinZone />,
        urlC: "super-coin-zone"
    },
    {
        comp: <OrderComp />,
        urlC: "orders"
    },
    {
        comp: <WishListComp />,
        urlC: "wish-list"
    },
    {
        comp: <RewardComp />,
        urlC: "rewards"
    },
    {
        comp: <GiftCardComp />,
        urlC: "gift-cards"
    },

]