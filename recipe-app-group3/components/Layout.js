import React from "react";
import Navbars from "./Navbar";
import Footer from "./Footer";


const Layout = ({children}) => { 
    return(
        <>
        <Navbars/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout;