import toplanmaData from "../api/toplanma.json"
import { useEffect, useState } from "react";



function Toplanma() {
    
    const [toplanma, setToplanma] = useState([]);

    useEffect(() => {
        setToplanma(toplanmaData);
    }, [toplanma]);

    const [query,setQuery] = useState("");
  
    return ( 
    
        <div className='container'>
      <h1>Bakanlığın Belirlediği Toplanma Alanları</h1>
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
            <th>Alan</th>
            </tr>
      {toplanma.filter((top)=> 
        top.city.toLowerCase().includes(query.toLowerCase())).map((top) => (
          <tr key={top.id}>
              <td className='al'>{top.city}</td>
              <td><a href={top.link}>{top.area}</a></td>
            </tr>
        ))}
            
       </tbody>
      </table>
      
      
    </div>

     );
}

export default Toplanma;