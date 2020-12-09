import { useStaticQuery, graphql } from "gatsby";

const UseCustomers = () => {
  const { data } = useStaticQuery(
    graphql`
      query AllCustomers {
        data: allContentfulKund(sort: { fields: order }) {
          edges {
            node {
              rubrik
              id
              url
              logotyp {
                fluid(quality: 100, maxWidth: 228, resizingBehavior: FILL) {
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

export default UseCustomers;
