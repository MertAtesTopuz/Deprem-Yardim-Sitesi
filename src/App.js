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
    
  );
}

export default App;
