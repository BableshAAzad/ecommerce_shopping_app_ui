import { useContext, useState } from 'react'
import { Button, Modal } from "flowbite-react";
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../loader/Loading';
import axios from 'axios';
import { AuthContext } from '../authprovider/AuthProvider';

function OptVerification() {
    const [openModal, setOpenModal] = useState(true);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isLoding, setIsLoding] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const { otpVerify } = useContext(AuthContext);


    let formData = location.state;
    // console.log(formData)

    // useEffect(() => {
    //     console.log(otp.join(''))
    // }, [otp])

    const submitOtp = async () => {
        try {
            setIsLoding(true)
            console.log({ email: formData.email, opt: otp.join('') })
            const response = await axios.post("http://localhost:8080/api/v1/users/otpVerification",
                { email: formData.email, otp: otp.join('') },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Includes cookies with the request
                });

            setOtp(["", "", "", "", "", ""])
            setIsLoding(false)

            if (response.status === 201) {
                otpVerify(true)
                navigate("/user-otp-verified-page", { state: response.data })
            }
            console.log(response)
        } catch (error) {
            otpVerify(false)
            console.log(error)
            setIsLoding(false)
        }
    }


    return (
        <>
            {isLoding ? <Loading /> : ""}
            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
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
                            <Button color="success" onClick={() => {
                                setOpenModal(false),
                                    submitOtp()
                            }}>
                                {"Verify Email"}
                            </Button>
                            <Button color="blue" onClick={() => setOpenModal(true)}>
                                Resend OTP
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OptVerification
