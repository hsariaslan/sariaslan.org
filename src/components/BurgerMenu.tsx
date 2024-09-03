import React, {useState} from 'react';
import {Link} from "react-router-dom";

interface IMenuItemsProps {
    link: string;
    text: string;
}

interface BurgerMenuProps {
    menuItems: IMenuItemsProps[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({menuItems}) => {
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
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="p-4 flex flex-col gap-y-4">
                    {menuItems.map((item, index) => (
                        <div className="block">
                            <Link to={item.link} key={index} className="block text-gray-700 link-effect">
                                {item.text}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;