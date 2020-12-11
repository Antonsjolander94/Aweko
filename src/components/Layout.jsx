import React, { useState } from "react";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import NavMenuOverlay from "./Shared/NavMenuOverlay";
import Helmet from "react-helmet";
import "./index.css";
import CookieConsent from "react-cookie-consent";
import LinkImage from "../images/aweko-img.png";

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
      <Helmet
        meta={[
          {
            property: `og:title`,
            content:
              "I am a title Open Graph protocol will pick up and display",
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            // You should ideally replace the hardcoded URL below with a value you set
            // in your gatsby-config.js file.  And import all shared site metadata into
            // this component with the useStaticQuery hook.
            content: `https://www.aweko.se/${LinkImage}`,
          },
        ]}
      >
        <html lang="sv" />
        <meta
          name="google-site-verification"
          content="4ixLOA-jHAGroaibpWCvDwQOIN-jTq4W4xqQfikWXXo"
        />
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
