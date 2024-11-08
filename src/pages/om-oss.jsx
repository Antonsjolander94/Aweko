import React from "react";
import Layout from "../components/Layout";
import { HeadingOne } from "../components/Shared/Types";
import tw, { styled } from "twin.macro";
import UsePersonel from "../hooks/use-personel";
import Img from "gatsby-image";
import SEO from "../components/seo";

const HeroTextWrapper = styled.div`
  ${tw`font-light text-lg leading-relaxed md:text-xl tracking-normal  mt-5`}
  p {
    column-count: 2;
    column-gap: 2.5rem;

    @media (max-width: 1023px) {
      column-count: 1;
    }
  }
`;
const PersonCardWrapper = styled.section`
  ${tw`py-20 border-t`}
  border-color: rgba(0,0,0,0.05);
`;
const PersonCard = styled.div`
  ${tw`p-8 bg-white rounded-md`}
  background-color: #f6f4f2;
`;
const PersonName = styled.h3`
  ${tw`text-2xl font-light `}
`;
const PersonPosition = styled.p`
  ${tw`text-xl font-light  mb-5`}
`;
const PersonEmail = styled.a`
  ${tw`text-xl text-pink-400 font-light `}
  ${tw`hocus:(underline)`}
`;
const PersonNumber = styled.a`
  ${tw`text-xl opacity-75 font-light `}
  ${tw`hocus:(underline)`}
`;
const PersonCardImageWrapper = styled.div`
  ${tw`flex justify-center items-center mb-5`}
`;
const PersonCardImage = styled(Img)`
  ${tw`w-full rounded-full`}
`;

const OmOss = ({ location }) => {
  const { edges } = UsePersonel();
  return (
    <Layout>
      <SEO
        title={`Om oss`}
        description={`Vi är en fulländad byrå i Umeå som hjälper dig med löpande bokföring, bokslut, årsredovisning, lön, deklarationer samt rådgivning. Hos oss får ni personlig service och skräddarsydda lösningar som passar just dig och ditt företag. Ibland kanske inte tiden räcker till för att båda förverkliga en affärsidé och samtidigt ha kontroll över företagets ekonomi. Vi har som mål att vara den personliga redovisningsbyrån som riktar sig till dig som entreprenör i både stora, medelstora och små företag. Låt oss därför hjälpa dig och underlätta din vardag. Vi sköter din administration så att du själv som företagare kan fokusera på det som du är bäst på – ditt företags kärnverksamhet.`}
        pathname={location}
      />
      <div className="margin-nav ">
        <div className="container  flex flex-col lg:py-20 md:py-24  py-16">
          <div className="max-w-full lg:mx-0 mx-auto lg:text-left text-center">
            <HeadingOne>Om oss</HeadingOne>
            <HeroTextWrapper>
              <p>
                Vi är en fulländad byrå som hjälper dig med löpande bokföring,
                bokslut, årsredovisning, lön, deklarationer samt rådgivning. Hos
                oss får ni personlig service och skräddarsydda lösningar som
                passar just dig och ditt företag. Ibland kanske inte tiden
                räcker till för att båda förverkliga en affärsidé och samtidigt
                ha kontroll över företagets ekonomi. Vi har som mål att vara den
                personliga redovisningsbyrån som riktar sig till dig som
                entreprenör i både stora, medelstora och små företag. Låt oss
                därför hjälpa dig och underlätta din vardag. Vi sköter din
                administration så att du själv som företagare kan fokusera på
                det som du är bäst på – ditt företags kärnverksamhet.
              </p>
            </HeroTextWrapper>
          </div>
        </div>
        <PersonCardWrapper>
          <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10">
              {edges &&
                edges.length &&
                edges.map(({ node }) => (
                  <PersonCard key={node.contentful_id}>
                    {node?.namn && node?.bild?.fixed && (
                      <PersonCardImageWrapper>
                        <PersonCardImage
                          alt={node.namn}
                          fixed={node.bild.fixed}
                        />
                      </PersonCardImageWrapper>
                    )}
                    <div className="flex flex-col justify-center text-center">
                      {node?.namn && <PersonName>{node.namn}</PersonName>}

                      {node?.titel && (
                        <PersonPosition>{node.titel}</PersonPosition>
                      )}

                      {node?.mejladress && (
                           <PersonEmail href={`mailto:${node.mejladress}`}>
                           {node.mejladress}
                         </PersonEmail>
                      )}

                      {node?.telefonnummer && (
                         <PersonNumber href={`tel:${node.telefonnummer}`}>
                         {node.telefonnummer}
                       </PersonNumber>
                      )}

                   
                     
                    </div>
                  </PersonCard>
                ))}
            </div>
          </div>
        </PersonCardWrapper>
      </div>
    </Layout>
  );
};

export default OmOss;
