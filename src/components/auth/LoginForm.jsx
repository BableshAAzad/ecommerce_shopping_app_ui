import { useContext, useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../loader/Loading';
import { AuthContext } from '../authprovider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import PopupWarn from '../popup/PopupWarn';
import "./Registration.css";
import { HiUser, HiKey } from 'react-icons/hi';

function LoginForm() {
    const [formdata, setFormdata] = useState({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState({});
    const [passwordClass, setPasswordClass] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const updateData = ({ target: { name, value } }) => {
        setFormdata({ ...formdata, [name]: value });
        if (name === 'password') {
            if (value === "") {
                setPasswordClass("");
                setIsSubmitDisabled(true);
            } else if (value.length < 8) {
                setPasswordClass("warningD");
                setIsSubmitDisabled(true);
            } else {
                setPasswordClass("successD");
                setIsSubmitDisabled(false);
            }
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const submitFormData = async (e) => {
        setIsLoading(true)
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
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
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
        }
    }

    return (
        <section className='h-screen'>
            {isLoading ? <Loading /> : ""}

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
                        <TextInput id="usernamelogin" type="text" value={formdata.username} onChange={updateData}
                            name="username" placeholder="abcd012" icon={HiUser} autoComplete='true' required />
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
                        <TextInput id="passwordlogin" type={!showPassword ? "password" : "text"}
                            className={passwordClass} value={formdata.password} onChange={updateData}
                            name="password" placeholder='Abc@123xyz' icon={HiKey} autoComplete='true' required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit" disabled={isSubmitDisabled}>Submit</Button>
                    <span className='dark:text-red-400 text-red-800 text-xs'>
                        Note : If submit button is still disabled then re-enter details.
                    </span>
                </form>
            </div>
        </section>
    )
}

export default LoginForm
// test commit
