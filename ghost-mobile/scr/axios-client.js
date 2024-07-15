import axios from "axios";
import {useStateContext} from "./context/ContextProvider.jsx";

const axiosClient = axios.create({
  baseURL: `/api`
})



export default axiosClient
