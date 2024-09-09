import React, {useState, useEffect} from "react";
import "./Header.css";
import {HashLink} from 'react-router-hash-link';
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
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isLinkClick, setIsLinkClick] = useState(false);

    const handleScroll = () => {
        if (!isLinkClick) {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        }

        setLastScrollY(window.scrollY);
    };

    const handleLinkClick = (href: string) => {
        if (href === '/#home') {
            setIsVisible(true);
        } else {
            setIsLinkClick(true);
            setIsVisible(false);
            setTimeout(() => {
                setIsLinkClick(false);
            }, 1000);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isLinkClick]);

    return (
        <header className={`py-6 px-1 sm:px-10 flex justify-between fixed z-50 shadow top-0 left-0 w-full h-32 bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <HashLink to="/#home">
                <div className="logo-container">
                    <img src="src/assets/images/logo.png" alt="hakan-sariaslan-logo" width="250"/>
                    <div className="glow-effect"></div>
                </div>
            </HashLink>
            <ConfettiMenu menuItems={menuItems} onLinkClick={handleLinkClick}/>
            <BurgerMenu menuItems={menuItems} onLinkClick={handleLinkClick} isVisible={isVisible}/>
        </header>
    );
}

export default Header;