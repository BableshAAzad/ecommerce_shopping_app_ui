import CustomerRegistration from "../auth/CustomerRegistration";
import LoginForm from "../auth/LoginForm";
import LogoutAlert from "../auth/LogoutAlert";
import SellerRegistration from "../auth/SellerRegistration";
import BecomeASeller from "../navbarpage/BecomeASeller";
import CartComp from "../navbarpage/CartComp";
import GiftCardComp from "../navbarpage/GiftCardComp";
import OrderComp from "../navbarpage/OrderComp";
import RewardComp from "../navbarpage/RewardComp";
import SuperCoinZone from "../navbarpage/SuperCoinZone";
import WishListComp from "../navbarpage/WishListComp";
import ProfilePage from "../user/ProfilePage";

export const RouteComps = [
    {
        element: <CartComp />,
        path: "cart",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <LogoutAlert />,
        path: "logout",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <ProfilePage />,
        path: "profile-page",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <SuperCoinZone />,
        path: "super-coin-zone",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <OrderComp />,
        path: "orders",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <WishListComp />,
        path: "wish-list",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <RewardComp />,
        path: "rewards",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    {
        element: <GiftCardComp />,
        path: "gift-cards",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role : ["CUSTOMER", "SELLER"]
    },
    // ^-----------------------------------------------
    {
        element: <CustomerRegistration />,
        path: "customer-registration",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role : ["CUSTOMER"]
    },
    {
        element: <SellerRegistration />,
        path: "seller-registration",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role : ["SELLER"]
    },
    {
        element: <BecomeASeller />,
        path: "become-a-seller",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role : ["CUSTOMER"]
    },
    {
        element: <LoginForm />,
        path: "login-form",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role : ["CUSTOMER", "SELLER"]
    },
    // ^-----------------------------------------------

]