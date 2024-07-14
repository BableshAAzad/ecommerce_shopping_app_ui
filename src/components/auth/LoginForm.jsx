import { useContext, useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../loader/Loading';
import { AuthContext } from '../authprovider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import PopupWarn from '../popup/PopupWarn';

function LoginForm() {
    const [formdata, setFormdata] = useState({ username: "", password: "" });
    const [isLoding, setIsLoding] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState({});
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);

    const updateData = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const submitFormData = async (e) => {
        // const submitFormData = (e) => {

        setIsLoding(true)
        e.preventDefault();
        console.log(formdata)
        try {
            const response = await axios.post("http://localhost:8080/api/v1/login",
                formdata,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                }
            );
            // let response = {
            //     status: 200,
            //     data: {
            //         data: {
            //             userId: 101,
            //             username: "aazadbablesh",
            //             accessExpiration: 3600,
            //             refreshExpiration: 1296000
            //         }
            //     }
            // }
            setFormdata({ username: "", password: "" })
            // console.log(response.data)
            if (response.status === 200) {
                let userData = response.data.data;
                console.log(userData)
                let nowDate = new Date().getTime()
                localStorage.setItem("userData", JSON.stringify(userData))
                localStorage.setItem("atExpiredTime", new Date(nowDate + (userData.accessExpiration * 1000)).toString());
                localStorage.setItem("rtExpiredTime", new Date(nowDate + (userData.refreshExpiration * 1000)).toString());
                login(userData);
                navigate("/")
            }
            setIsLoding(false)
        } catch (error) {
            console.log(error)
            console.log(error.response.data);
            let errorData = error.response.data;
            if (errorData.status === 401 || errorData.status === 400) {
                setPopupOpen(false);
                setTimeout(() => {
                    setPopupData(errorData);
                    setPopupOpen(true);
                }, 0);
            }
            setIsLoding(false)
        }
    }

    return (
        <section className='h-screen'>
            {isLoding ? <Loading /> : ""}

            {popupOpen && <PopupWarn isOpen={popupOpen}
                setIsOpen={setPopupOpen} clr="warning" url="/customer-registration"
                head={popupData.message} msg={popupData.rootCause.password || popupData.rootCause} />}

            <h1 className='dark:text-white text-center text-2xl font-bold mt-4'>User Login Page</h1>
            <div className='flex justify-center m-4 '>
                <form className="flex max-w-md flex-col gap-4 p-8 bg-blue-300  dark:bg-slate-800 rounded" onSubmit={submitFormData}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="usernamelogin" value="Your Username" />
                        </div>
                        <TextInput id="usernamelogin" type="text" value={formdata.username} onChange={updateData} name="username" placeholder="abcd" autoComplete='true' required />
                    </div>
                    <div>
                        <div className="mb-2 flex justify-between">
                            <Label htmlFor="passwordlogin" value="Password" />
                            <button type='button' className="dark:text-slate-400 text-xs"
                                onClick={handleShowPassword}>{!showPassword ?
                                    <><FontAwesomeIcon icon={faEye} className='mr-1' />Show Password</> :
                                    <><FontAwesomeIcon icon={faEyeSlash} className='mr-1' />Hide Password</>}
                            </button>
                        </div>
                        <TextInput id="passwordlogin" type={!showPassword ? "password" : "text"} value={formdata.password} onChange={updateData} name="password" placeholder='Abc@123xyz' autoComplete='true' required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </section>
    )
}

export default LoginForm
// test commit
