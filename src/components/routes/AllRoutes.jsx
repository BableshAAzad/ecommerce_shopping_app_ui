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
import CartComp from "../navbarpage/CartComp"
import HomePage from "../navbarpage/HomePage"
import { AuthContext } from "../authprovider/AuthProvider"
import ProtectedRoute from "../authprovider/ProtectedRoute"
import { ProtectedC } from "./ProtectedComp.jsx"

function AllRoutes() {
    const { isLogin } = useContext(AuthContext);

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<HomePage />} />

                    <Route path="customerRegistration" element={<CustomerRegistration />} />
                    <Route path="sellerRegistration" element={<SellerRegistration />} />

                    <Route path="optVerification" element={<OptVerification />} />
                    <Route path="userOtpVerifiedPage" element={<UserOtpVerifiedPage />} />

                    <Route path="cart" element={<CartComp />} />
                    <Route path="becomeASeller" element={<BecomeASeller />} />
                    <Route path="loginForm" element={<LoginForm />} />

                    {/*! Protected Routes */}
                    {ProtectedC.map(({ comp, urlC }, index) =>(
                        <Route key={index} path={urlC} element={
                            <ProtectedRoute>
                                {comp}
                            </ProtectedRoute>
                        } />
                    ))}


                    {/* <Route path="profilePage" element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path="logout" element={
                        <ProtectedRoute>
                            <LogoutComp />
                        </ProtectedRoute>
                    } /> */}

                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Suspense >
    )
}

export default AllRoutes
