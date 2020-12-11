import React, { useState } from "react";
import Layout from "../components/Layout";
import { HeadingOne } from "../components/Shared/Types";
import tw, { styled } from "twin.macro";
import useContactPage from "../hooks/use-contactpage";
import Img from "gatsby-image";
import SEO from "../components/seo";

const HeroTextWrapper = styled.div`
  ${tw`font-light text-lg leading-relaxed md:text-xl tracking-normal  mt-5`}
`;
const ContactSection = styled.section`
  ${tw`border-t py-20`}
`;
const Content = styled.div`
  ${tw`grid lg:grid-cols-2 grid-cols-1`}
`;
const ContactWrapper = styled.div`
  ${tw`flex justify-center items-center p-10`}
  background-color: #f6f4f2;
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

const GoogleMapWrapper = styled.div`
  iframe {
    width: 500;
    height: 600;
  }
`;
const StyledImage = styled(Img)`
  ${tw`z-10 shadow-lg rounded-3xl w-full`}
  max-height: 403px;
`;

const SubmitButton = styled.button`
  ${tw`mt-5 text-center items-center justify-center bg-pink-400 flex transition duration-200 md:text-xl text-lg px-6 font-light py-3 focus:outline-none cursor-pointer transform`}
  ${tw`hocus:(text-white scale-105)`}
  ${tw`disabled:(opacity-50 pointer-events-none)`}
`;

const OmOss = ({ location }) => {
  const data = useContactPage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <Layout location={location}>
      <SEO
        title={`${data.rubrik}`}
        description={`${data.adress}, ${data.telefonnummer}, ${data.orgnr}`}
        pathname={location}
      />
      <div className="margin-nav ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16  lg:py-20 md:py-24  py-16">
            <div className="max-w-full lg:mx-0 mx-auto lg:text-left text-center">
              <HeadingOne>{data.rubrik}</HeadingOne>
              <HeroTextWrapper>
                <p>Adress: {data.adress}</p>
                <p>Telefonnummer: {data.telefonnummer}</p>
                <p>Organisationsnummer: {data.orgnr}</p>
              </HeroTextWrapper>
            </div>
            <div>
              <StyledImage fluid={data.bild.fluid} />
            </div>
          </div>
        </div>
        <ContactSection>
          <div className="container mx-auto">
            <Content>
              <ContactWrapper>
                <form
                  className="flex flex-col lg:w-8/12 w-full"
                  name="Contact Form"
                  method="POST"
                  data-netlify="true"
                  action="/tack"
                >
                  <Label htmlFor="form-name">Namn</Label>
                  <Input
                    required
                    type="text"
                    name="form-name"
                    value={name}
                    placeholder="Ditt namn"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Label htmlFor="email">Email</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Din email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Label htmlFor="meddelande">Meddelande</Label>
                  <TextArea
                    required
                    rows="4"
                    cols="50"
                    type="text"
                    name="meddelande"
                    placeholder="Skriv ett meddelande"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <SubmitButton
                    disabled={name === "" || email === "" || text === ""}
                    type="submit"
                  >
                    Skicka meddelande
                  </SubmitButton>
                </form>
              </ContactWrapper>
              <div>
                {typeof window != "undefined" && (
                  <GoogleMapWrapper>
                    <iframe
                      title="google maps"
                      width="100%"
                      height="650"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Umestan%20F%C3%B6retagspark%20Hus%203%2C%20903%2047%20Ume%C3%A5&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      scrolling="no"
                    ></iframe>
                  </GoogleMapWrapper>
                )}
              </div>
            </Content>
          </div>
        </ContactSection>
      </div>
    </Layout>
  );
};

export default OmOss;
