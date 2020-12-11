import React from "react";
import Layout from "../components/Layout";
import tw, { styled } from "twin.macro";
import { HeadingOneVariant, HeroText } from "../components/Shared/Types";

const ThankYouWrapper = styled.header`
  ${tw`bg-white`}
  min-height: 60vh;
  background-color: white;
`;
const Tack = () => (
  <Layout>
    <ThankYouWrapper className="margin-nav ">
      <div className="container mx-auto  lg:py-20 md:py-24  py-16">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <HeadingOneVariant center>Tack för ditt mejl</HeadingOneVariant>
            <HeroText center>Vi återkommer så snart som möjligt.</HeroText>
          </div>
        </div>
      </div>
    </ThankYouWrapper>
  </Layout>
);

export default Tack;
