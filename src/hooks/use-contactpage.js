import { useStaticQuery, graphql } from "gatsby";

const useContactPage = () => {
  const { data } = useStaticQuery(
    graphql`
      query SidaKontaktaOss {
        data: contentfulSidaKontaktaOss(
          contentful_id: { eq: "3ivrDXiv0gJxznNyAnbtoe" }
        ) {
          adress
          contentful_id
          rubrik
          orgnr
          telefonnummer
          bild {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  );
  console.log({ contactPage: data });
  return data;
};

export default useContactPage;
