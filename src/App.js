import { useState, useEffect } from 'react';
import './App.scss';


function App() {

  const [depremler, setDepremler] = useState([]);
  const [durum, setDurum] = useState([]);

  useEffect(() => {
     if(depremler === null || depremler === undefined){
      fetch('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=100')
      .then(response => response.json())
      .then(depremlerData => {
        setDepremler(depremlerData.result);
        setDurum(depremlerData.status);
      });
      }
      else if(depremler.length === 0){
        fetch('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=100')
        .then(response => response.json())
        .then(depremlerData => {
          setDepremler(depremlerData.result);
          setDurum(depremlerData.status);
        });}
  }, [depremler]);

  

  console.log(depremler)
  console.log(durum)
  return (
    <div className='container'>
      <h1>Depremler</h1>
      
      <table className='deprem'>
        <tr className='inTable'>
            <th>Konum</th>
            <th>Tarih</th>
            <th>Büyüklük</th>
            <th>Derinlik</th>
            </tr>
      {depremler.map(deprem => (
            <tr>
            <td className='al'>{deprem.title}</td>
            <td>{deprem.date}</td>
            <td>{deprem.mag}</td>
            <td className='al'>{deprem.depth + " km"}</td>
            </tr>
      ))}
      </table>
      
      
    </div>
  );
}

export default App;
