import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const ShopContent1 = () => {
  return (
    <section>
   <Container className='mt-2' fluid>
   <b className='fs-5'>Most Sold</b>
   </Container>
    <Container className='d-flex h-100 justify-content-evenly align-items-center mt-3 sellers'fluid>
      <div className="row">
        <div className="col-md-2 text-center mb-3 contain">
        <img variant="top" src="prod-2/img-1.jpg" className='img-size' />
          <h6 className='mt-2'>Gold Rush</h6>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
        <img variant="top" src="prod-2/img-2.jpg" className='img-size' />
          <h6 className='mt-2'>Black</h6>
    </div>


     <div className="col-md-2 text-center mb-3 contain">
        <img variant="top" src="prod-2/img-3.jpg" className='img-size' />
          <h6 className='mt-2'>R-Blues</h6>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
        <img variant="top" src="prod-2/img-4.jpg" className='img-size' />
          <h6 className='mt-2'>Round</h6>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
        <img variant="top" src="prod-2/img-5.jpg" className='img-size' />
          <h6 className='mt-2'>G-pods</h6>
    </div>

    <div className="col-md-2 text-center mb-3 contain">
        <img variant="top" src="prod-2/img-6.jpg" className='img-size' />
          <h6 className='mt-2'>Cancel-Pro</h6>
    </div>
    </div>
      </Container>
   </section>
  )
}

export default ShopContent1
