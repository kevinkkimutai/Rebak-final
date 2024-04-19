import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const Layout = () => {
  return (

    <>
     
      <NavBar />
       <Outlet />
       <FloatingWhatsApp
        phoneNumber="254707414664"
        accountName="Rebak Solutions"
        avatar="/logo.jpg"
        statusMessage="Typically replies in Minutes"
        animated
      />
    <Footer />
    </>

  );
};

export default Layout;
