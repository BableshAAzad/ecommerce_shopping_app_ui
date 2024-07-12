import CustomerRegistration from "../auth/CustomerRegistration";
import LoginForm from "../auth/LoginForm";
import SellerRegistration from "../auth/SellerRegistration";
import BecomeASeller from "../navbarpage/BecomeASeller";

export const AfterLogC = [
    {
        comp: <CustomerRegistration />,
        urlC: "customer-registration"
    },
    {
        comp: <SellerRegistration />,
        urlC: "seller-registration"
    },
    {
        comp: <BecomeASeller />,
        urlC: "become-a-seller"
    },
    {
        comp: <LoginForm />,
        urlC: "login-form"
    },

]
