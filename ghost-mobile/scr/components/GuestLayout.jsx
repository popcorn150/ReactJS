import {Link, Navigate, Outlet} from "react-router-dom";
import Navbar from "../navber.jsx";
import imge3 from "../images/GhostProfile.svg"
import imge4 from "../images/Navlogo.svg"
import imge7 from "../images/Tekken8.svg"
import imge5 from "../images/gowSs2.svg"
import imge6 from "../images/gowSs3.svg"
import imge9 from "../images/footer.svg"


export default function GuestLayout() {
 
  return (
    <div id="guestLayout">
      <div className="guestnavber">
        <Navbar/>
       </div>
       <div className="content2">
         <div className="first_layer">
           <div className="first_content"></div>
           <div className="second_content"></div>
           <div className="third_content"></div>
         </div>
         <div className="second_layer">
           <div className="first_content"></div>
           <div className="second_content"></div>
           <div className="third_content"></div>
         </div>
         <div className="third_layer">
          
         </div>
       </div>
       <div className="contain-show">
       <Outlet/>
        </div>
    </div>
  );
}

