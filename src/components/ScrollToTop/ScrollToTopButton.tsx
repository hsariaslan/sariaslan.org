import React, {useEffect, useState} from 'react';
import {IoIosArrowUp} from "react-icons/io";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-2 rounded-full bg-primary text-white transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <IoIosArrowUp/>
        </button>
    );
};

export default ScrollToTopButton;
