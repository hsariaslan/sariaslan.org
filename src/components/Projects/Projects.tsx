import React from "react";
import {motion} from "framer-motion"
import Carousel from "@/components/Carousel/Carousel";

function Projects() {
    const carouselItems = [
        {
            image: 'src/assets/images/projects/pos-application/pos-application-login.png',
            alt: 'pos-application-login',
            description: 'Login',
        },
        {
            image: 'src/assets/images/projects/pos-application/pos-application-dashboard.png',
            alt: 'pos-application-dashboard',
            description: 'Dashboard',
        },
        {
            image: 'src/assets/images/projects/pos-application/pos-application-card.png',
            alt: 'pos-application-card',
            description: 'Card',
        },
        {
            image: 'src/assets/images/projects/pos-application/pos-application-invoices.png',
            alt: 'pos-application-invoices',
            description: 'Invoices',
        },
    ];

    return (
        <div className="bg-white py-20 mt-32">
            <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}}
                        transition={{delay: 0.2}} id="projects" className="sm:pl-10 px-4 mx-auto 2xl:w-2/3 w-full">
                <h1 className="text-4xl font-light">MY PROJECTS</h1>
                <div className="lg:flex lg:gap-x-10 mt-10">
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-light">POS APPLICATION</h3>
                        <p className="font-light text-stone-700">10/2023 - 11/2023</p>
                        <p className="text-justify mt-4 font-light text-stone-700">
                            Simple pos application build with React, Redux, TailwindCSS, Node, Express and MongoDB.
                        </p>
                        <p className="text-justify mt-4 font-light text-stone-700">
                            <a href="https://github.com/hsariaslan/pos-application" target="_blank"
                               className="text-blue-700 hover:text-primary">
                                Source code
                            </a>
                        </p>
                        <p className="text-justify my-4 font-light text-stone-700">
                            <a href="https://sariaslan.org/projects/pos" target="_blank"
                               className="text-blue-700 hover:text-primary">
                                Live Demo
                            </a>
                        </p>
                    </div>
                    <div className="lg:w-1/2 mx-auto">
                        <Carousel items={carouselItems}/>
                    </div>
                </div>
                <h3 className="text-2xl text-center mt-16 font-thin italic">More projects will be added here
                    soon...</h3>
            </motion.div>
        </div>
    );
}

export default Projects;