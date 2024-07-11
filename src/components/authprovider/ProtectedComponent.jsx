import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

// eslint-disable-next-line react/prop-types
function ProtectedComponent({ children }) {
    const { isLogin } = useContext(AuthContext);

    if (!isLogin) {
        return <Navigate to="/loginForm" />
    }
    return ({children})
}

export default ProtectedComponent
