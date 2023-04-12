import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
const API_URL=import.meta.env.VITE_API_URL
const [criptos, setCriptos] = useState();
useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}assets`)
  .then((data)=>{
    setCriptos(data.data.data)
  })
  .catch((err)=>{
    console.error(err)
  })
},[])
  if(!criptos)
  return (<div>Cargando...</div>)
  return (
    <>
    <div>Holi Boli</div>
    <ol>
      {
        criptos.map(({id,name, priceUsd})=>(
          <li key={id}>Name: {name} - Price: {priceUsd}</li>
        ))
      }
    </ol>
    </>
  )
}

export default App
