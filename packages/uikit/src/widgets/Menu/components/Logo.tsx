import React, { useContext } from "react";
import Image from 'next/image'
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";


interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <p className="mobile-icon" > DEX </p> */}
      {/* <img src={img} alt="Logo" className="mobile-icon"/> */}
       {/* <p className="desktop-icon" > UniExchange</p> */}
       <Image className="desktop-icon" src='/images/unilogo.png' width='10' height='10' alt='logo'/>
       <Image className="mobile-icon" src='/images/uniLogoMobile.png' width='10' height='10' alt='logo'/>
       {/* <Image className="mobile-icon" src='/images/unilogo.png' width='1000' height='100'alt='logo'/> */}
      {/* <LogoIcon className="mobile-icon" /> */}
      {/* <LogoWithTextIcon className="desktop-icon" /> */}
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
