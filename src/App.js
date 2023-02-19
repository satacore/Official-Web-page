import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Navbar from './components/navbar/Navbar.jsx'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
