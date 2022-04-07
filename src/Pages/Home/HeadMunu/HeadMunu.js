import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './HeadMenu.css'
const HeadMunu = () => {

  const { user, logout } = useAuth();

    return (
        <div className='shadow-sm'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Nav.Link as={Link} to="/home" className="logo">
              <span className="red">Food</span>
              <span className="blur">Hut</span>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/explore">
                  Explore
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboards">
                  Dashboard
                </Nav.Link>
                
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>
              <Nav>
              {user.email && (
                <Navbar.Text className="fw-bold fst-italic">
                  {" "}
                  <span className="name">
                    {" "}
                    Hi, {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
              {user?.email ? (
                <Nav.Link >
                  <button className="button" onClick={logout}>
                    Logout
                  </button>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="button">Login</button>
                </Nav.Link>
              )}
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default HeadMunu;