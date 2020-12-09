const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const servicesTemplate = path.resolve("./src/templates/service-page.jsx");

  // Individual docs pages
  const services = graphql(`
    {
      allContentfulTjanst {
        edges {
          node {
            rubrik
            slug
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create blog pages
    result.data.allContentfulTjanst.edges.forEach(({ node }) => {
      createPage({
        path: `/tjanster/${node.slug}/`,
        component: servicesTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  });

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([services]);
};
