import React from "react";

import Nav from "../Nav";
import Footer from "../Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
