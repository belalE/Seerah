import React from "react";
import Header from "../../components/Navigation/Header/Header";
import Footer from "../../components/Navigation/Footer/Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mx-4 my-4">{props.children}</main>
      <div className="mt-auto"></div>
      <Footer />
    </div>
  );
};

export default Layout;
