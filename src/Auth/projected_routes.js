import { Navigate, Outlet } from "react-router-dom";
import { IsLogin } from "./auth_state";

export const ProtectedRoute = () =>{
    let isAuth = IsLogin();
    return isAuth?<Outlet/>:<Navigate replace to="/"/>
}