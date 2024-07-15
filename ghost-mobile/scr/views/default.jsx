import {Link} from "react-router-dom";
import imge4 from "../images/Navlogo.svg"
import { FaLocationArrow } from "react-icons/fa6";
export default function Default() {

  return (
    
    <div className="content5">    
      <div className="container-detail">
      <img src={imge4} alt="" />
     <Link to="/signup"><button>Get Started<div className="loction">
      <FaLocationArrow/></div></button></Link>
     <div className="text">
     <p>@ 2024 Undergog organization all right reciebved.</p>
     </div>
      </div>
     </div>
  )
}
