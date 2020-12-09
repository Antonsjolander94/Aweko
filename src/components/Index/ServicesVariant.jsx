import React from "react";
import tw, { styled } from "twin.macro";
import { HeadingThree, SectionText } from "../Shared/Types";
import ServiceCard from "../Tjanster/ServiceCard";
import useServices from "../../hooks/use-services";

export const SectionWrapper = styled.section`
  ${tw`py-20`}
  border-color: rgba(0,0,0,0.05);
`;

const ServicesVariant = ({ title, text, dontRender }) => {
  const { edges } = useServices();
  const filteredItems = edges.filter(({ node }) => node.slug !== dontRender);
  return (
    <SectionWrapper>
      <div className="container mx-auto">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <HeadingThree>{title}</HeadingThree>
          <SectionText center>{text}</SectionText>
        </div>
        <div className="grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:gap-10 gap-8">
          {dontRender
            ? filteredItems.map(({ node }) => (
                <ServiceCard key={node.contentful_id} item={node} />
              ))
            : edges.map(({ node }) => (
                <ServiceCard key={node.contentful_id} item={node} />
              ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesVariant;
