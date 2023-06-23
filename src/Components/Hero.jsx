import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Button} from 'react-bootstrap'



const Hero = () => {

  return (
    <>

      <div className="hero">
         <Container className='d-flex h-100 justify-content-start align-items-center'>
            <div className='hero-text'>
            <h2>Elevate Your Music With <br/>Premium Headphones</h2>
            <small>Discover our selection of high-quality headphones designed for music lovers and <br/>audiophiles.
              Enjoy crystal-clear sound and ergonomic designs with over-ear, on-ear, or<br/> in-ear options.
               Shop now and upgrade your listening experience.
            </small>
            <div className='mt-4'>
            <Button variant='light' className='me-4 text-nowrap'>
              Shop Now
            </Button>
              <Button variant='outline-light' className='text-nowrap'>
                Get Started
            </Button>
            </div>
            <div className="charts d-flex h-100 justify-content-evenly align-items-center mt-4">
              <div>
                <small>Up to</small><br/>
                <b>39K</b><br/>
                <small>Customers</small>
              </div>
              <div >
              <small>Up to</small><br/>
                <b>184K</b><br/>
                <small>members</small>
              </div>
              <div>
              <small>Up to</small><br/>
                <b>6M</b><br/>
                <small>Visitors</small>
              </div>
    </div>
            </div>
    </Container>
      </div>


    </>
  )
}

export default Hero
