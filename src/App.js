import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import SPA from './components/SPA/SPA.jsx';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<SPA/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
