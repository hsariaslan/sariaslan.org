import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

function Timeline() {
    return (
        <div>
            <div id="timeline" className="sm:pl-10 py-10 mx-auto 2xl:w-2/3 w-full">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(253, 139, 0)', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(253, 139, 0)'}}
                        date="08/2024 - present"
                        dateClassName="text-black"
                        iconStyle={{background: 'rgb(253, 139, 0)', color: '#fff'}}
                        icon={<MdOutlineWork/>}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Fullstack Web Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">TED Bilisim</h4>
                        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                        <p>
                            AWS Tools, Docker, Atlassian, Yii2, Php, Redis, Mysql, RabbitMQ
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="04/2022 - 09/2023"
                        iconStyle={{background: 'rgb(253, 139, 0)', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Fullstack Web Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Forwardie Digital Logistics Organizer</h4>
                        <h5 className="vertical-timeline-element-subtitle">Izmir, Turkey</h5>
                        <p>
                            Laravel, Microservices, Javascript, OOP, Next JS, Apache Server Configuration, Mysql, CSS 3, HTML 5
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09/2016 - 07/2022"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<FaGraduationCap/>}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Graduated as Software Engineer (BS)</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Firat University</h4>
                        <h5 className="vertical-timeline-element-subtitle">Elazig, Turkey</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="02/2021 - 07/2021"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<FaGraduationCap/>}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">2. Erasmus+ Experience</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Beira Interior University</h4>
                        <h5 className="vertical-timeline-element-subtitle">Covilha, Portugal</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="07/2019 - 02/2020"
                        iconStyle={{background: 'rgb(253, 139, 0)', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Software Engineer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Logical Defense - Defense Industry R&D</h4>
                        <h5 className="vertical-timeline-element-subtitle">Elazig, Turkey</h5>
                        <p>
                            Laravel, Mapbox, Backend, Rest API Development
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="02/2019 - 07/2019"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<FaGraduationCap/>}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">1. Erasmus+ Experience</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Beira Interior University</h4>
                        <h5 className="vertical-timeline-element-subtitle">Covilha, Portugal</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="01/2015 - 09/2015"
                        iconStyle={{background: 'rgb(253, 139, 0)', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Web Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">NT Information Technologies</h4>
                        <h5 className="vertical-timeline-element-subtitle">Denizli, Turkey</h5>
                        <p>
                            Php, Jquery, Css, Html, Admin Panel Development, Photoshop
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09/2013 - 07/2015"
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<FaGraduationCap/>}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Graduated as Computer Programmer (AS)</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Pamukkale University</h4>
                        <h5 className="vertical-timeline-element-subtitle">Denizli, Turkey</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="09/2012 - 01/2015"
                        iconStyle={{background: 'rgb(253, 139, 0)', color: '#fff' }}
                        icon={<MdOutlineWork />}
                    >
                        <h3 className="vertical-timeline-element-title text-2xl font-bold">Web Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Technoone Software Systems</h4>
                        <h5 className="vertical-timeline-element-subtitle">Denizli, Turkey</h5>
                        <p>
                            Php, Jquery, Css, Html, Admin Panel Development, Photoshop
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;