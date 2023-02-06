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
  return (
    
  );

}

export default App;
