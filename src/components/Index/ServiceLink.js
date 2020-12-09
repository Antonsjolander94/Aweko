import React from "react";
import { Link } from "gatsby";
import tw, { styled, css } from "twin.macro";

const baseStyles = css`
  ${tw`flex items-center lg:justify-start justify-center transform transition duration-200 text-black text-2xl transform cursor-pointer rounded-xl `}
  ${tw`hocus:(scale-105 underline)`}
`;

const Dot = styled.div`
  ${tw`bg-pink-400 w-2 h-2 mr-3 `}
`;

export const ServiceLink = ({ title, toPath }) => (
  <Link to={toPath} css={[baseStyles]}>
    <Dot />
    <h3 className="text-3xl font-light">{title}</h3>
  </Link>
);
