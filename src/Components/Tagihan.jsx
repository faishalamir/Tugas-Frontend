import React,{useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Tagihan = () => {
  
  const navigate = useNavigate()

  useEffect(()=>{
  
      if(!localStorage.getItem('user-info')){
        navigate('/SignUp')
      }
  
  })
  return (
    <>
        <Navbar/>
        <h1>Tagihan</h1>
    </>
  )
}

export default Tagihan