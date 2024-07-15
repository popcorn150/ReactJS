import {Link, Navigate, Outlet} from "react-router-dom";
import Navbar from "../navber.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios-client.js";



export default function DefaultLayout() {
  
  return (
    <div id="defaultLayout">
      <aside>
     
      <Navbar/>
      </aside>
      <div className="content">
        <header>
        
        </header>
        <main>
          <Outlet/>
        </main>
       
      
      </div>
    </div>

  )
}
