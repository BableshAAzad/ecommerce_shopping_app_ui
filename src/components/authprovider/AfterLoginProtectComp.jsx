import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AfterLoginProtectComp({ children }) {
    const { isLogin } = useContext(AuthContext);
    console.log(isLogin)
    
    if (!isLogin) {
        return (<>{children}</>)
    }
    return <Navigate to="/logout" />
}

export default AfterLoginProtectComp
