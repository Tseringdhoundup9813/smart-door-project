import { Outlet, NavLink } from "react-router-dom";
import React,{useContext,useState} from "react";
import Login from "../components/Login";
import { loginContext } from "../components/Context";



export default function RootLayout() {


  return (

    <div className="root-layout">
         <Outlet />
    </div>

  )
}