import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import imge1 from "../images/asssis1.svg"
import imge2 from "../images/bbbq1.svg"
import imge3 from "../images/bgg1.svg"
import imge4 from "../images/footer1.svg"
import imge5 from "../images/rrr1.svg"
import imge6 from "../images/tahhh1.svg"
import imge7 from "../images/RedDeadRedemption.svg"
import {useStateContext} from "../context/ContextProvider.jsx";

export default function home() {
  
  return (
    <div className="creatdive">
     <div className="search">
             <input type="text" placeholder="Resident Evil 2" />
        </div>
        <div className="latest">
          <p className="text">Hot and lastest uploads</p>
          <div className="coat">
           
            <div className="coat-content">
            <Link to="/home/about" className="link"><img src={imge7} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge1} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge2} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge3} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
          </div>
        </div>
        <div className="latest">
          <p className="text">Hot and lastest uploads</p>
          <div className="coat">
           
            <div className="coat-content">
            <Link to="/home/about"><img src={imge7} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge6} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge5} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge4} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
          </div>
        </div>
        <div className="latest">
          <p className="text">Hot and lastest uploads</p>
          <div className="coat">
           
            <div className="coat-content">
            <Link to="/home/about"><img src={imge3} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge2} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge1} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge7} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
          </div>
        </div>
        <div className="latest">
          <p className="text">Hot and lastest uploads</p>
          <div className="coat">
           
            <div className="coat-content">
            <Link to="/home/about"><img src={imge6} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge5} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge4} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
            <div className="coat-content">
            <Link to="/home/about"><img src={imge3} alt="" /></Link>
              <p className="text2">Call of Duty lengedary sale</p>
              <button>View game</button>
              <button>upload game</button>
            </div>
          </div>
        </div>
        
       
    </div>
  )
}
