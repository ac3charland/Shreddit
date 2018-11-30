import React from "react";
import "./Banner.css";

const Banner = () => (
    <div className="container site-banner">
        <img alt="Shreddit" src={window.location.origin + '/images/banner.jpg'}></img>
    </div>
)

export default Banner;