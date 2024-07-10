import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Loading from "../loader/Loading"
import App from "../../app/App"
import HomePage from "../navbarpage/HomePage"
import CustomerRegistration from "../auth/CustomerRegistration"
import OptVerification from "../auth/OptVerification"
import UserOtpVerifiedPage from "../auth/UserOtpVerifiedPage"
import LoginForm from "../auth/LoginForm"
import CartComp from "../navbarpage/CartComp"
import BecomeASeller from "../navbarpage/BecomeASeller"
import ErrorPage from "../errorpage/ErrorPage"
import SellerRegistration from "../auth/SellerRegistration"


function AllRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<HomePage />} />

                    <Route path="customerRegistration" element={<CustomerRegistration />} />
                    <Route path="sellerRegistration" element={<SellerRegistration />} />

                    <Route path="optVerification" element={<OptVerification />} />
                    <Route path="userOtpVerifiedPage" element={<UserOtpVerifiedPage />} />

                    <Route path="loginForm" element={<LoginForm />} />
                    <Route path="cart" element={<CartComp />} />
                    <Route path="becomeASeller" element={<BecomeASeller />} />

                    
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AllRoutes
