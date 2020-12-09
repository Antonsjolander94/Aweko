import { useStaticQuery, graphql } from "gatsby";

const UsePersonel = () => {
  const { data } = useStaticQuery(
    graphql`
      query AllPersonel {
        data: allContentfulMedarbetare(sort: { fields: order }) {
          edges {
            node {
              contentful_id
              namn
              titel
              mejladress
              order
              telefonnummer
              bild {
                fixed(quality: 100, width: 250, height: 250) {
                  ...GatsbyContentfulFixed_withWebp
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

export default UsePersonel;
