import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, NavDropdown, Container, Button, Navbar } from 'react-bootstrap'
import { useState, useRef, useEffect} from 'react';

const Navigation = () => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <>
    <Navbar expand="lg" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'black' : 'transparent'}}>
    <Container>
      <Navbar.Brand href="#home" className='text-white'>LiteBuds</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to='/' className='text-white link-info'>Home</Nav.Link>
          <Nav.Link to='/about' className='text-white link-info'>About</Nav.Link>
          <Nav.Link to='/contact' className='text-white link-info'>Contact Us</Nav.Link>
          <Button variant='light'>Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Navigation
