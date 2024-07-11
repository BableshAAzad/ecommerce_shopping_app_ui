// import shop from "../../images/shop.jpg"
// import { jwtDecode } from "jwt-decode";

// import { useContext } from "react";
// import { AuthContext } from "../authprovider/AuthProvider";

function HomePage() {
    // const { isLogin, login } = useContext(AuthContext);

    // // let currentTime = new Date();
    // let atExpiredTime = localStorage.getItem("atExpiredTime");
    // let rtExpiredTime = localStorage.getItem("rtExpiredTime");

    // let userData = localStorage.getItem("userData");
    // userData = JSON.parse(userData);

    // console.log(atExpiredTime)
    // console.log(rtExpiredTime)
    // console.log(userData)
    // console.log(isLogin)

    // if (new Date(atExpiredTime) > new Date()) {
    //     login(userData)
    // }

    return (
        <div className="h-screen">
            <br /><br />
            {/* <img src={shop} alt="shop" /> */}
            <h1 className="text-center text-2xl dark:text-white">Welcome To Ecommerce Shopping Application</h1>

        </div>
    )
}
export default HomePage
