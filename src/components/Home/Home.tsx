import React from "react";
import "./Home.css";
import {motion} from "framer-motion"
import {Link} from "react-router-dom";
import {FaAws, FaAtlassian, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaLinkedin, FaVuejs} from "react-icons/fa";
import {SiPhp} from "react-icons/si";
import {IoLogoLaravel} from "react-icons/io5";
import {GrMysql} from "react-icons/gr";
import {RiJavascriptFill, RiReactjsLine, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {DiJqueryLogo, DiRedis, DiYii} from "react-icons/di";
import {SiMongodb} from "react-icons/si";
import {TbBrandNodejs} from "react-icons/tb";
import {SiExpress} from "react-icons/si";

function Home() {
    const logoSize = 48;

    const container = {
        visible: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { y: -5, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className="home pt-44 md:pt-60" id="home">
            <div className="mx-auto 2xl:w-2/3 w-full flex flex-col-reverse md:flex-row gap-y-10 justify-around items-center gap-x-10">
                <div className="flex flex-col gap-y-4">
                    <div className="text-6xl flex gap-x-4">
                        <span>Fullstack Web Engineer</span>
                    </div>
                    <div className="font-light text-stone-500 text-xl ml-1">
                        Hi! I'm Hakan Sarıaslan, full-stack web engineer with 5 years of experience.
                    </div>
                    <div className="mt-20 flex items-center gap-x-4">
                        <div className="download-button-container">
                            <a href="src/assets/pdf/resume-hakan-sariaslan.pdf" target="_blank" className="download-button">Download CV</a>
                        </div>
                        <div className="flex gap-x-2">
                            <Link to="https://www.linkedin.com/in/hakan-sariaslan/" target="_blank" title="LinkedIn">
                                <FaLinkedin size={36}/>
                            </Link>
                            <Link to="https://github.com/hsariaslan" target="_blank" title="GitHub">
                                <FaGithub size={36}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="photo-wrapper">
                    <div className="slime-border"></div>
                    <img src="src/assets/images/profile.jpeg" alt="hakan-sariaslan" className="profile-photo"/>
                </div>
            </div>
            <div className="home-bottom">
                <div className="text-center text-4xl font-light">Tech Stack</div>
                <div className="flex flex-col text-center justify-center gap-y-10 xl:flex-row xl:justify-around items-center mt-12">
                    <div>
                        <div className="text-2xl font-light">Languages</div>
                        <motion.div initial="hidden" animate="visible" variants={container} className="techs">
                            <motion.div variants={item}><SiPhp size={logoSize} title="PHP"/></motion.div>
                            <motion.div variants={item}><RiJavascriptFill size={logoSize} title="Javascript"/></motion.div>
                            <motion.div variants={item}><BiLogoTypescript size={logoSize} title="Typescript"/></motion.div>
                            <motion.div variants={item}><FaCss3Alt size={logoSize} title="CSS 3"/></motion.div>
                            <motion.div variants={item}><FaHtml5 size={logoSize} title="HTML 5"/></motion.div>
                        </motion.div>
                    </div>
                    <div>
                        <div className="text-2xl font-light">Libraries / Frameworks</div>
                        <motion.div initial="hidden" animate="visible" variants={container} className="techs flex-wrap">
                            <motion.div variants={item}><IoLogoLaravel size={logoSize} title="Laravel"/></motion.div>
                            <motion.div variants={item}><RiReactjsLine size={logoSize} title="React JS"/></motion.div>
                            <motion.div variants={item}><RiTailwindCssFill size={logoSize} title="TailwindCSS"/></motion.div>
                            <motion.div variants={item}><FaVuejs size={logoSize} title="Vue JS"/></motion.div>
                            <motion.div variants={item}><TbBrandNodejs size={logoSize} title="Node JS"/></motion.div>
                            <motion.div variants={item}><SiExpress size={logoSize} title="Express JS"/></motion.div>
                            <motion.div variants={item}><DiJqueryLogo size={logoSize} title="Jquery"/></motion.div>
                            <motion.div variants={item}><DiYii size={logoSize - 8} title="Yii2"/></motion.div>
                        </motion.div>
                    </div>
                    <div>
                        <div className="text-2xl font-light">Databases</div>
                        <motion.div initial="hidden" animate="visible" variants={container} className="techs">
                            <motion.div variants={item}><GrMysql size={logoSize - 8} title="Mysql"/></motion.div>
                            <motion.div variants={item}><DiRedis size={logoSize} title="Redis"/></motion.div>
                            <motion.div variants={item}><SiMongodb size={logoSize - 8} title="MongoDB"/></motion.div>
                        </motion.div>
                    </div>
                    <div>
                        <div className="text-2xl font-light">DevOps Tools</div>
                        <motion.div initial="hidden" animate="visible" variants={container} className="techs">
                            <motion.div variants={item}><FaDocker size={logoSize} title="Docker"/></motion.div>
                            <motion.div variants={item}><FaAws size={logoSize} title="AWS"/></motion.div>
                            <motion.div variants={item}><FaAtlassian size={logoSize - 8} title="Atlassian"/></motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;