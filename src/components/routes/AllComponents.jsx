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
import CustomerComp from "../customer/CustomerComp";
import ProfilePage from "../userinfo/ProfilePage";
import SellerComp from "../seller/SellerComp";
import StorageComp from "../seller/StorageComp";
import ProductInfo from "../navbarpage/ProductInfo";

export const RouteComps = [
    {
        element: <CartComp />,
        path: "cart",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <LogoutAlert />,
        path: "logout",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <ProfilePage />,
        path: "profile-page",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <SuperCoinZone />,
        path: "super-coin-zone",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <OrderComp />,
        path: "orders",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <WishListComp />,
        path: "wish-list",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <RewardComp />,
        path: "rewards",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <GiftCardComp />,
        path: "gift-cards",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER", "SELLER"]
    },
    {
        element: <SellerComp />,
        path: "seller",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <CustomerComp />,
        path: "customer",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER"]
    },
    {
        element: <StorageComp />,
        path: "storage",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },



    {
        element: <BecomeASeller />,
        path: "become-a-seller",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER"]
    },
    {
        element: <CustomerRegistration />,
        path: "customer-registration",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role: []
    },
    {
        element: <SellerRegistration />,
        path: "seller-registration",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role: []
    },
    {
        element: <LoginForm />,
        path: "login-form",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role: []
    },
    {
        element: <ProductInfo />,
        path: "/products/:pid",
        isPrivate: false,
        isVisibleAfterLogin: false,
        role: []
    },

]