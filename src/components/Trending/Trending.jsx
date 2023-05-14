import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Cpagination from '../Pagination/Cpagination';
import { Link } from 'react-router-dom';
import './Trending.css';
 
 
 
 

 const Trending = () => {
const [trending,settrending]=useState([]);
const [page,setpage]=useState(1);
const [npages,setnpages]=useState();


 const gettrending=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&page=${page}`)
   // console.log(data);
    settrending(data.results);
    setnpages(data.total_pages);
}
//console.log(npages);

useEffect(() => {
   gettrending();
   
}, [page]);


 
 

return (
 
<div className='trending container'>
<h1 className='text-dark  mt-5 text-uppercase'>Trending</h1>
 

<div className='container'>

{trending && trending.map((tr,index)=>( 
<div className="movie position-relative " key={tr.id}>

<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
 {tr.vote_average}
 
</span>
 


<div>
  <p>{tr.first_air_date || tr.release_date}</p>
</div>

  
<div>
<img src={tr.poster_path?"https://image.tmdb.org/t/p/w300"+tr.poster_path :"https://via.placeholder.com/400"}/>
</div>
 
<div>
  <p className='text-white'>{tr.media_type}</p>
  <h3>{tr.title || tr.name}</h3>

  <Link to={`/details/${tr.media_type}/${tr.id}`} className='btn '>More...</Link>
 
 
</div>
</div>
 
    ))}
 </div>
 
  
 <Cpagination setpage={setpage} setnpages={ setnpages} npages={npages}/>
 </div>
  )
  
}

export default Trending;
 