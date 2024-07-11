import { Suspense, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import App from "../../app/App"
import CustomerRegistration from "../auth/CustomerRegistration"
import LoginForm from "../auth/LoginForm"
import OptVerification from "../auth/OptVerification"
import SellerRegistration from "../auth/SellerRegistration"
import UserOtpVerifiedPage from "../auth/UserOtpVerifiedPage"
import ErrorPage from "../errorpage/ErrorPage"
import Loading from "../loader/Loading"
import BecomeASeller from "../navbarpage/BecomeASeller"
import HomePage from "../navbarpage/HomePage"
import { AuthContext } from "../authprovider/AuthProvider"
import ProtectedRoute from "../authprovider/ProtectedRoute"
import { ProtectedC } from "./ProtectedComp.jsx"
import ProtectOtpRoute from "../authprovider/ProtectOtpRoute.jsx"

function AllRoutes() {
    const { isLogin } = useContext(AuthContext);

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<HomePage />} />

                    <Route path="customer-registration" element={<CustomerRegistration />} />
                    <Route path="seller-registration" element={<SellerRegistration />} />

                    <Route path="opt-verification" element={<ProtectOtpRoute>
                        <OptVerification />
                    </ProtectOtpRoute>} />

                    <Route path="user-otp-verified-page" element={<ProtectOtpRoute>
                        <UserOtpVerifiedPage />
                    </ProtectOtpRoute>} />

                    <Route path="become-a-seller" element={<BecomeASeller />} />
                    <Route path="login-form" element={<LoginForm />} />

                    {/*! Protected Routes */}
                    {ProtectedC.map(({ comp, urlC }, index) => (
                        <Route key={index} path={urlC} element={
                            <ProtectedRoute>
                                {comp}
                            </ProtectedRoute>
                        } />
                    ))}

                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Suspense >
    )
}

export default AllRoutes
