import { Link } from "gatsby";
import React from "react";
import tw, { css, styled } from "twin.macro";

export const ButtonAsLink = styled(Link)(
  ({ isPrimary, isNavbar, isSecondary, isSmall, inLine }) => [
    // The common button styles added with the tw import
    tw`md:text-xl text-sm px-6 text-black py-3 focus:outline-none  cursor-pointer`,
    tw`transform transition-transform transition duration-100`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hocus:(scale-105 text-white bg-pink-400 border-pink-400)`,

    // Use props to conditionally style your components
    isPrimary && tw`bg-black text-white border-black`,
    isNavbar && tw`ml-10`,
    inLine && tw`inline-block`,

    // Combine regular css with tailwind classes within backticks
    isSecondary && [
      css`
        &:hover {
          box-shadow: rgba(26, 30, 96, 0.05) 0px 2px 6px;
        }
      `,
      tw`border-2 text-black border-black`,
    ],

    // Conditional props can be added
    isSmall ? tw`text-sm` : tw`text-lg`,
  ]
);
const baseStyles = css`
  ${tw`flex text-xl px-6 text-black font-light py-3 focus:outline-none cursor-pointer transform`}
  ${tw`transform transition  duration-200`}
  ${tw`hocus:(scale-105 text-white bg-transparent bg-pink-400 border-pink-400)`}
  ${tw`active:scale-100`}
  svg {
    stroke-width: 2;
  }
  &.active {
    ${tw`bg-pink-300 border-pink-300`}
  }
  &:hover,
  &:focus {
    svg {
      ${tw`translate-x-1 scale-125`}
    }
  }
  &:active {
    svg {
      ${tw`translate-x-0 scale-100`}
    }
  }
`;
const primaryStyles = css`
  ${tw`bg-black text-white border-black`}
`;
const pinkStyles = css`
  ${tw`bg-pink-400 text-black border-pink-400 border-2`}
  ${tw`hocus:(bg-pink-300 text-white border-pink-300)`}
`;
const secondaryStyles = css`
  ${tw`border-2 text-black border-black border-black`}
  &:hover {
    box-shadow: rgba(26, 30, 96, 0.05) 0px 2px 6px;
    ${tw`border-2 text-white border-pink-400`}
  }
`;

const arrowStyles = css`
  ${tw`w-5 ml-5 transition-transform duration-100 transform translate-x-0`}
`;
const arrowPrimary = css`
  path: white;
`;
const arrowSecondary = css`
  path: white;
`;
const Arrow = ({ isPrimary, isSecondary, isPink }) => (
  <svg
    css={[
      arrowStyles,
      isPrimary && arrowPrimary,
      isSecondary && arrowSecondary,
      isPink && arrowPrimary,
    ]}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const StyledLink = ({
  arrow,
  children,
  isPrimary,
  isSecondary,
  isPink,
  toPath,
  activeClassName,
}) => (
  <Link
    to={toPath}
    className={activeClassName + ` nav-button`}
    css={[
      baseStyles,
      isPrimary && primaryStyles,
      isSecondary && secondaryStyles,
      isPink && pinkStyles,
    ]}
  >
    {children}
    {arrow && (
      <Arrow isPrimary={isPrimary} isSecondary={isSecondary} isPink={isPink} />
    )}
  </Link>
);
