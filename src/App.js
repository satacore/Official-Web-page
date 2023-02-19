import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Navbar from './components/navbar/navbar.jsx'


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
