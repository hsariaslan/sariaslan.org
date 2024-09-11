import React from "react";

function About() {
    return (
        <div className="bg-stone-700 py-10 text-center text-white">
            Copyright &copy; {new Date().getFullYear()}
        </div>
    );
}

export default About;