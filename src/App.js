import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hanoi from './pages/city/Hanoi.jsx';
import Dongha from './pages/city/Dongha.jsx';
import Tucson from './pages/city/Tucson.jsx';
import Budapest from './pages/city/Budapest.jsx';
import Newyork from './pages/city/Newyork.jsx';
import LA from './pages/city/LA.jsx';
import Seattle from './pages/city/Seattle.jsx';
import Berlin from './pages/city/Berlin.jsx';
import London from './pages/city/London.jsx';
import Hotel from './pages/hotel/Hotel.jsx';
import Login from './pages/login/Login.jsx';
import Register from "./pages/register/Register.jsx";
import Reservation from './pages/reservation/Reservation.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter className="column">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hanoi' element={<Hanoi/>}/>
        <Route path='/dongha' element={<Dongha/>}/>
        <Route path='/tucson' element={<Tucson/>}/>
        <Route path='/budapest' element={<Budapest/>}/>
        <Route path='/newyork' element={<Newyork/>}/>
        <Route path='/la' element={<LA/>}/>
        <Route path='/seattle' element={<Seattle/>}/>
        <Route path='/berlin' element={<Berlin/>}/>
        <Route path='/london' element={<London/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
