import React from "react";
import {Link} from "react-router-dom";
import {AiFillExperiment} from "react-icons/ai";
import {FaFileCode, FaGraduationCap, FaHome, FaInfoCircle, FaPhone} from "react-icons/fa";
import {HiPencilSquare} from "react-icons/hi2";
import BurgerMenu from "@/components/BurgerMenu";
import ConfettiMenu from "@/components/ConfettiMenu";

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
        link: '/#experiences',
        text: 'Experiences',
        icon: <AiFillExperiment className="menu-item-icon" size={20}/>,
    },
    {
        link: '/#education',
        text: 'Education',
        icon: <FaGraduationCap className="menu-item-icon" size={20}/>,
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