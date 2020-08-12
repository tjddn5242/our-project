import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter.js";
import AppSubBar from "./AppSubBar";

function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <AppSubBar />
      asdf
      {children}
      <AppFooter />
    </> 
  );
}

export default AppLayout;