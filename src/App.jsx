import { Routes,Route } from 'react-router-dom'
import Booking from './pages/Bookingpage'
import Login from "./pages/loginPage"
import RegisterPage from './pages/register'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/booking' element= {<Booking/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  )
}

export default App
