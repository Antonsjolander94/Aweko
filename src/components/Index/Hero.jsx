import React from "react";
import tw, { styled, css } from "twin.macro";
import { HeadingOne, HeroText } from "../Shared/Types";
import { StyledLink } from "../Shared/Button";
import Shape from "../../assets/bg.inline.svg";
import Stroke from "../../assets/hero-stroke.inline.svg";
import TextLoop from "react-text-loop";
import Img from "gatsby-image";

const Container = styled.header`
  ${tw`flex flex-col  overflow-hidden`}
`;
const Content = styled.div`
  ${tw`grid gap-x-8 md:gap-x-24 gap-y-16 lg:py-16 md:py-24 py-16`}
  grid-template-columns: 459px 1fr;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-left: auto;
    margin-right: auto;
  }
`;
const TextContent = styled.div`
  ${tw`flex flex-col justify-center z-10 lg:max-w-lg max-w-full`}
`;
const ImageContent = styled.div`
  ${tw`flex  md:items-center items-end justify-center relative md:mb-0 mb-8`}
`;

const ShapeBehindImage = styled(Shape)(() => [
  css`
    width: 100%;
    transform: scale(0.9);
    & path {
      fill: #f7dde0;
      fill: #f7dde0;
      fill: #ffd8e1;
    }
  `,
]);
const StrokeBehindImage = styled(Stroke)(() => [
  css`
    position: absolute;
    z-index: 1;
    width: 100%;
    transform: scale(1.75);
    transform: scale(1.35);
    top: 12%;
    fill: none;
    stroke: white;
    stroke: #f6f5ef;
    stroke: white;
    stroke-miterlimit: 1;
    stroke-width: 1.25;
  `,
]);
const StyledImage = styled(Img)`
  ${tw`z-10 shadow-lg rounded-3xl w-full`}
  max-height: 403px;
  max-width: 86.5%;
  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;

function Hero({ title, text, words, image }) {
  return (
    <Container className="margin-nav">
      <div className="container mx-auto">
        <Content>
          <TextContent>
            <HeadingOne className="lg:text-left text-center">
              {title} <br />
              <TextLoop
                springConfig={{ stiffness: 180, damping: 14 }}
                children={words}
              />
            </HeadingOne>
            <HeroText className="lg:text-left text-center">{text}</HeroText>

            <div className="flex lg:justify-start justify-center">
              <StyledLink isSecondary toPath={"/tjanster"}>
                Våra tjänster
              </StyledLink>
            </div>
          </TextContent>
          <ImageContent>
            <StrokeBehindImage />
            <ShapeBehindImage />
            <StyledImage
              style={{ position: "absolute", right: "0" }}
              fluid={image.fluid}
            />
          </ImageContent>
        </Content>
      </div>
    </Container>
  );
}

export default Hero;
