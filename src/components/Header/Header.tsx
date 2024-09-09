import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import { FaTimeline } from "react-icons/fa6";
import {FaFileCode, FaHome, FaInfoCircle, FaPhone} from "react-icons/fa";
import {HiPencilSquare} from "react-icons/hi2";
import BurgerMenu from "@/components/Header/BurgerMenu";
import ConfettiMenu from "@/components/Header/ConfettiMenu";

interface IMenuItemsProps {
    link: string;
    text: string;
    icon: unknown
}

const menuItems: IMenuItemsProps[] = [
    {
        link: '/#home',
        text: 'Home',
        icon: <FaHome className="menu-item-icon" size={20}/>,
    },
    {
        link: '/#about',
        text: 'About',
        icon: <FaInfoCircle className="menu-item-icon" size={20}/>,
    },
    {
        link: '/#timeline',
        text: 'Timeline',
        icon: <FaTimeline className="menu-item-icon" size={20}/>,
    },
    {
        link: '/#projects',
        text: 'Projects',
        icon: <FaFileCode className="menu-item-icon" size={20}/>,
    },
    {
        link: '/#blog',
        text: 'Blog',
        icon: <HiPencilSquare className="menu-item-icon" size={20}/>,
    },
    {
        link: '/#contact',
        text: 'Contact',
        icon: <FaPhone className="menu-item-icon" size={20}/>,
    },
];

const Header = () => {
    return (
        <header className="py-6 px-1 sm:px-10 flex justify-between bg-white">
            <Link to="/#home">
                <div className="logo-container">
                    <img src="src/assets/images/logo.png" alt="hakan-sariaslan-logo" width="250"/>
                    <div className="glow-effect"></div>
                </div>
            </Link>
            <ConfettiMenu menuItems={menuItems}/>
            <BurgerMenu menuItems={menuItems}/>
        </header>
    );
}

export default Header;