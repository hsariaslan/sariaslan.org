import React from "react";
import {motion} from "framer-motion"

function About() {
    return (
        <div className="bg-white py-20 mt-32">
            <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}}
                        transition={{delay: 0.2}} id="about" className="sm:pl-10 px-4 mx-auto 2xl:w-2/3 w-full">
                <h1 className="text-4xl font-light">About Me</h1>
                <div className="flex flex-col-reverse lg:flex-row gap-x-20">
                    <p className="text-lg font-light mt-8 leading-loose text-justify max-w-full">
                        Hi! 👋 I'm Hakan Sarıaslan, a passionate full-stack web engineer with 5 years of experience in
                        crafting dynamic and responsive web applications. I specialize in both front-end and back-end
                        development, bringing ideas to life with clean, efficient code and a keen eye for detail. My
                        journey in web development has equipped me with a solid foundation in technologies like React,
                        Laravel, and Mysql, allowing me to create seamless, user-friendly experiences. I thrive on
                        solving complex challenges and continuously learning new tools and techniques to stay at the
                        forefront of the ever-evolving tech landscape. Whether I'm developing a robust backend system
                        or designing an intuitive user interface, my goal is always to deliver high-quality, scalable
                        solutions that meet the needs of both clients and users alike.
                    </p>
                    <img src="src/assets/images/paris.jpg" className="rounded-lg block max-h-[288px] mx-auto mt-8"
                         alt="hakan-sariaslan"/>
                </div>
            </motion.div>
        </div>
    );
}

export default About;