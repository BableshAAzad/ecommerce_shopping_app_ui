import React, { useEffect, useState } from 'react'
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import OtpInput from 'react-otp-input';

function UserDashBoard() {
    const [toggle, setToggle] = useState(true)
    const [openModal, setOpenModal] = useState(true);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    let otpPrint = () => {
        let temp = otp.join('')
        console.log(temp)
    }

    useEffect(() => {
        console.log(otp.join(''))
    }, [otp])

    // setToggle(true)
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h2 className="text-3xl font-medium text-gray-900 dark:text-white">Email verification</h2>

                        <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                            We have sent a code to your email ba**@gmail.com
                        </h3>
                        <section className='mt-4'>
                            {
                                <OtpInput
                                    value={otp.join('')}
                                    onChange={(value) => setOtp(value.split(''))}
                                    isInputNum
                                    inputStyle={{
                                        width: '3rem',
                                        height: '3rem',
                                        margin: '0 0.2rem',
                                        fontSize: '1.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid #ced4da'
                                    }}
                                    numInputs={6}
                                    renderInput={(inputProps, index) => <input {...inputProps} key={index} />}
                                />
                            }
                        </section>
                        <div className="flex justify-center gap-4 m-3">
                            <Button color="success" onClick={() => setOpenModal(false)}>
                                {"Verify Email"}
                            </Button>
                            <Button color="blue" onClick={() => setOpenModal(false)}>
                                Resend OTP
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UserDashBoard
