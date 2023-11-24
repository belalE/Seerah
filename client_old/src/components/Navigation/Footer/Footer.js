import React from "react";

function Footer() {
  return (
    <footer className="sticky top-[100vh] pb-5 pt-3 px-3 bg-green-900">
      <p className="text-white">&copy; {new Date().getFullYear()} Seerah.net</p>
    </footer>
  );
}

export default Footer;
