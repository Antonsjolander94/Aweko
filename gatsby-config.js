const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Aweko Nord AB",
    titleTemplate: "%s · Din redovisningsbyrå i Umeå",
    description:
      "Vi är en fulländad byrå i Umeå som hjälper dig med löpande bokföring, bokslut, årsredovisning, lön, deklarationer samt rådgivning. Hos oss får ni personlig service och skräddarsydda lösningar som passar just dig och ditt företag. Ibland kanske inte tiden räcker till för att båda förverkliga en affärsidé och samtidigt ha kontroll över företagets ekonomi. Vi har som mål att vara den personliga redovisningsbyrån som riktar sig till dig som entreprenör i både stora, medelstora och små företag. Låt oss därför hjälpa dig och underlätta din vardag. Vi sköter din administration så att du själv som företagare kan fokusera på det som du är bäst på – ditt företags kärnverksamhet.",
    url: "https://www.aweko.se/", // No trailing slash allowed!
    siteUrl: "https://www.aweko.se/", // No trailing slash allowed!
    image: "/images/aweko-img.png", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: "/aweko-hemsida",
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    "gatsby-transformer-remark",
    "@contentful/gatsby-transformer-contentful-richtext",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-K19E5YBH43", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Aweko Nord AB",
        short_name: "Aweko",
        start_url: "/",
        background_color: "#FFD8E1",
        theme_color: "#FFD8E1",
        icon: "src/images/aweko-favicon.png",
        defaultImage: "src/images/aweko-img.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: "gatsby-plugin-remove-console",
      options: {
        exclude: ["error", "warn"], // <- will be removed all console calls except these
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
};
