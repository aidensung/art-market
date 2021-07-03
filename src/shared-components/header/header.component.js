import React from "react";

import Logo from "../../assets/artmarket.png";

import { HeaderContainer, LogoContainer } from "./header.styles.js";

export const Headeer = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo classname="logo" />
    </LogoContainer>
  </HeaderContainer>
);
