import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselItem {
    image: string;
    alt: string;
    description: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        const touch = event.touches[0];
        setStartX(touch.clientX);
        setIsDragging(true);
        setCurrentTranslate(currentTranslate);
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        if (!isDragging) return;
        const touch = event.touches[0];
        const diff = touch.clientX - startX;
        setCurrentTranslate(prevTranslate + diff);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -50) {
            handleNext();
        } else if (movedBy > 50) {
            handlePrev();
        } else {
            setCurrentTranslate(prevTranslate);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        setPrevTranslate(-currentIndex * 100);
        setCurrentTranslate(-currentIndex * 100);
    }, [currentIndex]);

    return (
        <div className="relative w-full mx-auto"
             ref={carouselRef}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full flex flex-col items-center justify-center"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full object-cover"
                            />
                            <p className="text-center mt-4 text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handlePrev}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            >
                <FaChevronLeft/>
            </button>

            <button
                onClick={handleNext}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            >
                <FaChevronRight/>
            </button>

            <div className="flex justify-center mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                            currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
