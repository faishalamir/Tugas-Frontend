import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import UserDinamis from "./UserDinamis";

const Navbar = () => {

  const navigate = useNavigate()

  function pilihan(){
    localStorage.clear()
    navigate('/SignUp')
  }

  const data = JSON.parse(localStorage.getItem('user-info'))

  return (
    <>
      <nav  >
        <div className="logo">
          <h1>
          <b className="dua">F</b><b className="satu">J</b>
          listrik
          </h1>
        </div>

      <ul>


        {
         data.Akses_User == "Admin"?
          <>
          <NavLink
            to={"/Tarif"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Tarif</li>
          </NavLink>
          <NavLink
            to={"/Pelanggan"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Pelanggan</li>
          </NavLink>
          <NavLink
            to={"/Tagihan"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Tagihan</li>
          </NavLink>
          <NavLink
            to={"/Pembayaran"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Pembayaran</li>
          </NavLink>
          <NavLink
            to={"/Pengaturan"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Profile</li>
          </NavLink>
          
          </>

          :
          <>          
           <NavLink
            to={"/Pelanggan"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Pelanggan</li>
          </NavLink>

          <NavLink
            to={"/Tagihan"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Tagihan</li>
          </NavLink>

          <NavLink
            to={"/Pembayaran"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Pembayaran</li>
          </NavLink>

             <NavLink
            to={"/Pengaturan"}
            className={({ isActive }) => (isActive ? "Actif" : "NonActif")}
          >
            <li>Profile</li>
          </NavLink>

          </>
        }
        </ul>
     
       
        <div className="Profil">
          <div className="poto_profil"></div>
          <div className="forKeterangan">
         <UserDinamis/>
          </div>
        </div>

        <button className="LogOut" onClick={pilihan} type="submit"><h1 className="TextLogOut">Log Out</h1></button>
      </nav>
    </>
  );
};

export default Navbar;
