import React from "react";
import Aux from "../Aux/Aux";
import Header from "../../components/Navigation/Header/Header";
import Footer from "../../components/Navigation/Footer/Footer";

const Layout = (props) => {
  return (
    <Aux>
      <Header />
      <main className="mb-auto">{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;
