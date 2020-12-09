import React, { useState, useEffect } from "react";
import tw, { styled, css } from "twin.macro";
import { Link } from "gatsby";
import { StyledLink } from "../Shared/Button";
import Logo from "../../assets/aweko-logo.inline.svg";
import Burger from "./Hamburger";

function Navbar({ openMenu }) {
  const [open, setOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const openToggle = (o) => {
    setOpen(o);
    openMenu(o);
  };

  return (
    <NavbarWrapper scrolling={scrolling ? 1 : 0}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <LogoWrappper />
          </Link>
          <nav>
            <div>
              <NavList>
                <NavListItem>
                  <NavLink activeClassName="active" to="/">
                    Hem
                  </NavLink>
                </NavListItem>
                <NavListItem>
                  <NavLink activeClassName="active" to="/tjanster">
                    Tjänster
                  </NavLink>
                </NavListItem>
                <NavListItem className="mr-5">
                  <NavLink activeClassName="active" to="/om-oss">
                    Om oss
                  </NavLink>
                </NavListItem>
                <NavListItem>
                  <StyledLink isSecondary toPath={"/kontakt"}>
                    Kontakta oss
                  </StyledLink>
                </NavListItem>
              </NavList>
            </div>
            <NavListMobile open={open}>
              <NavListMobileItem>
                <Burger
                  className={`${open ? "is-open" : ""} `}
                  open={open}
                  setOpen={(o) => openToggle(o)}
                />
              </NavListMobileItem>
            </NavListMobile>
          </nav>
        </div>
      </div>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.header(({ open, scrolling }) => [
  tw`border-black fixed top-0 w-full z-30 `,
  open && tw`bg-pink-400`,

  css`
    transition: all 0.3s ease;
    &.is-open {
      background-color: transparent;
    }
    background: #f9f6f3;
    background: rgba(255, 255, 255, 0.85);
    background-color: #fff;
    background-color: #f6f4f2;
    background: rgba(246, 244, 242, 1);
    border-color: rgba(0, 0, 0, 0.05);
  `,
  scrolling &&
    css`
      background: rgba(246, 244, 242, 0.96);
      nav {
        ul {
          li {
            a:not(.nav-button) {
              padding-top: 1.75rem;
              padding-bottom: 1.75rem;
            }
          }
        }
      }
    `,
]);
const NavList = styled.ul`
  ${tw`flex md:flex hidden`}
`;
const NavListMobile = styled.ul`
  ${tw`flex py-5 md:hidden flex`}
`;
const NavListMobileItem = styled.li`
  ${tw`items-center flex `}
`;
const NavListItem = styled.li`
  ${tw`items-center flex`}
`;
const NavLink = styled(Link)(() => [
  tw`px-8 py-8 md:text-xl text-lg font-light transition-all duration-300 hocus:border-pink-400 hocus:(text-pink-400)`,
  css`
    display: block;
    color: black;
    text-align: center;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-top: -2px;

    &.active {
      border-bottom: 2px solid;
      ${tw`border-black text-black`}
    }
  `,
]);
const LogoWrappper = styled(Logo)(() => [
  tw`w-full z-50 `,
  css`
    max-width: 110px;
    path {
      transition: all 0.3s ease;
    }
    &:hover {
      & path {
        fill: #f687b3;
      }
    }
  `,
]);

export default Navbar;
