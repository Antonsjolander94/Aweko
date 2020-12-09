import React from "react";
import tw, { styled } from "twin.macro";
import ServiceCard from "./ServiceCard";

import useServices from "../../hooks/use-services";

const ServicesWrapper = styled.div`
  ${tw`py-6`}
  background: #f6f5ef;
`;

const Services = () => {
  const { edges } = useServices();
  console.log({ edges: edges });
  return (
    <ServicesWrapper>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-6">
        {edges &&
          edges.length &&
          edges.map(({ node }) => (
            <ServiceCard key={node.contentful_id} item={node} />
          ))}
      </div>
    </ServicesWrapper>
  );
};

export default Services;
