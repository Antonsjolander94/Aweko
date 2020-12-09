import React, { useState } from "react";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import NavMenuOverlay from "./Shared/NavMenuOverlay";
import Helmet from "react-helmet";
import "./index.css";
import CookieConsent from "react-cookie-consent";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout relative">
      <CookieConsent
        location="bottom"
        buttonText="Stäng"
        declineButtonText="Decliasdne"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#FFD8E1", color: "black", alignItems: "center" }}
        buttonStyle={{
          color: "#000",
          fontSize: "20px",
          fontWeight: "300",
          fontFamily: "soleil",
          background: "transparent",
          border: "2px solid black",
        }}
      >
        Genom att fortsätta använda webbplatsen godkänner du att vi använder
        kakor (cookies).
      </CookieConsent>
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
