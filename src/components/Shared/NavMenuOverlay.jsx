import React from "react";
import tw, { styled, css } from "twin.macro";
import { Link } from "gatsby";

const NavMenuOverlayWrapper = styled.div(({ open }) => [
  tw`fixed h-screen xl:hidden flex justify-center items-center inset-0  z-20 transform  translate-x-full `,
  open && tw` translate-x-0`,
  css`
    background: rgba(255, 216, 225, 1);

    transition: transform 0.3s ease;
    will-change: transform;
  `,
]);
const NavListMobile = styled.ul`
  ${tw`flex flex-col`}
`;
const NavListMobileItem = styled.li`
  ${tw`items-center flex justify-center last:mb-0 `}

  
`;

const NavLink = styled(Link)(() => [
  // The common button styles added with the tw import
  tw`items-center w-full items-center font-light text-3xl flex justify-center transition duration-300 transform py-3`,
  tw`hocus:(scale-105 text-white)`,
  css`
    &.active {
      color: black;
      text-decoration: underline;
    }
  `,
]);
const NavLinkExternal = styled.a(() => [
  // The common button styles added with the tw import
  tw`items-center w-full items-center font-light text-3xl flex justify-center transition duration-300 transform py-3`,
  tw`hocus:(scale-105 text-white)`,
  css`
    &.active {
      color: black;
      text-decoration: underline;
    }

  `,
]);

const NavMenuOverlay = ({ open }) => {
  return (
    <NavMenuOverlayWrapper open={open} tabindex="0">
      <div className="container mx-auto">
        <NavListMobile>
          <NavListMobileItem>
            <NavLink activeClassName="active" to="/">
              Hem
            </NavLink>
          </NavListMobileItem>
          <NavListMobileItem>
            <NavLink activeClassName="active" to="/tjanster">
              Tjänster
            </NavLink>
          </NavListMobileItem>
          <NavListMobileItem>
            <NavLinkExternal target="_blank" href="https://portal.aweko.se/">
              Aweko online
            </NavLinkExternal>
          </NavListMobileItem>
          <NavListMobileItem>
            <NavLink activeClassName="active" to="/om-oss">
              Om oss
            </NavLink>
          </NavListMobileItem>
          <NavListMobileItem>
            <NavLink activeClassName="active" to="/kontakt">
              Kontakta oss
            </NavLink>
          </NavListMobileItem>
        </NavListMobile>
      </div>
    </NavMenuOverlayWrapper>
  );
};

export default NavMenuOverlay;
