import { useStaticQuery, graphql } from "gatsby";

const UseHomepage = () => {
  const { data } = useStaticQuery(
    graphql`
      query StartSida {
        data: contentfulSidaStartsida(
          contentful_id: { eq: "5aNAeGqiLdgL6Vxt6KSyZ4" }
        ) {
          heroBild {
            title
            fluid(maxWidth: 1159) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          omOssBild {
            title
            fluid(maxWidth: 1129) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          heroLedord
          heroRubrik
          heroText
          omOssRubrik
          omOssText
          tjnsterRubrik
          tjnsterText
        }
      }
    `
  );
  console.log({ homePage: data });
  return data;
};

export default UseHomepage;
