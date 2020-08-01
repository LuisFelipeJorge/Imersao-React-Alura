import React from 'react';
import Logo from '../../assets/images/logo.png';
import { LogoImage, MenuWrapper } from './style';
import Button from '../Button';

// import ButtonLink from './Components/ButtonLink'


function Menu() {
  return(
    <MenuWrapper className="Menu" >
      <a href="/">
        <LogoImage src={Logo} alt="Jorgeflix logo" />
      </a>
      <Button as="a" href="/">
        New Video
      </Button>
    </MenuWrapper>
  );
}

export default Menu;


