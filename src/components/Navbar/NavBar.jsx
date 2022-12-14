import {Link} from 'react-router-dom'
import CartWidge from '../CardWidget/CartWidge'
import Logo from '../Logo/Logo'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
  
  <>
    <Link to='/'>
      <Logo/>
    </Link>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/categoria/callerasypouch' >CALLERAS Y POUCH</Link>
            <Link to='/categoria/calzas' className='mt-2'>CALZAS</Link>
            <Link to='/categoria/remeras' className='mt-2'>REMERAS</Link>
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart'>
          <CartWidge/>
        </Link>
      </Container>
    </Navbar>
  </>  
  )
}

export default NavBar
