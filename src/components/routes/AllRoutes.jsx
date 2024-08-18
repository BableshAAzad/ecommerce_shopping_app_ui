import React, { Suspense, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import App from "../../app/App"
import Loading from "../loader/Loading"
import { RouteComps } from "./AllComponents.jsx"
import ProtectOtpRoute from "../authprovider/ProtectOtpRoute.jsx"
import { AuthContext } from "../authprovider/AuthProvider.jsx"
const UpdatePasswordPage = React.lazy(() => import("../auth/UpdatePasswordPage.jsx"));
const OptVerification = React.lazy(() => import("../auth/OptVerification"));
const UserOtpVerifiedPage = React.lazy(() => import("../auth/UserOtpVerifiedPage"));




function AllRoutes() {
    let { isLogin } = useContext(AuthContext);

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<App />}>

                    {/* That component is visible only at the time of otp verification */}
                    <Route path="opt-verification" element={<ProtectOtpRoute>
                        <OptVerification />
                    </ProtectOtpRoute>} />

                    <Route path="user-otp-verified-page" element={<ProtectOtpRoute>
                        <UserOtpVerifiedPage />
                    </ProtectOtpRoute>} />

                    <Route path="update-password-page" element={<ProtectOtpRoute>
                        <UpdatePasswordPage />
                    </ProtectOtpRoute>} />


                    {RouteComps.map(({ element, path, isPrivate, isVisibleAfterLogin, role }, index) => {
                        if (isLogin) {
                            if (isVisibleAfterLogin) {
                                if (role.includes(isLogin.userRole) || !isPrivate) {
                                    return <Route key={index} path={path} element={element} />
                                }
                            }
                        } else
                            if (!isPrivate) {
                                return <Route key={index} path={path} element={element} />
                            }
                    })}

                </Route>
            </Routes>
        </Suspense >
    )
}

export default AllRoutes
