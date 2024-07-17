import CustomerRegistration from "../auth/CustomerRegistration";
import LoginForm from "../auth/LoginForm";
import LogoutAlert from "../auth/LogoutAlert";
import SellerRegistration from "../auth/SellerRegistration";
import CustomerComp from "../customer/CustomerComp";
import ErrorPage from "../errorpage/ErrorPage";
import BecomeASeller from "../navbarpage/BecomeASeller";
import CartComp from "../navbarpage/CartComp";
import GiftCardComp from "../navbarpage/GiftCardComp";
import HomePage from "../navbarpage/HomePage";
import OrderComp from "../navbarpage/OrderComp";
import ProductInfo from "../navbarpage/ProductInfo";
import RewardComp from "../navbarpage/RewardComp";
import SuperCoinZone from "../navbarpage/SuperCoinZone";
import WishListComp from "../navbarpage/WishListComp";
import AddStorageType from "../seller/AddStorageType";
import AddProduct from "../seller/product/AddProduct";
import ProductBySeller from "../seller/product/ProductBySeller";
import SellerComp from "../seller/SellerComp";
import AddStorage from "../seller/storage/AddStorage";
import Storage from "../seller/storage/Storage";
import StorageOperation from "../seller/StorageOperation";
import StorageType from "../seller/StorageType";
import WareHouse from "../seller/WareHouse";
import ProfilePage from "../userinfo/ProfilePage";

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
        element: <CustomerComp />,
        path: "customers",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["CUSTOMER"]
    },
    {
        element: <SellerComp />,
        path: "sellers",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <StorageOperation />,
        path: "sellers/storage-operations",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <AddProduct />,
        path: "sellers/products/add-product/:storageId",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <AddStorageType />,
        path: "sellers/storage-operations/add-storage-type",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <AddStorage />,
        path: "sellers/storage-operations/add-storage",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <WareHouse />,
        path: "sellers/wareHouses",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <Storage />,
        path: "sellers/storages",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <StorageType />,
        path: "sellers/storage-types",
        isPrivate: true,
        isVisibleAfterLogin: true,
        role: ["SELLER"]
    },
    {
        element: <ProductBySeller />,
        path: "sellers/products",
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
        element: <HomePage />,
        path: "",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: []
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
        path: "products/:pid",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: []
    },






    
    {
        element: <ErrorPage />,
        path: "*",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: []
    },

]