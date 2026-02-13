import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom'
import HiringPage from "./pages/HiringPage"
import Login from "./pages/loginPage"
import Booking from "./pages/Bookingpage"
import RegisterPage from "./pages/register"

function App() {
 return(
 <>
    <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/booking' element= {<Booking/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path="/hiring" element={<HiringPage/>}/>
    </Routes>
 </>
 )
}

export default App
