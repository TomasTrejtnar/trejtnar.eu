import * as React from "react";
import Footer from "../components/Footer";
import IndexPortfolio from "../components/IndexPortfolio";
import Nav from "../components/Nav";

import "../scss/main.scss";

const IndexPage: React.FC = () => {
  return (
    <>
      <title>Home Page</title>
      <Nav />
      <main>
        <IndexPortfolio />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
