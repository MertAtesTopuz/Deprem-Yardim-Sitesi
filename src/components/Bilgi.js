import { useState, useEffect } from "react";
import bilgilerData from "../api/bilgiler.json"



function Bilgi() {
    const [bilgiler, setBilgiler] = useState([]);

useEffect(() => {
    setBilgiler(bilgilerData);
}, [bilgiler]);
const [query,setQuery] = useState("");
    return ( 
        <div className='container'>
        <h1>Gonullu Vinc Operatorleri Listesi</h1>
        <input 
        type="text" 
        placeholder="Şehir Ara" 
        onChange={(e) => setQuery(e.target.value)}
        className='tpSearch'
        />
        <table className='tpTable'>
         <tbody>
         <tr className='tpInTable'>
              <th>Şehir</th>
              <th>Isim</th>
              <th>Telefon</th>
              </tr>
        {bilgiler.filter((bilgi)=> 
          bilgi.city.toLowerCase().includes(query.toLowerCase())).map((bilgi) => (
            <tr key={bilgi.id}>
                <td className='al'>{bilgi.city}</td>
                <td>{bilgi.name}</td>
                <td>{bilgi.phone}</td>
              </tr>
          ))}
              
         </tbody>
        </table>
        
        
      </div>
  
     );
}

export default Bilgi;