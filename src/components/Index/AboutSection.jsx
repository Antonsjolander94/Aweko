import React from "react";
import tw, { styled, css } from "twin.macro";
import { HeadingTwo, SectionText } from "../Shared/Types";
import { StyledLink } from "../Shared/Button";
import { borderStyles } from "../Shared/Border";
import Img from "gatsby-image";
import Shape2 from "../../assets/shape2.inline.svg";

const StyledImage = styled(Img)`
  ${tw`z-10 shadow-lg rounded-3xl w-full`}
`;
const ShapeBehindImage = styled(Shape2)(() => [
  css`
    width: 100%;
    transform: scale(0.95);
    & path {
      fill: #ffd8e1;
    }
  `,
]);
export const SectionWrapper = styled.section`
  ${tw`bg-white `}
  border-color: rgba(0,0,0,0.025);
  background-color: #f6f4f2;
`;
const SectionContent = styled.div`
  ${tw`grid lg:grid-cols-2 grid-cols-1 gap-x-8 md:gap-x-24 gap-y-16  lg:py-20 py-20 `}
`;
const SectionTextContent = styled.div`
  ${tw`flex justify-center items-center z-10 md:order-last sm:order-first`}
`;
const SectionImageContent = styled.div`
  ${tw`flex flex-col md:items-start items-center justify-center relative md:order-first sm:order-last relative`}
`;

const AboutSection = ({ title, text, link, linkText, image }) => {
  return (
    <SectionWrapper css={[borderStyles]}>
      <div className="container mx-auto">
        <SectionContent>
          <SectionTextContent>
            <div className="flex flex-col  text-center lg:text-left ">
              <HeadingTwo>{title}</HeadingTwo>
              <SectionText>{text}</SectionText>
              <div className="flex lg:justify-start justify-center">
                <StyledLink id="asd" isSecondary inline toPath={link}>
                  {linkText}
                </StyledLink>
              </div>
            </div>
          </SectionTextContent>
          <SectionImageContent>
            <ShapeBehindImage />
            <StyledImage style={{ position: "absolute" }} fluid={image.fluid} />
          </SectionImageContent>
        </SectionContent>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
