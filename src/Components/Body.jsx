import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container} from 'react-bootstrap';
import ShopContent from './ShopContent';
import ShopContent1 from './ShopContent1';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'



const Body = () => {
    
  return (
    <>
    
   <Container className='mt-5'>
    <div className='row body-con'>
        <div className='col-lg-6 col-sm-12 img w-50'>
        
        </div>
        <div className='col-lg-6 col-sm-12 mt-5'>
        <h3>Unleash the Symphony of Superior Sound!</h3>
        <br/>
            I curate a collection of only the most extraordinary headphones, meticulously selected
             to deliver unparalleled audio bliss. Immerse yourself in a world where every note, beat,
              and rhythm takes on a whole new dimension of clarity, precision, and richness. Countless hours of 
              research and expertise have been poured into 
            assembling my repertoire of audio marvels. From noise-canceling wonders to bass-thumping powerhouses,
            each pair of headphones has been handpicked to ensure that only the crème de la crème graces your ears.
             I understand that headphones are more than just a vessel for
 melodies—they're an investment in your sonic pleasure. That's why I offer a selection of top-tier 
 brands renowned for their craftsmanship, durability, and exceptional build quality. Bid farewell to flimsy 
 earpieces and embrace the longevity of true sonic companions.
        </div>
        
    </div>
   </Container>

<ShopContent />

<Jumbotron />

<ShopContent1 />


   <section>
    <Container fluid className='d-flex h-100 flex-column align-items-center text-white bg-dark p-5 text-center mb-5'>
      <div>
        <h4>Sign Up</h4>
        <small>Join Our Mailing List To Be Notified on New Updates</small>
        <form className='form-horizontal'>
          <input className='input-group mt-3' type='email' placeholder='Email' />
          <FontAwesomeIcon icon={faCaretSquareRight} />
        </form>
      </div>
    
    </Container>
   </section>

   <Footer />

   
   </>
  )
}

export default Body
