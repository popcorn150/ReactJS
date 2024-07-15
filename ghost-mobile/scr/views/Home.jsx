import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import imge3 from "../images/GhostProfile.svg"
import imge5 from "../images/dummy.svg"
import imge7 from "../images/Tekken8.svg"
import imge4 from "../images/gowSs2.svg"
import imge6 from "../images/gowSs3.svg"
import imge9 from "../images/gowSs1.svg"
import {IoSearch} from "react-icons/io5";

export default function Home() {
  
  return (
    <div className="creatdive">
     <div className="search">
      <div className="search-icon">
      <IoSearch/>
      </div>
             <input type="text" placeholder="Resident Evil 2" />
        </div>
        <div className="latest">
          <p className="text">Category</p>
          <div className="coat">
           
            <div className="coat-content">
               <div className="img">
                <Link to="/home/about"><img src={imge9} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge4} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge4} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge7} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge6} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
          </div>
        
        
       
    </div>
        <div className="latest">
          <p className="text">Hot and lastest uploads</p>
          <div className="coat">
           
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge9} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge4} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge6} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge5} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge7} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
          </div>
        
        
       
    </div>
        <div className="latest">
          <p className="text">Hot and lastest uploads</p>
          <div className="coat">
           
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge6} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge4} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge7} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge9} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
            <div className="coat-content">
            <div className="img">
            <Link to="/home/about"><img src={imge5} alt="" /></Link></div>
                <div className="text_container">
                <div className="text_details">
                <p className="text2">God war of war: Regnarok</p>
                <img src={imge3} alt="" />
                </div>
                 <h4>372k Total views</h4>
            </div>
            </div>
          </div>
        
        
       
    </div>
      
   </div>
  )
}
