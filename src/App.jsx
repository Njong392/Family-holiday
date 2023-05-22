import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signup/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import HostDetails from './pages/details/HostDetails';
import GuestDetails from './pages/details/GuestDetails';
import Footer from './layouts/FooterLayout';
import MainForm from './pages/forms/main/MainForm.jsx';
//import HostForm from './pages/forms/hosts/HostForm';
//import { useAuthContext } from './hooks/useAuthContext';
import { useAuthContext } from './hooks/useAuthContext.jsx'
import Navbar from './layouts/NavLayout';
import Accommodation from './pages/accommodation/accommodation';
import {useState, useEffect} from "react";
import { useUpdateUser} from "./pages/forms/main/useUpdateUser.jsx";
import ErrorPage from "./pages/Error/404.jsx";

function App() {
  
  //const [submitted, isSubmitted] = useState(false)
  const {isSubmitted} = useUpdateUser()

  const {
    state: { user, userDetails,hosts, host },
      dispatch
  } = useAuthContext();

  console.log('user: ', user);
  console.log('userdetails: ', userDetails);
  console.log('hosts: ', hosts);
  console.log('host: ', host);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/main_form" />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route path="/main_form" element={<MainForm />} />

          <Route path="/" element={<Navbar user={user} userDetails={userDetails}/>}>
            <Route path="/" element={<Footer />}>
              <Route
                index
                element={user ? <Home/> : <Navigate to="/login" />}
              />

              {/*<Route path="/404" element={( hosts.length === 0 ) ? <ErrorPage /> : <Navigate to="/"/>} />*/}

              <Route path="/host_details/:id" element={<HostDetails />} />

              <Route path="/accommodation" element={<Accommodation />} />

              <Route path="/guest_details" element={<GuestDetails />} />

              

              {/* <Route path="/host_form" element={<HostForm />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
