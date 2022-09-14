import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Page404 from './Page404';
import Movie from './Movies';


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movie" element={<Movie/>}/>
        <Route path="movie/:id" element={<SingleMovie/>}/>
        <Route path="*" element={<Page404/>} />
      </Routes>
      
    </>
  );
}

export default App;
