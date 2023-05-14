import { Route, Routes } from 'react-router-dom';
import Genres from './components/genres/Genres';
import Movies from './components/movies/Movies';
import Navbar from './components/navbar/Navbar';
import Trending from './components/Trending/Trending';
import Tvseries from './components/Tvseries/Tvseries';
import Details from './components/details/Details';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/Home';
import About from './components/about/About';
import Notfound from './components/notfound/Notfound';
import cookies from 'react-cookies';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import Search from './components/search/Search';
import Searchmovie from './components/searchmovie/Searchmovie';
import Searchtv from './components/searchtv/Searchtv';
import './App.css';
 
 
 
 



const  App=()=> {

  let [user, setUser] = useState(cookies.load('token'));
  let [loading,setloading]=useState(true)



  
 
 



  let getloading=async ()=>{
  
  
    //console.log(data);
     
    setTimeout(() => {
      setloading(false);
   
    }, 3000);
    
    }

useEffect(() => {
      getloading();
      
}, []);

const [results, setresults] = useState([]);

const getearch = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=dc1d2c8dc004e789f8c26e808c8c91c2')
 
  //setresults(data.results); 
  console.log(data);
};

useEffect(() => {
  getearch();
  // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
   <Navbar user={user} setUser={setUser}/>
  
<ToastContainer
 position="top-center"
 autoClose={5000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="light"
/>

{ loading ? <Loader/> :  
    <Routes>
    {user ? (   <>   
    <Route path="/movies" element={<Movies/>}></Route>
    <Route path='/trending' element={<Trending/>}></Route>
    <Route path='/tvseries' element={<Tvseries/>}></Route>
    <Route path='/details/:media/:id' element={<Details/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/search' element={<Search/>}></Route>
    <Route path='/searchmovie' element={<Searchmovie/>}></Route>
    <Route path='/searchtv' element={<Searchtv/>}></Route>

     </>):( <> 
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login loguser={setUser}/>}></Route>
 
    </>)}
    <Route path='/' element={<Home/>}></Route>

    <Route path='*' element={<Notfound/>}></Route>
    </Routes>
}
<Footer/>
    </div>
  );
}

export default App;
