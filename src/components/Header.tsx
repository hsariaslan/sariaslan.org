import React from "react";
import {Link} from "react-router-dom";
import {AiFillExperiment} from "react-icons/ai";
import {FaFileCode, FaGraduationCap, FaHome, FaInfoCircle, FaPhone, FaStar} from "react-icons/fa";

const confettiColors: string[] = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#45B8AC'];

const Header = () => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const item = e.currentTarget;
        item.classList.add('show-icon');
        item.classList.remove('hide-icon');
        createConfetti(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const item = e.currentTarget;
        const icon = item.querySelector('.menu-item-icon');

        item.classList.add('hide-icon');

        if (icon) {
            icon.addEventListener('animationend', () => {
                if (item.classList.contains('hide-icon')) {
                    item.classList.remove('show-icon');
                    item.classList.remove('hide-icon');
                }
            }, {once: true});
        }
    };

    const createConfetti = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const item = e.currentTarget;
        const icon = item.querySelector('.menu-item-icon') as HTMLElement;
        const iconRect = icon.getBoundingClientRect();
        const confettiCount = 10;
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'absolute';
        confettiContainer.style.left = `${iconRect.left - item.getBoundingClientRect().left}px`;
        confettiContainer.style.top = `${iconRect.top - item.getBoundingClientRect().top}px`;
        confettiContainer.style.width = `${iconRect.width}px`;
        confettiContainer.style.height = `${iconRect.height}px`;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            confetti.style.setProperty('--x-distance', `${Math.random() * 200 - 100}px`);
            confetti.style.setProperty('--y-distance', `${Math.random() * 100 - 50}px`);
            confetti.style.setProperty('--rotation', `${Math.random() * 360}deg`);

            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];

            confettiContainer.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }

        item.appendChild(confettiContainer);

        setTimeout(() => {
            confettiContainer.remove();
        }, 1000);
    };

    return (
        <header className="py-6 px-10 flex justify-between bg-white">
            <Link to="/#home">
                <div className="logo-container">
                    <img src="src/assets/images/logo.png" alt="hakan-sariaslan-logo" width="250"/>
                    <div className="glow-effect"></div>
                </div>
            </Link>
            <nav className="flex items-center justify-between gap-x-6 text-2xl">
                <Link to="/#home" className="menu-item menu-item-home"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <FaHome className="menu-item-icon menu-item-icon-home" size={20}/>
                    </div>
                    <span>Home</span>
                </Link>
                <Link to="/#about" className="menu-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <FaInfoCircle className="menu-item-icon menu-item-about" size={20}/>
                    </div>
                    <span>About</span>
                </Link>
                <Link to="/#skills" className="menu-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <FaStar className="menu-item-icon menu-item-skills" size={20}/>
                    </div>
                    <span>Skills</span>
                </Link>
                <Link to="/#experiences" className="menu-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <AiFillExperiment className="menu-item-icon menu-item-experiences" size={20}/>
                    </div>
                    <span>Experiences</span>
                </Link>
                <Link to="/#education" className="menu-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <FaGraduationCap className="menu-item-icon menu-item-education" size={20}/>
                    </div>
                    <span>Education</span>
                </Link>
                <Link to="/#projects" className="menu-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <FaFileCode className="menu-item-icon menu-item-projects" size={20}/>
                    </div>
                    <span>Projects</span>
                </Link>
                <Link to="/#contact" className="menu-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                    <div className="w-5 h-5">
                        <FaPhone className="menu-item-icon menu-item-contact" size={20}/>
                    </div>
                    <span>Contact</span>
                </Link>
            </nav>
        </header>
    );
}

export default Header;