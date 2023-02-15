import React, { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import FakeLoading from "./Loading/FakeLoading";



const SignUp = () => {

  const [Name,setName] = useState('')
  const [Akses_User,setAkses_User] = useState('') 
  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const [fakeloading,setfakeloading] = useState(false)
  const navigate = useNavigate()  

  const UrlApi = 'http://127.0.0.1:8000/api/register'


   const Submit = (e) =>{
    e.preventDefault();
    setfakeloading(true)
    const AllSubmit = {Name,Akses_User,Email,Password}

    fetch(UrlApi,{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(AllSubmit)
  })
  
  .then(()=>{
    setTimeout(()=>{
      const data = JSON.parse(localStorage.getItem('user-info'))
        setfakeloading(false)
        {
          data.Akses_User == "Admin"?
          navigate('/Tarif')
          :
          navigate('/Pelanggan')    

        }
      },3000)
    })
    localStorage.setItem("user-info",JSON.stringify(AllSubmit)) 
  }

  
  return (
    <>
    
    {fakeloading && <FakeLoading/>  }
      <div className="background">
        <div data-aos-duration="1000" data-aos="zoom-in-left" className="background_right">
          <h1 className="Say_Hello">Welcome Back!</h1>
          <div className="content_p">
            <p className="Content_SignIn">
              Untuk menjaga hubungan dengan kami tolong register dengan akun
            </p>
          </div>
          <NavLink to={'/'}>
          <button className="btn_SignUp" type="submit">
            SIGN IN
          </button>
          </NavLink>
        </div>

        <div data-aos-duration="1500" data-aos="zoom-in-left" className="background_Left">
          <div className="form_SignIn">
            <h1 className="SignIn_text">Create Account</h1>

            <form action="" onSubmit={Submit}>
              <input onChange={(Name)=>setName(Name.target.value)}
                type="name"
                value={Name}
                name="Name"
                required
                autoComplete="off"
                placeholder="Name"
                className="Email"
              />

              
              <input onChange={(Akses_User)=>setAkses_User(Akses_User.target.value)}
                type="name"
                value={Akses_User}
                name="Akses_User"
                required
                autoComplete="off"
                placeholder="Admin or Operator"
                className="Email"
              />

              

              <input onChange={(Email)=>setEmail(Email.target.value)}
                type="email"
                name="Email"
                value={Email}
                required
                autoComplete="off"
                placeholder="Email"
                className="Email"
                
              />
              
              <input onChange={(Password)=>setPassword(Password.target.value)}
                className="Password"
                value={Password}
                placeholder="Password"
                autoComplete="Off"
                type="password"
                required
                name="Password"
      
              />
              <button className="SignIn" type="submit">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
