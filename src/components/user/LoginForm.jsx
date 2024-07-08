import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from 'axios';

function LoginForm() {
    const [formdata, setFormdata] = useState({ email: "", password: "" });

    const updateData = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const submitFormData = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:8080/api/v1/login", formdata);
            setFormdata({ email: "", password: "" })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-center m-4'>
            <form className="flex max-w-md flex-col gap-4 p-8 bg-blue-300  dark:bg-slate-800 rounded" onSubmit={submitFormData}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" onChange={updateData} name="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" name="password" placeholder='Abc@123xyz' onChange={updateData} type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default LoginForm
