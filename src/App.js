import { Route, Routes, Link, Navlink } from 'react-router-dom';
import './App.scss';
import Deprem from './components/Deprem';
import Yardim from './components/Yardim';
import Toplanma from './components/Toplanma';
import Bilgi from './components/Bilgi';


function App() {

 
  return (
    <div className='mainContainer'>
    <nav>
      <Link className='link' to="/deprem-raporlari">Deprem Raporu</Link>
      <Link className='link' to="toplanma-alanlari">Toplanma Alanları</Link>
      <Link className='link' to="/">Yeni Bilgiler</Link>
    </nav>
    <Routes>
      <Route path='/deprem-raporlari' element={<Deprem />} />
      <Route path='/toplanma-alanlari' element={<Toplanma />} />
      <Route path='/' element={<Bilgi/>}/>
    </Routes>
  </div>
  );
}

export default App;
