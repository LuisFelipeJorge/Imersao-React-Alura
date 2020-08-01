import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import { LogoImage, MenuWrapper } from './style';
import Button from '../Button';

// import ButtonLink from './Components/ButtonLink'


function Menu() {
  return(
    <MenuWrapper className="Menu" >
      <Link to="/">
        <LogoImage src={Logo} alt="Jorgeflix logo" />
      </Link>
      <Button as={Link} to="/registration/video">
        New Video
      </Button>
    </MenuWrapper>
  );
}

export default Menu;


