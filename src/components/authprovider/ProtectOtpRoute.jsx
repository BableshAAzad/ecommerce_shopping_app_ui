import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

function ProtectOtpRoute({ children }) {
    const { isOtp } = useContext(AuthContext);

    if (!isOtp) {
        return <Navigate to="/login-form" />
    }
    return (<>{children}</>)
}

export default ProtectOtpRoute
