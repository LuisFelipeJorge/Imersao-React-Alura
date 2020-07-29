import React from 'react';
import Logo from '../../assets/images/logo.png';
import './styles.css'
// import ButtonLink from './Components/ButtonLink'
import Button from '../Button';

function Menu() {
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="My logo"/>
      </a>
      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;