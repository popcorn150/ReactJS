import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imge4 from "./images/Navlogo.svg"
import { IoClose, IoMenu } from "react-icons/io5";
import "./navber.css";

export default function Navbar() {
 return (
   <header className="header">
     <nav className="nav container">
     <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       </div>
       <NavLink to="/" className="nav__logo">
       <img src={imge4} alt="" />
       </NavLink>

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
    
           <li className="nav__item">
             <NavLink  className="nav__link">
               Support
             </NavLink>
           </li>
        
         </ul>
         <div className="nav__close" id="nav-close">
           <IoClose />
         </div>
       </div>

      
     </nav>
   </header>
 );
};