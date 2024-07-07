import React, { useEffect, useRef, useState } from 'react';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBoxOpen, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, TextInput } from "flowbite-react";
import DarkModeOption from "./DarkModeOption";

function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleSearchIconClick = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsNavbarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart" alt="Flipkart"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ecommerce Shopping App</span>
                </Navbar.Brand>
                <div className="flex md:order-1 md:w-1/4">
                    <Navbar.Toggle />
                    <button onClick={handleSearchIconClick} className="md:hidden p-2">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div className={`w-full ${isSearchVisible ? 'block' : 'hidden'} md:block`}>
                        <TextInput className="w-full" placeholder="Search Products" />
                    </div>
                </div>
                <Navbar.Collapse className="md:order-2">
                    <Navbar.Link href="#"><FontAwesomeIcon icon={faUser} /> Login</Navbar.Link>
                    <Navbar.Link href="#"><FontAwesomeIcon icon={faCartShopping} /> Cart</Navbar.Link>
                    <Navbar.Link href="#"><FontAwesomeIcon icon={faBoxOpen} /> Become a Seller</Navbar.Link>
                    <Navbar.Link href="#"><DarkModeOption/></Navbar.Link>
                    <Navbar.Link href="#">...</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
