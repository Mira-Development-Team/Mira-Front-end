import React from "react";
import Header from "./header";
import Footer from "./footer";


const Layout: React.FC<{ children: any }> = ({ children }) => {

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
