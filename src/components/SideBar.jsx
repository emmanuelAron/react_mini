import React from "react";
import '../css/SideBar.css';

function SideBar(){
    return(
        <>
        <ul className="sidebar">
            <li> <a href="main.jsx">Home</a></li> {/* i replaced home.html by index.html */}
            <li> <a href="about.html">About</a></li>
        </ul>
        </>
    )
}
export default SideBar;
