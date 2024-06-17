import React from 'react'
import {useState,useEffect} from 'react'
import './App.css'
function DataFetching() {
  const [data,setData]=useState([])
  const url='https://jsonplaceholder.typicode.com/users'
  useEffect(()=>{
    fetch(url)
    .then(response=>response.json()).then(json=>{
      
      setData(json)
    })
    .catch(e=>{
      console.log('error')

    })
  },[data])
  return (
    <div className="App">
      <table className="column">
        
        <tr>
          <th>ID</th>
          <th >Name</th>
          <th>Email</th>
        </tr>
        {data.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          )
        })}
      </table>
    </div>
  
  )
}

export default DataFetching