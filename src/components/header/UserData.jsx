import { useContext } from 'react'
import { Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoins, faGift, faHeart, faMoneyBills, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import "./UserData.css"
import AppNavLink from './AppNavLink';
import {NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

function UserData() {
    const navigate = useNavigate();
    const { isLogin, logout } = useContext(AuthContext);

    let loginText = (<><FontAwesomeIcon icon={faUser} />&nbsp;Login</>);
    let username = ""
    if (isLogin) {
        username = <><FontAwesomeIcon icon={faUser} />&nbsp; {isLogin.username} </>
    }

    const logoutUser = () => {
        logout();
        navigate("/login")
    }

    return (
        <>
            <div className="navbtn text-base dark:text-slate-400 hover:dark:text-slate-100">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={!isLogin ? loginText : username} >

                    {!isLogin ? <Dropdown.Item>
                        <div className="flex items-center justify-between">
                            <span className="text-sm mr-2">New Customer?</span>
                            <NavLink to="/customerRegistration">
                                <Navbar.Link className="text-base font-medium text-blue-600 dark:text-blue-500" active={location.pathname === "/customerRegistration"} as="div">
                                    Sing Up
                                </Navbar.Link>
                            </NavLink>
                        </div>
                    </Dropdown.Item> : <></>}

                    <AppNavLink path={!isLogin ? "/loginForm" : "/myProfile"} icon={<FontAwesomeIcon icon={faUser} />} text="My Profile" />

                    {!isLogin ? <></> : <AppNavLink path="/superCoinZone" icon={<FontAwesomeIcon icon={faCoins} />} text="Super Coin Zone" />}

                    <AppNavLink path="/orders" icon={<FontAwesomeIcon icon={faCartShopping} />} text="Orders" />

                    <AppNavLink path="/wishlist" icon={<FontAwesomeIcon icon={faHeart} />} text="Wishlist" />

                    <AppNavLink path="/rewards" icon={<FontAwesomeIcon icon={faGift} />} text="Rewards" />

                    {!isLogin ?
                        <AppNavLink path="/giftCards" icon={<FontAwesomeIcon icon={faMoneyBills} />} text="Gift Cards" />
                        : <AppNavLink path="/logout" icon={<FontAwesomeIcon icon={faRightToBracket} />} text="Sign out" onClick={logoutUser} />}

                </Dropdown>
            </div>
        </>
    )
}

export default UserData