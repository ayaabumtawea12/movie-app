import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
  <footer>  
  <div className="row">
    <div className="col-sm-6 col-md-4 col-lg-4 footer-navigation">
      <h3>Movies</h3>
      <p className="links"><Link to='/about'>About</Link><strong> · </strong><Link to="/trending">Trending</Link><strong> · </strong><Link to="/movies">Movies</Link><strong> · </strong><Link to="/tvseries">TVSeries</Link><strong> · </strong> </p>
      <p className="name">Movies &copy; 2023</p>
    </div>

    <div className="col-sm-6 col-md-4   col-lg-4  footer-contacts">
      <div  className='d-flex gap-2 ' >
      <i class="fa-solid fa-location-dot"></i>
      <p>USA</p>
      </div>

      <div className='d-flex gap-2 '>
      <i class="fa-solid fa-phone"></i> 
      <p className="footer-center-info email text-left">9485045958</p>
      </div>

      <div  className='d-flex gap-2'>
      <i class="fa-solid fa-envelope"></i>
        <p><a href="#">support@movies.com</a></p>
      </div>
    </div>
  
    <div className="col-md-4  col-lg-4 footer-about">
      <h4>About the Movies</h4>
      <p>Movies are one of the leading websites to enjoy your watching time .</p>
      <div className="social-links social-icons"><a href="#"><i class="fa-brands fa-facebook-f text-light "></i></a><a href="#"><i class="fa-brands fa-twitter text-light"></i></a><a href="#"><i class="fa-brands fa-linkedin-in text-light"></i> </a><a href="#"><i class="fa-brands fa-dribbble text-light"></i> </a></div>
    </div>
  </div>
  </footer>


  
       
   
  )
}

export default Footer
