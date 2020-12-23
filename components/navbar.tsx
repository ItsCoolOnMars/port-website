import Link from 'next/link';
import * as React from 'react';
import { Button, Nav, Form, Navbar, FormControl, Image } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const name = 'Maxim';
const title = 'My Website';
//mix-blend-mode: exclusion;
//backdrop-filter: blur()
// create custom png files for each nav tab?
// invert color https://revelry.co/css-font-color/
const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="" variant="light" className="py-0 uppercase" fixed="top">
        <Link href="/">
          <Navbar.Brand
            href="/"
            className="px-2 my-1 mx-3 rounded h-15 font-bold"
          >
            <Image
              alt=""
              src="/images/profile.png"
              width="20"
              height="20"
              className="d-inline-block align-center"
              roundedCircle
            />{' '}
            {title}
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link href="/about">
            <span className="p-2 mx-3 cursor-pointer rounded-md h-15 font-bold">
              About me
            </span>
          </Link>
          <Link href="/blog">
            <span className="p-2 mx-3 cursor-pointer rounded-md h-15 font-bold">
              Blog
            </span>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
