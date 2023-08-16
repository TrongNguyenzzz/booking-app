import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hanoi from './pages/city/Hanoi.jsx';
import Dongha from './pages/city/Dongha.jsx';
import Tucson from './pages/city/Tucson.jsx';
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
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
