import React from "react";
import {motion} from "framer-motion"
import {FaMapLocationDot} from "react-icons/fa6";
import {IoMdMailUnread} from "react-icons/io";

function Contact() {
    return (
        <div className="py-20">
            <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}}
                        transition={{delay: 0.2}} id="contact" className="sm:pl-10 px-4 mx-auto 2xl:w-2/3 w-full">
                <h1 className="text-4xl font-light">Get In Touch</h1>
                <div className="flex flex-col gap-y-4">
                    <p className="text-lg font-light mt-8 leading-loose">
                        I'm ready to hear from you!
                    </p>
                    <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-20">
                        <p className="text-lg font-light leading-6 flex gap-x-4 items-center">
                            <FaMapLocationDot size={40} className="text-stone-700"/>
                            <div className="flex flex-col">
                                <span className="font-bold">Location</span>
                                <span>Denizli, Turkey</span>
                            </div>
                        </p>
                        <p className="text-lg font-light leading-6 flex gap-x-4 items-center">
                            <IoMdMailUnread size={40} className="text-stone-700"/>
                            <div className="flex flex-col">
                                <span className="font-bold">Mail</span>
                                <a href="mailto:hakan.sariaslan.job@gmail.com" className="hover:text-primary">hakan.sariaslan.job@gmail.com</a>
                            </div>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;