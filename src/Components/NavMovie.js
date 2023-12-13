import { Nav,Navbar,Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const NavMovie=()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListMovie'>Movies</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovie