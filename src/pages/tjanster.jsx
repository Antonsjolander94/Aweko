import React from "react";
import Layout from "../components/Layout";
import { HeadingOne } from "../components/Shared/Types";
import ServiceCard from "../components/Tjanster/ServiceCard";
import useServices from "../hooks/use-services";
import tw, { styled } from "twin.macro";
import SEO from "../components/seo";

const ServiceWrapper = styled.div`
  ${tw`py-20 border-t`}
  border-color: rgba(0,0,0,0.05);
`;
const HeroTextWrapper = styled.div`
  ${tw`font-light text-lg leading-relaxed md:text-xl tracking-normal  mt-5`}
  p {
    column-count: 1;
    column-gap: 2.5rem;

    @media (max-width: 1023px) {
      column-count: 1;
    }
  }
`;

const Tjanster = ({ location }) => {
  const { edges } = useServices();
  return (
    <Layout>
      <SEO
        title={`Tjänster`}
        description={`Är du i behov av en helhetslösning för ekonomin i ditt företag
        eller endast av en specifik tjänst? Våra redovisningskonsulter
        har lång och bred erfarenhet att arbeta med olika delar inom
        just företagsekonomi och rådgivning i Umeå. Vi planerar alltid utifrån
        dig och ditt företag ligger i fokus för oss.`}
        pathname={location}
      />
      <div className="container margin-nav ">
        <div className="flex flex-col lg:py-20 md:py-24  py-16">
          <div className="max-w-3xl lg:mx-0 mx-auto lg:text-left text-center">
            <HeadingOne>Våra tjänster</HeadingOne>
            <HeroTextWrapper>
              <p className="mb-0">
                Är du i behov av en helhetslösning för ekonomin i ditt företag
                eller endast av en specifik tjänst? Våra redovisningskonsulter
                har lång och bred erfarenhet att arbeta med olika delar inom
                just företagsekonomi och rådgivning. Vi planerar alltid utifrån
                dig och ditt företag ligger i fokus för oss.
              </p>
            </HeroTextWrapper>
          </div>
        </div>
      </div>
      <ServiceWrapper>
        <div className="container">
          <div className="grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:gap-10 gap-8">
            {edges &&
              edges.length &&
              edges.map(({ node }) => (
                <ServiceCard key={node.contentful_id} item={node} />
              ))}
          </div>
        </div>
      </ServiceWrapper>
    </Layout>
  );
};

export default Tjanster;
