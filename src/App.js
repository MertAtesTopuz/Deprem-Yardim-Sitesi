import { Route, Routes, Link, Navlink } from 'react-router-dom';
import './App.scss';
import Deprem from './components/Deprem';
import Yardim from './components/Yardim';
import Toplanma from './components/Toplanma';


function App() {

 
  return (
    <div className='mainContainer'>
    <nav>
      <Link className='link' to="/">Deprem Raporu</Link>
      <Link className='link' to="toplanma-alanlari">Toplanma Alanları</Link>
      <Link className='link' to="/yardim-kanallari">Yardım Kurumları</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Deprem />} />
      <Route path='/toplanma-alanlari' element={<Toplanma />} />
      <Route path='/yardim-kanallari' element={<Yardim/>}/>
    </Routes>
  </div>
  );
}

export default App;
