import React from "react";
import {Header, Home, About, Timeline, Projects, Contact, Footer, ScrollToTop} from "@/components";

const Main = () => {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Timeline/>
            <Projects/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        </>
    );
}

export default Main;