import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import FakeLoading from "./Loading/FakeLoading";

const SignIn = () => {


  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const [fakeloading,setfakeloading] = useState(false)

  const Navigate = useNavigate()

  const urlLogin = "http://localhost:8000/api/login"

  const submit = (e) =>{
    e.preventDefault()
    setfakeloading(true)

    const AllSubmit = { Email,Password }
    console.log(AllSubmit)
   
    fetch(urlLogin,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(AllSubmit)

    })

    .then(()=>{ 
      setTimeout(()=>{   
        const data = JSON.parse(MessangeErorlocalStorage.getItem('user-info'))
        setfakeloading(false)
        {
          data.Akses_User == "Admin"?
          Navigate('/Tarif')
          :
          Navigate('/Pelanggan')    
        } 
      },3000)
    })
    localStorage.setItem("user-info",JSON.stringify(AllSubmit)); 
  }


  return (
    <>
    {fakeloading && <FakeLoading/>}
      <div className="background">
        <div  data-aos-duration="1000"  data-aos="zoom-in-up" className="background_Left">
          <div className="form_SignIn">
            <h1 className="SignIn_text">Sign in to FJ Listrik</h1>

            <form action="" >
              <input onChange={(Email)=>setEmail(Email.target.value)}
                type="email"
                name="Email"
                required
                value={Email}
                autoComplete="off"
                placeholder="Email"
                className="Email"
                
              />

              <input  onChange={(Password)=>setPassword(Password.target.value)}
              
                className="Password"
                placeholder="Password"
                required
                value={Password}
                autoComplete="Off"
                type="password"
                name="Password"
                
              />

              <h2 className="forgot_password">
                <a href="">Forgot your Password?</a>
              </h2>
              <button onClick={submit} className="SignIn" type="submit">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
        <div  data-aos-duration="1500"  data-aos="zoom-in-down" className="background_right">
          <h1 className="Say_Hello">Hello,Friend!</h1>
          <div className="content_p">
            <p className="Content_SignIn">
              Bayar tagihan listrik mu dengan mudah hanya dengan kami
            </p>
          </div>

         <NavLink to={'/SignUp'}>
          <button className="btn_SignUp" type="submit">
            SIGN UP
          </button>
         </NavLink>

        </div>
      </div>
    </>
  );
};

export default SignIn;
