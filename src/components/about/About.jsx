import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import './About.css';

const About = ({media_type,id}) => {

const [item,setitem]=useState([]);


const getmove=async()=>{
  const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=6`)
  console.log(data)
  setitem(data.results)
}

useEffect(() => {
  
  getmove();
  // eslint-disable-next-line
}, []);



const handleDragStart = (e) => e.preventDefault();

const items=item.map((i,index)=>( 
  <>  
  
   <div className='itemc' key={i.id}>  
    <img src={i.poster_path?"https://image.tmdb.org/t/p/w300"+i.poster_path:"https://via.placeholder.com/400"} onDragStart={handleDragStart} role="presentation"  className='imagecars  d-flex justify-content-center align-items-center'/>,
   </div>

   </>
));

const resp={
  0: {
      items: 2,
  },

  512:{
items:3,
  },

  1024: {
      items: 5,
      itemsFit: 'contain',
  }
}


  return (
    <div className='about'>  
    <header className='About'>
    <AliceCarousel autoPlay  mouseTracking items={items} disableButtonsControls disableDotsControls  responsive={resp} />
    <Link className='btn btnabout bg-dark  text-white fw-bold rounded-3 border border-5' to='/trending'>View All</Link>
    </header>

  <h1 className='text-dark mt-5 text-center'>About</h1>
  
  <div className='container gap-3  d-flex justify-content-center align-items-center mt-5 mb-5'>
  <div className='col-lg-6  col-md-6 imgabout'>
  <img src='images/img.jpg' className=' ' /> 
  </div>
  <div  className='col-lg-6  col-md-6 '>  
  <p>Many people enjoy talking about movies. We can talk about movies in casual situations with our friends or family, but we can also talk about movies with business clients or co-workers when we do not have anything else to say and we are just trying to make small talk.
  <pre>

  </pre>
  This site displays a wide range of movies, where you can search for the movie you want and watch it directly on the YouTube channel. We wish you a pleasant viewing.

  </p>
  </div>
  <p></p>
  </div>
    </div>
  )
}

export default About;
