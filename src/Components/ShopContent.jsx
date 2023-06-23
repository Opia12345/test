import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Button} from 'react-bootstrap';

const ShopContent = () => {
  return (
    <>
       <section>
   <Container className='d-flex h-100 mt-3' fluid>
   <b className='fs-5'>New In: Now Live</b>
   </Container>
    <Container className='d-flex h-100 justify-content-evenly align-items-center mt-2 sellers'fluid>
      <div className="row">
      <div className="col-md-2 text-center mb-3 contain">
      <span className='badge bg-dark'>new</span>
      <img variant="top" src="img-1.jpg" className='img-size' />
          <h6 className='mt-2'>Routeound</h6>
          <small>$23.4</small>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
    <span className='badge bg-dark'>new</span>
        <img variant="top" src="img-2.jpg" className='img-size' />
          <h6 className='mt-2'>Blues</h6>
          <small>$32.5</small>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
    <span className='badge bg-dark'>new</span>
        <img variant="top" src="img-3.jpg" className='img-size' />
          <h6 className='mt-2'>Jamendo</h6>
          <small>$44.2</small>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
    <span className='badge bg-dark'>new</span>
        <img variant="top" src="img-4.jpg" className='img-size' />
          <h6 className='mt-2'>Predator</h6>
          <small>$23.4</small>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
    <span className='badge bg-dark'>new</span>
        <img variant="top" src="img-5.jpg" className='img-size' />
          <h6 className='mt-2'>Light</h6>
          <small>$32.5</small>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
    <span className='badge bg-dark'>new</span>
        <img variant="top" src="img-6.jpg" className='img-size' />
          <h6 className='mt-2'>Base</h6>
          <small>$44.2</small>
    </div>

      </div>
      </Container>
   </section>

 

   
    </>
  )
}

export default ShopContent
