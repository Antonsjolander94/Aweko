import React from "react";
import tw, { styled } from "twin.macro";
import Img from "gatsby-image";
import { Link } from "gatsby";

const ServiceCardWrapper = styled(Link)`
  ${tw`bg-white transform overflow-hidden scale-100 transition duration-200 rounded-md flex flex-col overflow-hidden`}
  ${tw`hocus:(scale-105 shadow-md)`}
  background-color: #f6f4f2;
  &:hover,
  &:focus {
    background-color: #ffd8e1;
  }
`;

const TextWrapper = styled.div`
  ${tw`flex lg:justify-start justify-center items-center lg:p-6 lg:px-6 px-6 py-6`}
`;

const ServiceCard = ({ ...props }) => {
  const item = props.item;
  return (
    <ServiceCardWrapper to={`/tjanster/${item.slug}`}>
      <Img style={{ height: "100%", width: "100%" }} fluid={item.bild.fluid} />
      <TextWrapper>
        <h3 className="lg:text-2xl font-light text-3xl">{item.rubrik}</h3>
      </TextWrapper>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
