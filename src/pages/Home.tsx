import React from "react";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <Header />
            <div className="mt-20 ml-20">
                <div className="profile-photo-wrapper">
                    <div className="profile-photo-container">
                        <img src="src/assets/images/profile.jpeg" alt="hakan-sariaslan" className="profile-photo"/>
                    </div>
                    <div className="neon-sine-wave"></div>
                </div>
            </div>
        </>
    );
}

export default Home;