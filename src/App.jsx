import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signup/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import HostDetails from './pages/details/HostDetails';
import GuestDetails from './pages/details/GuestDetails';
import Footer from './layouts/FooterLayout';
import GuestForm from './pages/forms/guests/GuestForm';
import HostForm from './pages/forms/hosts/HostForm';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './Layouts/NavLayout';
import Accommodation from './pages/accommodation/accommodation';

function App() {
  const {
    state: { user },
  } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Footer />}>
              <Route
                index
                element={user ? <Home /> : <Navigate to="/login" />}
              />

              <Route path="/host_details" element={<HostDetails />} />

              <Route path="/accommodation" element={<Accommodation />} />

              <Route path="/guest_details" element={<GuestDetails />} />

              <Route path="/guest_form" element={<GuestForm />} />

              <Route path="/host_form" element={<HostForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
