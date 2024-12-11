import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="body-tertiary" fixed="top">
      <Container fluid>
        <Button variant="primary" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Item>
                <Link to='/'>Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" id="navbarDropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mt-3" role="search">
              <Form.Control type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand href="#">Offcanvas navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;