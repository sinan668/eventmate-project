import { Routes,Route } from 'react-router-dom'
import Booking from './pages/Bookingpage'
import Login from "./pages/loginPage"

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/booking' element= {<Booking/>}/>
    </Routes>
  )
}

export default App
