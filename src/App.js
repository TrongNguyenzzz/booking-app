import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hanoi from './pages/city/Hanoi.jsx';
import Dongha from './pages/city/Dongha.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter className="column">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hanoi' element={<Hanoi/>}/>
        <Route path='/dongha' element={<Dongha/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
