import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
  return (
    <footer>
  <hr/>
 <Container fluid className='d-flex h-100 justify-content-center align-items-center p-2'>
        <b className='text-dark fs-6'>&copy; 2025 LiteBuds</b>
 </Container>
</footer>
  )
}

export default Footer
