import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Crypto from './Crypto'

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
    <div className='app-container'>
    <h2>Lista de cryptomonedas</h2>
    <div className='crypto-container'>
    {
        criptos.map(({id,name, priceUsd, changePercent24Hr})=>(
          <Crypto key={id} name = {name}  priceUSD={priceUsd} changePercent24Hr={changePercent24Hr}/>
        ))
      }
      
    </div>
    </div>
  )
}

export default App
