import React from "react";
import { bool, func } from "prop-types";
import tw, { styled, css } from "twin.macro";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div css={[open && firstLine]} />
      <div css={[open && secondLine]} />
      <div css={[open && thirdLine]} />
    </StyledBurger>
  );
};

const StyledBurger = styled.button(() => [
  tw`flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50 `,
  tw`hover:outline-none`,
  css`
    &.is-open {
      position: absolute;
    }
    &:hover {
      div {
        background: rgba(0, 0, 0, 1);
      }
    }
    div {
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
      transform: rotate(0);

      :first-of-type {
        transform: rotate(0);
      }

      :nth-of-type(2) {
        opacity: 1;
        transform: translateX(0);
      }

      :nth-of-type(3) {
        transform: rotate(0);
      }
    }
  `,
]);

const firstLine = css`
  transform: rotate(45deg) !important;
`;
const secondLine = css`
  opacity: 0 !important;
  transform: translateX(20px) !important;
`;
const thirdLine = css`
  transform: rotate(-45deg) !important;
`;

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
