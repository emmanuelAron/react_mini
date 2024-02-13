import React from "react";
import '../css/SideBar.css';
import { Link } from "react-router-dom"; 

function SideBar(){
    return(
        <>
        <ul className="sidebar">
            {/* <li> <a href="App.jsx">Home</a></li> */}
            <li><Link to="/" className="sidebar-link">Home</Link></li>
            <li> <Link to="/about" className="sidebar-link"> About us </Link></li>
        </ul>
        </>
    )
}
export default SideBar;
