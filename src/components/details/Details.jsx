import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Details.css';

const Details = () => {

let params=useParams();
//console.log(params);

const [item,setitem]=useState([]);
const [content, setContent] = useState();
const [video, setVideo] = useState();


const getmove=async()=>{
  const {data}=await axios.get(`https://api.themoviedb.org/3/${params.media}/${params.id}/credits?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US`)
  console.log(data)
  setitem(data.cast)
}

const fetchData = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${params.media}/${params.id}?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US`
  );
// console.log(data);
  setContent(data);
  //console.log(data);
};

const fetchVideo = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${params.media}/${params.id}/videos?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en-US`
  );
    //console.log(data);
  setVideo(data.results[0]?.key);
};


useEffect(() => {
  fetchData();
  fetchVideo();
  getmove();
  // eslint-disable-next-line
}, []);


/*cursol */
const handleDragStart = (e) => e.preventDefault();

const items=item.map((i)=>( 
   <div className='item'>  
    <img src={i.profile_path?"https://image.tmdb.org/t/p/w300"+i.profile_path:"https://via.placeholder.com/400"} onDragStart={handleDragStart} role="presentation"  className='image'/>,
    <span className='name fw-bold'>{i.name}</span>
   </div>
));

const resp={
  0: {
      items: 1,
  },

  512:{
items:5,
  },

  1024: {
      items: 3,
      itemsFit: 'contain',
  }
}

  return (
    <div className='details container'>
     {content && (
            <div>
              <div className="Content">
  <img alt={content.name || content.title}
 className="Contentimg" src={content.poster_path?"https://image.tmdb.org/t/p/w500"+content.poster_path :"https://via.placeholder.com/400"}/>
           
<div className="Content-about">
 <span className="Content-title">
  {content.name || content.title} 
  </span>
  {content.tagline && (
    <i className="tagline">{content.tagline}</i>
  ) }
 <span className="Content-desc">
   {content.overview}
    </span>

 <div>
   <AliceCarousel autoPlay  mouseTracking items={items} disableButtonsControls disableDotsControls  responsive={resp} />
    </div>
 <Link target="__blank" className='btn vediobtn fw-bold' to={`https://www.youtube.com/watch?v=${video}`}><i class="fa-brands fa-youtube fs-5 me-2  text-danger "></i> Watch Now!</Link>
                 
                 
 </div>
 </div>
 </div>

     )}

 <Link className=' mt-5 mb-5 text-decoration-none  d-flex justify-content-center align-items-center backbtn' to='/trending'><i class="fa-solid fa-backward   fs-2 p-2"></i></Link>

 


 </div>

)
}

export default Details;
