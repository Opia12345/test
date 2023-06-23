import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Jumbotron = () => {
  return (
    <section>
    <Container fluid>
    <div className=' jumbotron text-light mb-4 mt-5 '>
  <small className='text-light d-flex h-100 justify-content-center flex-column align-items-center fs-3 p-5'>
    Get 30% Discount on any purchase today!
    <Button variant='outline-light' className='mt-3'>Shop Now</Button>
  </small>
    </div>
      </Container>
    </section>
  )
}

export default Jumbotron
