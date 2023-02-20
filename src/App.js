import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
