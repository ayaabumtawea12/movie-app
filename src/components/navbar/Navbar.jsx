import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cookies from 'react-cookies';
import './Navbar.css';


const Navbar = ({user,setUser}) => {

  let navigate = useNavigate();
  let logout=()=>{
    setUser(null);
    cookies.remove('token');
navigate('/login');
}

  return (
<div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary   fixed-top" style={{zIndex:"99999999999" }}>
  <div className="container">
    <Link className="navbar-brand text-white text-uppercase"><i class="fa-solid fa-clapperboard"></i> Movies</Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {user ? <> 

        <li className="nav-item">
          <Link className="nav-link fw-bold text-white navlink" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link fw-bold text-white navlink" to="/trending">Trending</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white navlink" to="/movies">Movies</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link fw-bold text-white navlink" to="/tvseries">TVSeries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white navlink" to="/search">Search</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link  fw-bold text-white btn " to="/login" onClick={logout}>Logout</Link>
        </li>

        </> : <> 
        
        <li className="nav-item">
          <Link className="nav-link btn me-2 fw-bold text-white mb-2" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn me-2  fw-bold text-white"  to="/login">Login</Link>
        </li>
   
              
     </>
     }

      </ul>
    </div>
  </div>
</nav>

</div> 
  )
}

export default Navbar
