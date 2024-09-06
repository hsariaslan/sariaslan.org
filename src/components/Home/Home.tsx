import React from "react";
import "./Home.css";
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

    return (
        <>
            <div className="mt-10 mx-auto 2xl:w-2/3 w-full flex flex-col-reverse md:flex-row md:mt-24 gap-y-10 justify-around items-center gap-x-10">
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
                        <div className="techs">
                            <SiPhp size={logoSize} title="PHP"/>
                            <RiJavascriptFill size={logoSize} title="Javascript"/>
                            <BiLogoTypescript size={logoSize} title="Typescript"/>
                            <FaCss3Alt size={logoSize} title="CSS 3"/>
                            <FaHtml5 size={logoSize} title="HTML 5"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-light">Libraries / Frameworks</div>
                        <div className="techs flex-wrap">
                            <IoLogoLaravel size={logoSize} title="Laravel"/>
                            <RiReactjsLine size={logoSize} title="React JS"/>
                            <RiTailwindCssFill size={logoSize} title="TailwindCSS"/>
                            <FaVuejs size={logoSize} title="Vue JS"/>
                            <TbBrandNodejs size={logoSize} title="Node JS"/>
                            <SiExpress size={logoSize} title="Express JS"/>
                            <DiJqueryLogo size={logoSize} title="Jquery"/>
                            <DiYii size={logoSize - 8} title="Yii2"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-light">Databases</div>
                        <div className="techs">
                            <GrMysql size={logoSize - 8} title="Mysql"/>
                            <DiRedis size={logoSize} title="Redis"/>
                            <SiMongodb size={logoSize} title="MongoDB"/>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-light">DevOps Tools</div>
                        <div className="techs">
                            <FaDocker size={logoSize} title="Docker"/>
                            <FaAws size={logoSize} title="AWS"/>
                            <FaAtlassian size={logoSize - 8} title="Atlassian"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;