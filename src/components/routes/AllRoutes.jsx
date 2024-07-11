import { Suspense, useContext, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import App from "../../app/App"
import ProfilePage from "../../components/user/ProfilePage"
import CustomerRegistration from "../auth/CustomerRegistration"
import LoginForm from "../auth/LoginForm"
import OptVerification from "../auth/OptVerification"
import SellerRegistration from "../auth/SellerRegistration"
import UserOtpVerifiedPage from "../auth/UserOtpVerifiedPage"
import { AuthContext } from "../authprovider/AuthProvider"
import ErrorPage from "../errorpage/ErrorPage"
import Loading from "../loader/Loading"
import BecomeASeller from "../navbarpage/BecomeASeller"
import CartComp from "../navbarpage/CartComp"
import HomePage from "../navbarpage/HomePage"
import LogoutComp from "../auth/LogoutComp"
// import ProtectedComponent from "../authprovider/ProtectedComponent"


function AllRoutes() {
    const { isLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log(isLogin)
    // useEffect(() => console.log(isLogin), [isLogin])
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
                    <Route path="logout" element={<LogoutComp />} />

                    <Route path="cart" element={<CartComp />} />
                    <Route path="becomeASeller" element={<BecomeASeller />} />

                    {/* Protected Routes */}
                    {/* <ProtectedComponent> */}
                    if (!isLogin) navigate(`/loginForm`)
                    else <Route path="/profilePage" element={<ProfilePage />} />
                    {/* <Route path="/profilePage" element={<ProfilePage />} />
                    </ProtectedComponent> */}

                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AllRoutes
