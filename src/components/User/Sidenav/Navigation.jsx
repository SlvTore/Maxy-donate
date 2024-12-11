import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Back } from 'react-bootstrap-icons';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="body-tertiary" fixed="top">
      <Container fluid>
        <Button variant="light" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="start" >
          <Offcanvas.Header closeButton className='d-flex justify-content-center align-items-center text-center'>
            <Offcanvas.Title ><img src={require("../../../assets/Logo-maxy-round.png")}></img></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Item >
                <Link to='/'>Home</Link>
              </Nav.Item>
              <Nav.Item className='my-3'>
                <Link to="/aboutus">About Us</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Link</Link>
              </Nav.Item>
              <Nav.Item className='my-3'>
                <Link to="/">Link</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Link</Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand href="#">Offcanvas navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;