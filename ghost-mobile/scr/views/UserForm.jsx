import {useNavigate, useParams} from "react-router-dom";

import imge3 from "../images/GhostProfile.svg"
import imge4 from "../images/dummy.svg"
import imge7 from "../images/gowSs1.svg"
import imge5 from "../images/gowSs2.svg"
import imge6 from "../images/gowSs3.svg"

export default function UserForm() {


  return (
  <><div className="user_layer">
   <div className="side_section">
    <img src={imge4} alt="" />
    <div className="details">
        <p>God of war: Ragnarok</p>
        <img src={imge3} alt="" />
    </div>
   <h4>372k Total views</h4>
   <div className="thebutton">
    <button>Add to cart</button>
    <button>Buy game</button>
   </div>
   </div>
   <div className="left_section">
    <table>
        <tr>
            <th>Details</th>
        </tr>
        <tr>
            <td>"God Of war: RagnaroK" is an actin-adventure game developed by Santa 
                Monica studio and published by sony interactive Entertainment <br />
                Serving as a direct sequel to the critically acclaimed "God of war" 2018, the game
                continues the story of kratos, the former Greek god of war, and his son 
                attreus as they navigate the perilious world of Norse mythodology.
            </td>
        </tr>
    </table>
   </div>
    </div>
    <div className="user_layer2">
        <table>
            <tr>
                <th colSpan={3}>Screenshots</th>
            </tr>
            <tr>
                <td><img src={imge7} alt="" /></td>
                <td><img src={imge5} alt="" /></td>
                <td><img src={imge6} alt="" /></td>
            </tr>
        </table>
    </div>
    </>
  )
}
