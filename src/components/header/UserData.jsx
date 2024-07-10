import { useState } from 'react'
import { Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGift, faHeart, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import "./UserData.css"
import AppNavLink from './AppNavLink';

function UserData() {
    const [isLogin, setIsLogin] = useState(false);
    let login = (<><FontAwesomeIcon icon={faUser} />&nbsp;Login</>);
    let username = "Bablesh"

    return (
        <>
            <div className="navbtn dark:text-slate-400 hover:dark:text-slate-100">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={!isLogin ? login : username}    >
                    <Dropdown.Header>
                        <span className="block text-sm">Bablesh AAzad</span>
                        <span className="block truncate text-sm font-medium">aazadbablesh@gmail.com</span>
                    </Dropdown.Header>

                    <AppNavLink path="/customerRegistration" icon={<FontAwesomeIcon icon={faUser} />} text="Sing Up" />

                    <AppNavLink path="/loginForm" icon={<FontAwesomeIcon icon={faUser} />} text="Login" />

                    <AppNavLink path="/optVerification" icon={<FontAwesomeIcon icon={faCartShopping} />} text="Orders" />

                    <AppNavLink path="/wishlist" icon={<FontAwesomeIcon icon={faHeart} />} text="Wishlist" />

                    <AppNavLink path="/rewards" icon={<FontAwesomeIcon icon={faGift} />} text="Rewards" />

                    <AppNavLink path="/logout" icon={<FontAwesomeIcon icon={faRightToBracket} />} text="Sign out" />

                </Dropdown>
            </div>
        </>
    )
}

export default UserData
