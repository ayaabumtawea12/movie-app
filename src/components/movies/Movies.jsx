import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Genres from '../genres/Genres';
import Cpagination from '../Pagination/Cpagination';
import useGenre from '../utlies/useGener';
import './Movie.css';


const Movies = () => {
const [movies,setmovies]=useState([]);
const [page,setpage]=useState(2);
const [npages,setnpages]=useState(1);
//const [takegenres,settakegenres]=useState();
const [selectedgenres,setselectedgenres]=useState([]);
const [genres,setgenres]=useState([]); 
const takegenres=useGenre(selectedgenres);

const getmovie=async()=> {
  const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}&with_genres=${takegenres}`)
  //console.log(data);
  setmovies(data.results);
  setnpages(data.total_pages)
}

useEffect(()=>{
getmovie();
},[page,takegenres])


 
  return (
<div className='Movie container'>

 
<h1 className='text-dark mt-5 text-uppercase'>Movies</h1>

 

 


<Genres 
 takegenres={takegenres} 
 genres={genres} 
 setgenres={setgenres}
 selectedgenres={selectedgenres}
 setselectedgenres={setselectedgenres}
 setpage={setpage}
 />


<div className='container'>
{movies && movies.map((movie,index)=>( 
<div className="movie position-relative " key={movie.id}>

<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
 {movie.vote_average}
 
</span>
 


<div>
  <p>{movie.first_air_date || movie.release_date}</p>
</div>

<div>
<img src={movie.poster_path?"https://image.tmdb.org/t/p/w300"+movie.poster_path :"https://via.placeholder.com/400"}/>
</div>

<div>
  <p className='text-white'>movie</p>
  <h3>{movie.title || movie.name}</h3>
</div>
</div>

    ))}
 </div>
 
    
    {npages>1 && 
    <Cpagination setpage={setpage} setnpages={setnpages}  npages={npages} />
  }
 </div>
  )
  
}

export default Movies;
