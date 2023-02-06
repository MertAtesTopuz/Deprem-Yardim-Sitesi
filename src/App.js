import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [deprem, setDeprem] = useState("");

  useEffect(() => {
    fetch('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=100')
      .then(response => response.json())
      .then(data => {
        setDeprem(data);
      });
  }, []);

  console.log(deprem)
  return (
    <div>
      <h1>Deprem</h1>
      
    </div>
  );
}

export default App;
