import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Soundbar from './Soundbar.jsx';
import AM from '../Visuals/AM.png';

function Bar () {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
          <img src={AM} alt="" width="80" height="80" />
          
          
        </Navbar.Brand>
        <br/>

        <div className="bar">  
        <Nav.Item  >
          <Soundbar />
        </Nav.Item>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
         
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <br/>
        

        




        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
               Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                 About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/work"
                onClick={() => updateExpanded(false)}
              >
                 Work 
              </Nav.Link>
            </Nav.Item>

            


            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;
