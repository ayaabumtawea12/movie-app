import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cpagination from '../Pagination/Cpagination';
import  './Searchmovie.css';
  

const Searchtv = () => {

     
    const [searchtext, setsearchtext] = useState("");
    const [results, setresults] = useState([]);
    const [page,setpage]=useState(2);
    const [npages,setnpages]=useState(1);


  const getsearch = async () => {
     
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US&query=${searchtext}&page=${page}&include_adult=false`
      );
      setresults(data.results);
      setnpages(data.total_pages)
      //console.log(data);
  };


  
useEffect(() => {
window.scroll(0, 0);
getsearch();
// eslint-disable-next-line
}, [searchtext,page]);

return (
 <> 
  
<div className='container Movie'>
<h1 className='text-dark mt-5'>Search Movies</h1>
<div className='searchbox'> 
<div className="search-box ">
  <button className="btn-search" onClick={getsearch}><i className="fas fa-search" /></button>
  <input type="text" className="input-search" placeholder="Type to Search..."   onChange={(e) => setsearchtext(e.target.value)}/>
</div>
</div>

<div className='container'>  
{results && results.map((movie,index)=>( 
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

<Link to={`/details/movie/${movie.id}`} className='btn '>More...</Link>
</div>
</div>

))
} 
 </div>
 

 
<div className='mb-5'>  
{npages>1 && 
<Cpagination setpage={setpage} setnpages={setnpages}  npages={npages} />
}
</div>

</div>
 </>

)

}

export default Searchtv;
