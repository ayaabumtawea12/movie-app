import React from 'react';
import { Chip } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './Genres.css';

const Genres = ({settakegenres,takegenres, 
    genres ,
    setgenres ,
    selectedgenres ,
    setselectedgenres ,
    setpage
 }) => {

//const [geners,setgeners]=useState([]);
 
const genereadd= (genre) => {
    setselectedgenres ([...selectedgenres, genre]);
    setgenres(genres.filter((g) => g.id !== genre.id));
    setpage(1);
   // settakegenres(genre.id);
  };

  const genereremove= (genre) => {
    setselectedgenres(
        selectedgenres.filter((selected) => selected.id !== genre.id)
    );
    setgenres([...genres, genre]);
    setpage(1);
  };

const getgeners=async ()=>{

    const {data} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US');
    //console.log(data);
    setgenres(data?.genres);
 }
 


useEffect(() => {
    getgeners();

return ()=>{
    setgenres({})
}
}, []);

//const addgenere=(gener)=>{
//console.log(gener);
//settakegenres(gener.id);
//console.log(takegenres);
//}

 

return (

<>


<div style={{ padding:'10px 0'  }} className='mt-3'  >
{ selectedgenres  &&   selectedgenres.map((gener,index)=>( 

<Chip key={gener.id} style={{ fontSize: "1.2rem",margin:"3px",color:'#343739' }} onDelete={()=>genereremove(gener)}  label={gener.name} color='info' clickable  />

))
}



{ genres  &&   genres.map((gener,index)=>( 

<Chip key={gener.id} style={{ fontSize: "1.2rem",margin:"3px",color:'#343739' }} onClick={()=>genereadd(gener)}  label={gener.name} color='info' clickable  />

))
}
</div>
 
</>

)
  
}

export default Genres;
