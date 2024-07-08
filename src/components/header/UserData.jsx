import React, { useState } from 'react'
import { Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGift, faHeart, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import "./UserData.css"

function UserData() {
    const [isLogin, setIsLogin] = useState(false);
    let login = (<><FontAwesomeIcon icon={faUser} />&nbsp;Login</>);
    let username = "Bablesh"
    return (
        <>
            <div className="loginbtn dark:text-slate-400 hover:dark:text-slate-100">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={!isLogin ? login : username}    >
                    <Dropdown.Header>
                        <span className="block text-sm">Bablesh AAzad</span>
                        <span className="block truncate text-sm font-medium">aazadbablesh@gmail.com</span>
                    </Dropdown.Header>

                    <Dropdown.Item>
                        <Navbar.Link href='/registration'>
                            <FontAwesomeIcon icon={faUser} /> Sing Up
                        </Navbar.Link >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Navbar.Link href='/loginForm'>
                            <FontAwesomeIcon icon={faUser} /> Login
                        </Navbar.Link >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Navbar.Link to='#'>
                            <FontAwesomeIcon icon={faCartShopping} /> Orders
                        </Navbar.Link >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Navbar.Link to='#'>
                            <FontAwesomeIcon icon={faHeart} /> Wishlist
                        </Navbar.Link >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Navbar.Link to='#'>
                            <FontAwesomeIcon icon={faGift} /> Rewards
                        </Navbar.Link >
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Navbar.Link to='#'>
                            <FontAwesomeIcon icon={faRightToBracket} /> Sign out
                        </Navbar.Link >
                    </Dropdown.Item>

                </Dropdown>
                {/* <Navbar.Toggle /> */}
            </div>
        </>
    )
}

export default UserData
