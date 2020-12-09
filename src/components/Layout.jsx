import React, { useState } from "react";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import NavMenuOverlay from "./Shared/NavMenuOverlay";
import Helmet from "react-helmet";
import "./index.css";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout relative">
      <Helmet>
        <body
          className={`${menuOpen ? "overflow-hidden h-full max-h-full" : ""} `}
        />
      </Helmet>
      <Navbar openMenu={(open) => setMenuOpen(open)} />
      <main className={`${menuOpen ? "sm:visible block" : ""} `}>
        {children}
      </main>
      <Footer className={`${menuOpen ? "sm:visible block" : ""} `} />
      <NavMenuOverlay open={menuOpen} />
    </div>
  );
}

export default Layout;
