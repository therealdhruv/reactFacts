import React from "react";

export default function Navbar() {
    return (
        <>
            <nav>
                <img src={require("../images/react-icon-small.png")} className="nav--icon" />
                <h3 className="nav--iconText" > ReactFacts </h3>
                <h4 className="nav--rightText" > ReactCouse Project-1 </h4>
            </nav>
        </>
    );
}
