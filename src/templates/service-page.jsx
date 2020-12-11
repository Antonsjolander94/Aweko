import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import tw, { styled } from "twin.macro";
import {
  HeadingOneVariant,
  HeadingTwoVariant,
} from "../components/Shared/Types";
import Img from "gatsby-image";
import ServicesVariant from "../components/Index/ServicesVariant";
import SEO from "../components/seo";

const Hero = styled.header`
  ${tw`lg:py-20 py-10 border-b`}
  border-color: rgba(0,0,0,0.05);
`;
const StyledImage = styled(Img)``;
const HeroContent = styled.header`
  ${tw`grid lg:grid-cols-2 grid-cols-1 `}
  background-color: #FFD8E1;
`;

const ServicesText = styled.p`
  ${tw`font-light text-lg leading-relaxed md:text-xl  tracking-normal`}
`;
const Dot = styled.div`
  ${tw`bg-black w-1 h-1 mr-3 `}
`;

const ContactWrapper = styled.div`
  ${tw`flex flex-col justify-center items-center lg:p-20 p-10`}
  background-color: #f6f4f2;
`;
const ContactTextWrapper = styled.div`
  ${tw`flex flex-col justify-center items-center pb-10`}
`;

const Label = styled.label`
  ${tw`mb-3 font-light text-lg leading-relaxed md:text-xl tracking-normal`}
`;
const Input = styled.input`
  ${tw`mb-6 bg-transparent border border-black h-10 p-3 font-light text-lg leading-relaxed md:text-xl tracking-normal`}
  ::-webkit-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: black;
    opacity: 0.35;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: black;
    opacity: 0.35;
  }

  :-ms-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  ::placeholder {
    color: black;
    opacity: 0.35;
  }
`;
const TextArea = styled.textarea`
  ${tw`mb-5 bg-transparent border border-black p-3 font-light text-lg leading-relaxed md:text-xl tracking-normal`}

  ::-webkit-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: black;
    opacity: 0.35;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: black;
    opacity: 0.35;
  }

  :-ms-input-placeholder {
    color: black;
    opacity: 0.35;
  }

  ::placeholder {
    color: black;
    opacity: 0.35;
  }
`;
const SubmitButton = styled.button`
  ${tw`mt-5 text-center items-center justify-center bg-pink-400 flex transition duration-200 md:text-xl text-lg px-6 font-light py-3 focus:outline-none cursor-pointer transform`}
  ${tw`hocus:(text-white scale-105)`}
  ${tw`disabled:(opacity-50 pointer-events-none)`}
`;

const ServicePageTemplate = ({ data, location }) => {
  console.log({ servicePage: data });
  const [email, setEmail] = useState("");
  const [textArea, setText] = useState("");
  const {
    contentfulTjanst: { rubrik, bild, text, slug },
  } = data;
  return (
    <Layout>
      <SEO title={rubrik} description={text.join()} pathname={location} />
      <div className="margin-nav">
        <Hero>
          <div className="container">
            <HeroContent>
              <div className="lg:p-20 p-10 lg:order-first order-last">
                <HeadingOneVariant>{rubrik}</HeadingOneVariant>
                <ul>
                  {text.map((text) => (
                    <li key={text} className="flex items-center mb-4">
                      <Dot />
                      <ServicesText>{text}</ServicesText>
                    </li>
                  ))}
                </ul>
              </div>
              <StyledImage fluid={bild.fluid} />
            </HeroContent>

            <ContactWrapper>
              <ContactTextWrapper>
                <HeadingTwoVariant>Skriv till oss</HeadingTwoVariant>
              </ContactTextWrapper>
              <form
                className="flex flex-col lg:w-8/12 w-full"
                name="Contact Form"
                method="POST"
                data-netlify="true"
                action="/tack"
              >
                <Input type="hidden" name="form-name" value="Contact Form" />
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Din email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label htmlFor="message">Meddelande</Label>
                <TextArea
                  required
                  rows="4"
                  cols="50"
                  type="text"
                  name="message"
                  placeholder="Skriv ett meddelande"
                  onChange={(e) => setText(e.target.value)}
                />
                <SubmitButton
                  disabled={email === "" || textArea === ""}
                  type="submit"
                >
                  Skicka meddelande
                </SubmitButton>
              </form>
            </ContactWrapper>
          </div>
        </Hero>
        <ServicesVariant title="Andra tjänster" dontRender={slug} />
      </div>
    </Layout>
  );
};

export default ServicePageTemplate;

export const pageQuery = graphql`
  query ServicePageBySlug($slug: String!) {
    contentfulTjanst(slug: { eq: $slug }) {
      rubrik
      contentful_id
      slug
      text
      bild {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
