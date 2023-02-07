import { Route, Routes, Link, Navlink } from 'react-router-dom';
import './App.scss';
import Deprem from './components/Deprem';
import Yardim from './components/Yardim';


function App() {

 
  return (
    <>
    <nav >
      <Link className='link' to="/">Deprem Raporu</Link>
      <Link className='link' to="yardim-kuruluslari">Yardım Kuruluşları</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Deprem />} />
      <Route path='/' element={<Yardim />} />
    </Routes>
  </>
  );
}

export default App;
