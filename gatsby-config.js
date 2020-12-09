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
    url: "http://aweko.se/", // No trailing slash allowed!
    image: "/images/aweko-img.png", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: "/aweko-hemsida",
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    "gatsby-transformer-remark",
    "@contentful/gatsby-transformer-contentful-richtext",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    "gatsby-plugin-remove-serviceworker",
    `gatsby-plugin-react-leaflet`,
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
