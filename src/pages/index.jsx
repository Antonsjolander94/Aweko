import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import UseHomepage from "../hooks/use-homepage";

import Hero from "../components/Index/Hero";
import Services from "../components/Index/Services";
import Customers from "../components/Index/Customers";
import AboutSection from "../components/Index/AboutSection";

const index = ({ location }) => {
  const {
    heroBild,
    heroRubrik,
    heroText,
    heroLedord,
    omOssRubrik,
    omOssText,
    omOssBild,
    tjnsterRubrik,
    tjnsterText,
  } = UseHomepage();

  return (
    <Layout location={location}>
      <SEO
        title={"Aweko - Din redovisningsbyrå i Umeå"}
        description={
          "Aweko Nord AB - Anna Westlund - Redovisning - bokföring, bokslut, årsredovisning, lön, deklarationer, rådgivning, Ekonomikonsult - Katja Toral Sjölander - Umeå - Löner - Tjänster - Älven - Företagsparken - Ume - "
        }
        pathname={location}
      />
      <Hero
        image={heroBild}
        title={heroRubrik}
        text={heroText}
        words={heroLedord}
      />
      <Customers />
      <Services title={tjnsterRubrik} text={tjnsterText} />
      <AboutSection
        title={omOssRubrik}
        text={omOssText}
        image={omOssBild}
        link={"/om-oss"}
        linkText={"Om oss"}
      />
    </Layout>
  );
};

export default index;
