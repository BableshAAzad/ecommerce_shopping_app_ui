import { createContext, useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = useState(null);
    const navigate = useNavigate()

    const login = (userData) => {
        setIsLogin(userData);
    }

    const logout = () => {
        setIsLogin(null);
    }

    let currentTime = new Date();
    let atExpiredTime = localStorage.getItem("atExpiredTime");
    let rtExpiredTime = localStorage.getItem("rtExpiredTime");
    let userData = localStorage.getItem("userData");
    if (userData)
        userData = JSON.parse(userData);
    
    // console.log(userData)
    // console.log(atExpiredTime)
    // console.log(rtExpiredTime)
    // console.log(isLogin)

    // ^ Access Toke re-genrate
    const handleRefreshToken = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/refreshLogin", "",
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                }
            );
            console.log(response.data)
            if (response.status === 200) {
                let userData = response.data.data;
                console.log(userData)
                let nowDate = new Date().getTime()
                localStorage.setItem("atExpiredTime", new Date(nowDate + (userData.accessExpiration * 1000)));
                login(userData);
            }
        } catch (error) {
            console.log(error)
            if (error.response.data.status === 401) {
                console.log(error.response.data)
            }
        }
    }

    if (new Date(atExpiredTime) > currentTime && currentTime < new Date(rtExpiredTime)) {
        // * login for logged in
        if (!isLogin)
            setIsLogin(userData)
    } else if (new Date(atExpiredTime) < currentTime && currentTime < new Date(rtExpiredTime)) {
        // ^ logic for AT creation
        console.log("AT Re-genrated")
        handleRefreshToken();
    } else {
        // ! Logic for auto logout
        localStorage.setItem("atExpiredTime", "");
        localStorage.setItem("rtExpiredTime", "");
        localStorage.setItem("userData", "");
        navigate("/loginForm")
    }
    // console.log(isLogin)

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// export default React.memo(AuthProvider)
export default AuthProvider
