import React from 'react';
import './table.css';
function table({countries}) {
  return (
    <div className="table">
        {countries.map(({country,cases})=>(
        <tr>
            <td>{country}</td>
            <td><strong>{cases}</strong></td>
        </tr>
       ))}

    </div>
  );
}

export default table