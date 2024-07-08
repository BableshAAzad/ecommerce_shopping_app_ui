import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../loader/Loading';


function Registration() {
    // const [formdata, setFormdata] = useState({ email: "", password: "", password1: "", termAndCondition: "" });
    const [formdata, setFormdata] = useState({ email: "", password: "" });
    // const [popupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate("")
    const [isLoding, setIsLoding] = useState(false);

    const updateData = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const submitFormData = async (e) => {
        e.preventDefault();
        try {
            setIsLoding(true)
            const response = await axios.post("http://localhost:8080/api/v1/customers/register",
                formdata,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                });
            setFormdata({ email: "", password: "", password1: "", termAndCondition: "" })
            // const response = { status: 201 }
            setFormdata({ email: "", password: "" })
            setIsLoding(false)
            if (response.status === 202) {
                navigate("/userDashBoard")
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {isLoding ? <Loading /> : ""}
            <div className='flex justify-center m-4'>
                <form className="flex max-w-md flex-col gap-4 p-8 bg-blue-300  dark:bg-slate-800 rounded" onSubmit={submitFormData}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" type="email" name="email" onChange={updateData} placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput id="password2" type="password" name="password" onChange={updateData} placeholder='Abc@123xyz' required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput id="repeat-password" type="password" name="password1" placeholder='Abc@123xyz' required shadow />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" name="termAndCondition" />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit">Register new account</Button>
                </form>
            </div>
        </>
    )
}

export default Registration
