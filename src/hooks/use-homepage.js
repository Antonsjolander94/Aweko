import { useStaticQuery, graphql } from "gatsby";

const UseHomepage = () => {
  const { data } = useStaticQuery(
    graphql`
      query StartSida {
        data: contentfulSidaStartsida(
          contentful_id: { eq: "5aNAeGqiLdgL6Vxt6KSyZ4" }
        ) {
          heroBild {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          omOssBild {
            fluid(quality: 100) {
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
