import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Loading from "../loader/Loading"
import App from "../../app/App"
import HomePage from "../navbarpage/HomePage"
import Registration from "../user/Registration"
import OptVerification from "../user/OptVerification"
import UserOtpVerifiedPage from "../user/UserOtpVerifiedPage"
import LoginForm from "../user/LoginForm"


function AllRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<HomePage />} />

                    <Route path="registration" element={<Registration />} />
                    <Route path="optVerification" element={<OptVerification />} />
                    <Route path="userOtpVerifiedPage" element={<UserOtpVerifiedPage />} />

                    <Route path="loginForm" element={<LoginForm />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AllRoutes
