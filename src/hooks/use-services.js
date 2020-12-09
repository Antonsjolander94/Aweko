import { useStaticQuery, graphql } from "gatsby";

const UseServices = () => {
  const { data } = useStaticQuery(
    graphql`
      query AllServices {
        data: allContentfulTjanst {
          edges {
            node {
              slug
              contentful_id
              rubrik
              text
              bild {
                fluid(quality: 100) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default UseServices;
