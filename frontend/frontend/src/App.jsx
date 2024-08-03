import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8082/branch')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div style={{padding: "50px"}}>
      <table>
        <thead>
          <tr>
          <th>BranchNo</th>
          <th>Street</th>
          <th>City</th>
          <th>Postcode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.BranchNo}</td>
              <td>{d.Street}</td>
              <td>{d.City}</td>
              <td>{d.Postcode}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App