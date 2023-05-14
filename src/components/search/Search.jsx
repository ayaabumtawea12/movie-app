import React from 'react'
import { Link } from 'react-router-dom'
 
const Home = () => {
  return (  
 <div className="container text-center my-5 Home d-flex justify-content-center align-items-center flex-column">
  <h4 className='hometitle'>Search now for your favorite Movies or Tv to enjoy watching</h4>
  <div className="buttons d-flex justify-content-center align-items-center  flex-column">
    <Link href="login.html" className="btn btn-default-outline my-4 log-btn" to='/searchmovie'><i class="fa-solid fa-clapperboard"></i>Movies</Link>
    <Link href="register.html" className="btn btn-default-outline reg-btn" to='/searchtv'><i class="fa-solid fa-tv"></i>Tvseries</Link>
  </div>
  </div>
      
  ) 
}

export default Home;