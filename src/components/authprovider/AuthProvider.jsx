import { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from "../loader/Loading"
import { ModelAlert } from "../popup/ModelAlert";
import LogoutAlert from "../auth/LogoutAlert";
import { BASE_URL } from "../../appconstants/EcommerceUrl"

export let AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    let [isLogin, setIsLogin] = useState(null);
    let navigate = useNavigate();
    let refreshCancelSource = useRef(axios.CancelToken.source());
    let refreshTokenCalled = useRef(false); // Ref to track if refresh token function has been called
    let [isLoading, setIsLoading] = useState(false);
    let [isOtp, setIsOtp] = useState(false);
    let [progress, setProgress] = useState(0);
    let [openModal, setOpenModal] = useState(false);
    let [modelMessage, setModelMessage] = useState("")
    let [previousLocation, setPreviousLocation] = useState("");
    let [openLogoutAlertModal, setOpenLogoutAlertModal] = useState(false);

    let login = (userData) => {
        setIsLogin(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    let logout = () => {
        setIsLogin(null);
        localStorage.removeItem("userData");
        localStorage.removeItem("atExpiredTime");
        localStorage.removeItem("rtExpiredTime");
    };

    let otpVerify = (otpGen) => {
        setIsOtp(otpGen)
    }

    let handleRefreshToken = async () => {
        try {
            setIsLoading(true)
            refreshCancelSource.current.cancel('Cancelling previous refresh request');
            refreshCancelSource.current = axios.CancelToken.source();
            let response = await axios.post(`${BASE_URL}refreshLogin`, "", {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
                cancelToken: refreshCancelSource.current.token,
            });
            if (response.status === 200) {
                let userData = response.data.data;
                let nowDate = new Date().getTime();
                localStorage.setItem("atExpiredTime", new Date(nowDate + (userData.accessExpiration * 1000)).toString());
                login(userData);
                console.log("RT regenerated successfully done");
                refreshTokenCalled.current = false; // Reset the ref after successful refresh
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                logout();
                navigate("/login-form");
            }
            refreshTokenCalled.current = false; // Reset the ref in case of error
        }finally{
            setIsLoading(false)
        }
    };

    useEffect(() => {
        let currentTime = new Date();
        let atExpiredTime = new Date(localStorage.getItem("atExpiredTime"));
        let rtExpiredTime = new Date(localStorage.getItem("rtExpiredTime"));
        let userData = localStorage.getItem("userData");
        if (userData)
            userData = JSON.parse(userData);

        if (userData) {
            if (atExpiredTime > currentTime && currentTime < rtExpiredTime) {
                if (!isLogin) {
                    setIsLogin(userData);
                }
            } else if (atExpiredTime < currentTime && currentTime < rtExpiredTime) {
                if (!refreshTokenCalled.current) {
                    refreshTokenCalled.current = true;
                    handleRefreshToken();
                }
            } else {
                logout();
                navigate("/login-form");
            }
        }
    }, [isLogin, navigate]);

    return (
        <AuthContext.Provider value={{
            isLogin,
            login,
            logout,
            isOtp,
            otpVerify,
            progress,
            setProgress,
            isLoading,
            setIsLoading,
            setModelMessage,
            setPreviousLocation,
            setOpenModal,
            openLogoutAlertModal,
            setOpenLogoutAlertModal
        }}>
            <>
                {isLoading && < Loading />}

                <ModelAlert openModal={openModal}
                    setOpenModal={setOpenModal}
                    modelMessage={modelMessage}
                    previousLocation={previousLocation} />

                {children}

                <LogoutAlert openLogoutAlertModal={openLogoutAlertModal}
                    setOpenLogoutAlertModal={setOpenLogoutAlertModal} />
            </>
        </AuthContext.Provider>
    );
}

export default AuthProvider;
