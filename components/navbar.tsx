import * as React from 'react';
import { Button, Nav, Form, Navbar, FormControl, Image } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const name = 'Maxim';

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="white" variant="light">
        <Navbar.Brand href="/" className="px-4 rounded">
          <Image
            alt=""
            src="/images/profile.png"
            width="50"
            height="50"
            className="d-inline-block align-center"
            roundedCircle
          />{' '}
          My Blog
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="" href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/about">About me</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
