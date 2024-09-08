import React from "react";
import AdminBooks from "./AdminBooks";
import AdminAuthers from "./AdminAuthers";
import AdminJhaneras from "./AdminJhaneras";
import { Outlet} from "react-router-dom";


function Admin (){
   return(
        <>
            <Outlet />
        </>
   )
}

export default Admin;