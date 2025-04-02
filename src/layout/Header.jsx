


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/home"} className="mx-4 text-decoration-none">Home</NavLink>
            <NavLink to={'/dashboard'} className="mx-4 text-decoration-none" >dashboard</NavLink>
            <NavLink to={'/login'} className="mx-4 text-decoration-none">login</NavLink>
            {/* <h1 className='bg-danger'> hellwo</h1> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;



export const Header=()=>{
    return (
        <>
        
        <BasicExample />
        </>
    )
}