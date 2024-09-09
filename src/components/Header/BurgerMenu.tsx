import React, {useEffect, useState} from 'react';
import {HashLink} from 'react-router-hash-link';

interface IMenuItemsProps {
    link: string;
    text: string;
}

interface BurgerMenuProps {
    menuItems: IMenuItemsProps[];
    onLinkClick: (href: string) => void;
    isVisible: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({menuItems, onLinkClick, isVisible}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [iconTransform, setIconTransform] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen(false);
            setTimeout(() => {
                setIconTransform(false);
            }, 10);
        } else {
            setIconTransform(true);
            setTimeout(() => {
                setIsOpen(true);
            }, 10);
        }
    };

    const handleScroll = () => {
        setIsOpen(false);
        setIconTransform(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className="xl:hidden fixed z-50 right-10">
            <button
                onClick={toggleMenu}
                className="burger-button focus:outline-none relative z-50 px-4 py-[19px] bg-primary rounded-full hover:bg-darkPrimary transition-all"
                aria-label="Toggle Menu"
            >
                <div className="burger-icon-wrapper flex flex-col justify-center items-center space-y-2">
                    <span className={`burger-icon ${iconTransform ? 'open' : ''}`}/>
                    <span className={`burger-icon ${iconTransform ? 'open' : ''}`}/>
                    <span className={`burger-icon ${iconTransform ? 'open' : ''}`}/>
                </div>
            </button>

            <div
                className={`burger-menu fixed top-0 right-0 h-screen pt-10 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } ${
                    isVisible ? 'translate-y-0' : 'translate-y-32'
                }`}
            >
                <nav className="p-4 flex flex-col gap-y-6">
                    {menuItems.map((item, index) => (
                        <div className="block" key={index}>
                            <HashLink to={item.link} className="block text-gray-700 link-effect" onClick={() => onLinkClick(item.link)}>
                                {item.text}
                            </HashLink>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;