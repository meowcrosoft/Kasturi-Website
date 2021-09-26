import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' style={{width:"80%"}}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/project-lab' activeStyle>
            PROJECT LAB
          </NavLink>
          <NavLink to='/about-me' activeStyle>
            ABOUT ME
          </NavLink>
          <NavLink to='/art-collection' activeStyle>
            ART COLLECTION
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
