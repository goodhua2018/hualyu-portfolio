import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNav() {
  return (
    <div className="nav-bar">
      
      <Navbar >
        <Container  >
          <Navbar.Brand href="#home" bg="light" expand="lg"  style={{color:'#e8603c', fontSize:'2rem'}}>Hua Lyu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#features">My projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>  
            <Nav.Link href="#pricing">Resume</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNav;