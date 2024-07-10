import { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../loader/Loading';

function LoginForm() {
    const [formdata, setFormdata] = useState({ username: "", password: "" });
    const navigate = useNavigate()
    const [isLoding, setIsLoding] = useState(false);

    const updateData = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    
    const submitFormData = async (e) => {
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
            setFormdata({ username: "", password: "" })
            console.log(response)
            setIsLoding(false)
            if (response.status === '200') {
                console.log("login successfull")
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='h-screen'>
            {isLoding ? <Loading /> : ""}
            <h1 className='dark:text-white text-center text-2xl font-bold mt-4'>User Login Page</h1>
            <div className='flex justify-center m-4 '>
                <form className="flex max-w-md flex-col gap-4 p-8 bg-blue-300  dark:bg-slate-800 rounded" onSubmit={submitFormData}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="usernamelogin" value="Your Username" />
                        </div>
                        <TextInput id="usernamelogin" type="text" value={formdata.username} onChange={updateData} name="username" placeholder="abcd" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="passwordlogin" value="Your password" />
                        </div>
                        <TextInput id="passwordlogin" type="password" value={formdata.password} onChange={updateData} name="password" placeholder='Abc@123xyz' required />
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
