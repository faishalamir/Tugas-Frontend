import React from 'react'

const UserDinamis = () => {

const data = JSON.parse(localStorage.getItem('user-info'))

  return (
   
        <>
        <div className="Name_User"><h1 className='UserName'>{data.Name}</h1></div>
        <div className="Title_User"><h1 className='TitleUser'>{data.Akses_User}</h1></div>     
        </>
  )
}

export default UserDinamis