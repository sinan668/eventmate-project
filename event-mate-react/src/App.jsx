import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import HiringPage from "./pages/HiringPage"
import Login from "./pages/loginPage"
import Booking from "./pages/Bookingpage"
import RegisterPage from "./pages/register"
import Userprofilepage from "./pages/userprofile"
import Agenciespage from "./pages/agencies"

function App() {
 return(
 <>
    <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/booking' element= {<Booking/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path="/hiring" element={<HiringPage/>}/>
          <Route path="/provider" element={<Agenciespage/>}/>
          <Route path="/employ" element={<Userprofilepage/>}/>
    </Routes>
 </>
 )
}

export default App
