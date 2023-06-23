import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Container, Button, Navbar } from 'react-bootstrap'
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
      <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link to ='/' className='text-white link-info'>Home</Nav.Link>
          <Nav.Link to='/shop' className='text-white link-info'>Shop</Nav.Link>
        </Nav>

        <Button variant="light">Sign In</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Navigation
