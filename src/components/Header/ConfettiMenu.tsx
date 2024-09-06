import {Link} from "react-router-dom";
import React from "react";

interface IMenuItemsProps {
    link: string;
    text: string;
    icon: unknown;
}

interface ConfettiMenuProps {
    menuItems: IMenuItemsProps[];
}

const confettiColors: string[] = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#45B8AC'];

const ConfettiMenu: React.FC<ConfettiMenuProps> = ({menuItems}) => {
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
        <nav className="hidden xl:flex items-center justify-between gap-x-4 2xl:gap-x-6 text-2xl">
            {menuItems.map((menuItem, index) => {
                return (
                    <Link to={menuItem.link} key={index} className="menu-item" onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}>
                        <div className="w-5 h-5">
                            {menuItem.icon}
                        </div>
                        <span>{menuItem.text}</span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default ConfettiMenu;