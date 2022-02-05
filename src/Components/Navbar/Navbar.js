import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.styled";


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/boxes">Cats with Boxes</NavbarLink>
            <NavbarLink to="/clothes">Cat Clothes</NavbarLink>
            <NavbarLink to="/sinks">Cat Sinks</NavbarLink>
            <NavbarLink to="/hats">Cat Hats</NavbarLink>
            <NavbarLink to="/space">Space Cats</NavbarLink>
            <NavbarLink to="/sunglasses">Cat Sunglasses</NavbarLink>
            <NavbarLink to="/ties">Ties for Cats</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/boxes"> Cats with Boxes</NavbarLinkExtended>
          <NavbarLinkExtended to="/clothes"> Cat Clothes</NavbarLinkExtended>
          <NavbarLinkExtended to="/sinks">Cat Sinks </NavbarLinkExtended>
          <NavbarLinkExtended to="/hats"> Cat hats</NavbarLinkExtended>
          <NavbarLinkExtended to="/space"> Space Cats</NavbarLinkExtended>
          <NavbarLinkExtended to="/sunglasses"> Cat Sunglasses</NavbarLinkExtended>
          <NavbarLinkExtended to="/ties">Ties for Cat</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;