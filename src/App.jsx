import react from 'react'
import '../Style/StyleLoginAndRegister.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


// !! Import File

import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Pengaturan from './Components/Pengaturan'
import Tarif from './Pages/Tarif'
import Pelanggan from './Components/Pelanggan'
import Tagihan from './Components/Tagihan'
import { Pembayaran } from './Components/Pembayaran'




function App() {

  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
      </Routes>

      {/* !! Dashboard Route */}

      <Routes>

        <Route path='/Tarif' element={<Tarif/>}></Route>
      </Routes>
      
        <Routes>
          <Route path="/Pelanggan" element={<Pelanggan/>}></Route>
          <Route path="/Tagihan" element={<Tagihan/>}></Route>
          <Route path="/Pembayaran" element={<Pembayaran />}></Route>
          <Route path="/Pengaturan" element={<Pengaturan/>}></Route>
        </Routes>
    </Router>
   </>
  )
}

export default App
