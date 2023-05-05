import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/Signup/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import HostDetails from './pages/Details/HostDetails'
import Navbar from './layouts/NavLayout'
import GuestDetails from './pages/Details/GuestDetails'
import Footer from './layouts/FooterLayout'
import GuestForm from './pages/Forms/GuestForm'
import HostForm from './pages/Forms/HostForm'
import { useAuthContext } from './hooks/useAuthContext'


function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/signup' element={!user ? <SignUp />: <Navigate to='/'/>}/>
          
          <Route path='/login' element={!user ?<Login /> : <Navigate to='/'/>}/>
          
          <Route path='/' element={<Navbar/>} >
            <Route path='/' element={<Footer />}>
              <Route 
                index 
                element={user ? <Home /> : <Navigate to='/login' />} 
              />

              <Route 
                path='/host_details' 
                element={<HostDetails />}
              />

              <Route 
                path='/guest_details' 
                element={<GuestDetails />}
              />

              <Route 
                path='/guest_form' 
                element={<GuestForm />} 
              />

              <Route 
                path='/host_form' 
                element={<HostForm />}
              />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
