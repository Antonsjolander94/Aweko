import React from "react";
import tw, { styled } from "twin.macro";
import { HeadingTwo, SectionText } from "../Shared/Types";
import { ServiceLink } from "./ServiceLink";
import useServices from "../../hooks/use-services";

export const SectionWrapper = styled.section`
  ${tw`lg:py-32 py-20 bg-white`}
  border-color: rgba(0,0,0,0.05);
`;

const Services = ({ title, text }) => {
  const { edges } = useServices();

  return (
    <SectionWrapper>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:justify-start justify-center">
          <div className="max-w-md lg:mx-0 mx-auto flex flex-col lg:justify-start justify-center lg:mb-0 mb-10">
            <HeadingTwo className="lg:text-left text-center">
              {title}
            </HeadingTwo>
            <SectionText className="lg:text-left text-center">
              {text}
            </SectionText>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-10">
            {edges &&
              edges.length &&
              edges.map(({ node }) => (
                <ServiceLink
                  key={node.contentful_id}
                  toPath={`/tjanster/${node.slug}`}
                  title={node.rubrik}
                />
              ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
