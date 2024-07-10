import { useState } from 'react';
import { faBoxOpen, faCartShopping, faEllipsisVertical, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, TextInput } from "flowbite-react";
import DarkModeOption from "../darkmode/DarkModeOption";
import "./Header.css"
import UserData from './UserData';
import logo from "../../images/logo.png"

function Header() {
    let [isSearchVisible, setIsSearchVisible] = useState(false);

    let handleSearchIconClick = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    return (
        <>
            <Navbar fluid className='bg-slate-100'>
                <Navbar.Brand href="/" className='navlogo'>
                    {/* <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" alt="Flipkart" /> */}
                    <img src={logo} alt="EcommerceShoppingApp"  width="47" height="40" title="EcommerceShoppingApp"/>
                    <span className="self-center sitename dark:text-white text-xl font-semibold break-words md:whitespace-normal">Ecommerce Shopping App</span>
                </Navbar.Brand>
                <div className="flex md:order-1 md:w-1/4">
                    <Navbar.Toggle />
                    <button onClick={handleSearchIconClick} className="md:hidden p-2 dark:text-white">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div className={`w-full ${isSearchVisible ? 'block' : 'hidden'} md:block`}>
                        <TextInput className="w-full" placeholder="Search Products" />
                    </div>
                </div>
                <Navbar.Collapse className="md:order-2">
                    <UserData />
                    <Navbar.Link to="#" className='text-base'><FontAwesomeIcon icon={faCartShopping} /> Cart</Navbar.Link>
                    <Navbar.Link to="#" className='text-base'><FontAwesomeIcon icon={faBoxOpen} /> Become a Seller</Navbar.Link>
                    <Navbar.Link to="#" className='text-base'><DarkModeOption /></Navbar.Link>
                    <Navbar.Link to="#" className='text-base'><FontAwesomeIcon icon={faEllipsisVertical} /></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
