import { IoArrowForwardSharp } from 'react-icons/io5';
import cook from '../src/assets/cook.jpeg';
import smile from '../src/assets/smile.jpeg';
import './App.css';
import Navbar from './Navbar';


function App() {
    return (
     <div className='container'>
      <Navbar />
      <section id='hero' className='hero'>
       <div className='inner'>
        <p className='title'>
         Together, we can make the world a better place, one plate at a time
        </p>
        <span>
         Donate&nbsp;
         <IoArrowForwardSharp />
        </span>
       </div>
      </section>

      <section id='card1' className='card'>
       <h3>20,000</h3>
       <h4>Number of Meals Served</h4>
       <p>We have served over 20,000 meals.</p>
       <span>
        Donate&nbsp;
        <IoArrowForwardSharp />
       </span>
      </section>
      <section id='card2' className='card'>
       <h3>3,000</h3>
       <h4>Number of People Fed</h4>
       <p>We have fed over 3000 people.</p>
       <span>
        Learn More&nbsp;
        <IoArrowForwardSharp />
       </span>
      </section>
      <section id='card3' className='card'>
       <h3>300</h3>
       <h4>Number of Volunteers</h4>
       <p>Over 300 people have voluntered.</p>
       <span>
        Volunteer&nbsp;
        <IoArrowForwardSharp />
       </span>
      </section>

      <section id='more1' className='more'>
       <div className='more__img'>
        <img src={cook} alt='cook' />
       </div>
       <div className='more-text'>
        <h3>Get Help</h3>
        <p>
         We have a variety of programs to help those in need. We distribute food
         to pantries in our city. We offer nutrition education to teach people
         how to eat healthy on a budget.
        </p>
        <span>
         Learn More&nbsp;&nbsp;
         <IoArrowForwardSharp />
        </span>
       </div>
      </section>
      <section id='more2' className='more more-reversed'>
       <div className='more__img'>
        <img src={smile} alt='smile' />
       </div>
       <div className='more-text'>
        <h3>Our Impact</h3>
        <p>
         <b>Your partnership makes all the difference.</b> Together we can
         alleviate hunger in our city by provoding healthy to every person
         everyday.
        </p>
       </div>
      </section>

      <footer className='footer'>© FoodBank. All rights reserved.</footer>
     </div>
    );
}

export default App;
