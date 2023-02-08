import { Route, Routes, Link, Navlink } from 'react-router-dom';
import './App.scss';
import Deprem from './components/Deprem';
import DepremKayip from './components/DepremKayip';
import Toplanma from './components/Toplanma';
import Bilgi from './components/Bilgi';


function App() {

 
  return (
    <div className='mainContainer'>
    <nav>
      <ul>
      <li>
          <Link className='link' to='/'>Deprem Kayıp Sistemi</Link>
      </li>
      <li>
          <Link className='link' to='/deprem-raporlari'>Deprem Raporları</Link>
      </li>
      <li>
          <Link className='link' to='/toplanma-alanlari'>Toplanma Alanları</Link>
      </li>
      <li>
          <Link className='link' to='/gonullu-bilgiler'>Gönüllü Bilgiler</Link>
      </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<DepremKayip/>}/>
      <Route path='/deprem-raporlari' element={<Deprem />} />
      <Route path='/toplanma-alanlari' element={<Toplanma />} />
      <Route path='/gonullu-bilgiler' element={<Bilgi/>}/>
    </Routes>
  </div>
  );
}

export default App;
