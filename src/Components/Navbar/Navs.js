import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  const downloadResume = () => {
    // Replace 'your-resume-file.pdf' with the path to your resume file
    const resumeUrl = '/path/to/your-resume-file.pdf';
    
    // Create a temporary anchor element
    const anchorElement = document.createElement('a');
    anchorElement.href = resumeUrl;
    
    // Set the download attribute and filename
    anchorElement.download = 'your-resume-filename.pdf';
    
    // Trigger the download
    anchorElement.click();
  };

  return (
    <Navbar expand="lg" className="bg-white" style={{ position: "fixed", top: "0px", width: "100%", background: '#f5f5f5', padding: "4px" }}>
      <Container fluid>
        <Navbar.Brand href="/">V Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Skills">Skills</Nav.Link>
            <Nav.Link href="/Experience">Experience</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Blogs">Blogs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-info" onClick={downloadResume}>Resume</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
