import React from "react";
import { styled } from "twin.macro";

const FooterWrapper = styled.footer`
  border-color: rgba(0, 0, 0, 0.05);
`;

function Footer() {
  return (
    <FooterWrapper className="body-font bg-white border-t">
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-black text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Aweko Nord AB
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
