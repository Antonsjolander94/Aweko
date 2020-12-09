import React from "react";
import { Link } from "gatsby";
import tw, { css } from "twin.macro";

const baseStyles = css`
  ${tw`bg-white flex items-center justify-center text-2xl  p-5 transform cursor-pointer rounded-xl`}
  ${tw`transform transition  duration-200`}
  ${tw`hocus:(scale-105 shadow-lg)`}
  ${tw`active:scale-100`}
  background-color: #FFD8E1;
  &:hover,
  &:focus {
    ${tw`bg-white`}
  }
`;

export const ServiceCard = ({ children, toPath }) => (
  <Link to={toPath} css={[baseStyles]}>
    {children}
  </Link>
);
