import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard.jsx'
import './index.css'
import './responsive.css'


import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
