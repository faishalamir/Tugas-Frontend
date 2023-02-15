import React,{useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export const Pembayaran = () => {
  const navigate = useNavigate()

  useEffect(()=>{
  
      if(!localStorage.getItem('user-info')){
        navigate('/SignUp')
      }
  
  })
  return (
    <>
    <Navbar/>
      <h1>Contact</h1>
    </>
  )
}
