import Link from 'next/link';
import * as React from 'react';
import {
  Button,
  Nav,
  Form,
  Navbar,
  FormControl,
  Image,
  Container,
} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const name = 'Maxim';
const title = 'Maxim';
// mix-blend-mode: exclusion;
// backdrop-filter: blur()
// create custom png files for each nav tab?
// invert color https://revelry.co/css-font-color/
// flex-flow: nowrap
const MyNavbar = () => {
  return (
    <Navbar
      variant="light"
      expand="sm"
      bg="white"
      className="flex justify-center py-0 px-4 uppercase"
      fixed="top"
    >
      <Container className="col-sm-auto">
        <Link href="/">
          <Nav className="4p-2 mx-3 font-bold text-base">
            <Image
              alt=""
              src="/images/profile.png"
              width="24"
              height="24"
              className="cursor-pointer inline-block mr-2"
              roundedCircle
            />
            <p className="inline-block cursor-pointer text-base m-0 content-center whitespace-nowrap">
              {' '}
              {title}
            </p>
          </Nav>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/blog">
              <span className="p-2 mx-3 cursor-pointer rounded-md h-15 text-base font-bold whitespace-nowrap">
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span className="p-2 mx-3 cursor-pointer rounded-md h-15 text-base font-bold whitespace-nowrap">
                About me
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
