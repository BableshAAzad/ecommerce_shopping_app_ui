import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider"
import { Button } from "flowbite-react";
import user from "../../images/user.png"
import LogoutOperation from "./LogoutOperation";

function ProfilePage() {
    let { isLogin } = useContext(AuthContext);
    let [openModal, setOpenModal] = useState({ openStatus: false, val: "" });

    const handleLogout = (val) => {
        setOpenModal({ openStatus: true, val });
    };

    return (
        <>
            {openModal.openStatus && <LogoutOperation modelData={openModal} handleModel={setOpenModal} />}
            <div className="">
                <section className="max-w-lg ml-auto mr-auto flex justify-between">
                    <div className="p-2">
                        <img src={user} alt="user" />
                        <div className="">

                            <Button onClick={() => handleLogout("logoutFromAllDevices")}
                                className="m-2 ml-auto mr-auto" outline gradientDuoTone="redToYellow">
                                Logout from All Devices
                            </Button>

                            <Button onClick={() => handleLogout("logoutFromOtherDevices")}
                                className="m-2 ml-auto mr-auto" outline gradientDuoTone="purpleToBlue">
                                Logout From Other Devices
                            </Button>

                        </div>
                    </div>
                    <div className="">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                            Username : <span className="dark:text-slate-200">{isLogin.username}</span>
                        </h5>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                            Role : <span className="dark:text-slate-200">{isLogin.userRole}</span>
                        </h5>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                            UserId : <span className="dark:text-slate-200">{isLogin.userId}</span>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, consequuntur?
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProfilePage
