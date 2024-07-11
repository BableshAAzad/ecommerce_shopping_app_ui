import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Loading from "../loader/Loading";
import logoutPic from "../../images/logout.png"

function LogoutComp() {
    const navigate = useNavigate();
    const [isLoding, setIsLoding] = useState(false);
    const { login } = useContext(AuthContext);


    const handleLogout = async () => {
        setIsLoding(true)
        try {
            const response = await axios.post("http://localhost:8080/api/v1/logout", "",
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                }
            );
            // console.log(response.data)
            if (response.status === 200) {
                let userData = response.data.data;
                console.log(userData)
                localStorage.setItem("userData", "")
                localStorage.setItem("atExpiredTime", "");
                localStorage.setItem("rtExpiredTime", "");
                login(null)
                navigate("/login-form")
            }
            setIsLoding(true)

        } catch (error) {
            console.log(error)
            if (error.response.data.status === 401) {
                console.log(error.response.data)
            }
            setIsLoding(true)
        }
    }
    return (
        <>
            {isLoding ? <Loading /> : ""}
            <div className="h-screen ">
                <img onLoad={handleLogout} className="ml-auto mr-auto h-3/5"  src={logoutPic} alt="walk" />
            </div>
        </>
    )
}

export default LogoutComp
