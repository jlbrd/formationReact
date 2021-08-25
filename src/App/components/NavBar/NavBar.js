import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

const NavBar = () => (
  <div className={styles.NavBar} data-testid="NavBar">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        {/*<Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
        <Nav.Link href="/editor">Features</Nav.Link>
<Nav.Link href="/pricing">Pricing</Nav.Link>*/}
        <LinkContainer to="/thumbnail"><Button>Galerie</Button></LinkContainer>
        <LinkContainer to="/editor"><Button>Création</Button></LinkContainer>
      </Nav>
      <Form inline>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
