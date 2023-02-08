import { useState, useEffect } from "react";
import hastaneData from "../api/hastane-veri.json"



function DepremKayip() {
    const [hastane, setHastane] = useState([]);

useEffect(() => {
    setHastane(hastaneData);
}, [hastane]);
const [query,setQuery] = useState("");
    return ( 
        <div className='container'>
        <h1 className="depremKayip">Deprem Kayıp Sistemi</h1>
        <input 
        type="text" 
        placeholder="Ara" 
        onChange={(e) => setQuery(e.target.value)}
        className='tpSearch'
        />
        <table className='hastaTable'>
         <tbody>
         <tr className='hastaInTable'>
                <th>#</th>
              <th>Isim</th>
              <th>Bilgi</th>
              </tr>
        {hastane.filter((hasta)=> 
          hasta.fullname.toLowerCase().includes(query.toLowerCase())).map((hasta) => (
            <tr key={hasta.id}>
                <td>{hasta.id}</td>
                <td>{hasta.fullname}</td>
                <td>{hasta.info}</td>
              </tr>
          ))}
              
         </tbody>
        </table>
        
        
      </div>
  
     );
}

export default DepremKayip;