import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Container, Button } from '@material-ui/core';

const Header = () => {
  return (
    <Container maxWidth style={{ position: 'fixed' }}>
      <Button>
        <Link to="home" smooth={true} spy={true} duration={500}>
          Home
        </Link>
      </Button>
      <Button>
        <Link to="portfolio" smooth={true} spy={true} duration={500}>
          Portfolio
        </Link>
      </Button>
      <Button>
        <Link to="about" smooth={true} spy={true} duration={500}>
          About
        </Link>
      </Button>
    </Container>
  );
};

export default Header;
