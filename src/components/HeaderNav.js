import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HeaderNav() {
  return (
    <div className="nav-bar">
      <Navbar bg="light" expand="lg">
        <Container  >
          <Navbar.Brand 
            style={{color:'#e8603c', fontSize:'2rem'}} className="nav-title" 
            href="/"
          >
            Hua Lyu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-right-side" style={{fontSize: '1.3rem'}}>
              <Nav.Link href="#aboutme" >About me</Nav.Link>
              <Nav.Link href="#projects">My projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>  
              <Nav.Link 
                href="https://www.canva.com/design/DAFOiWC3KAs/miagV8wI2C4KtG21FDXkoQ/view?utm_content=DAFOiWC3KAs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              >
                Resume
              </Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
