import React,{useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Pelanggan = () => {
  const navigate = useNavigate()

  useEffect(()=>{
      if(!localStorage.getItem('user-info')){
        navigate('/SignUp')
      }
  })
  return (
    <>
      <Navbar/>
      <h1 className='Pelanggan_Text'>Pelanggan</h1>
    </>
  )
}

export default Pelanggan