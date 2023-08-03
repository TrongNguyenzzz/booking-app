import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";

import './App.css';

function App() {
  return (
    <BrowserRouter className="column">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
