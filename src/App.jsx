import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import SignUp from './pages/signup/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/userProfile';
import Footer from './layouts/FooterLayout';
import UserDetails from './pages/forms/main/UserDetails.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import Navbar from './layouts/NavLayout';
import Accommodation from './pages/accommodation/accommodation';
import DetailsNavLayout from './layouts/DetailsNavLayout';
import Edit from './pages/forms/edit/Edit';
// import ErrorPage from "./pages/Error/404.jsx";

function App() {
  const {
    state: {
      user, userDetails, hosts, host,
    },
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
            element={!user ? <SignUp /> : <Navigate to="/details" />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          
          <Route path='/' element={<DetailsNavLayout />}>
            <Route path="/details" element={!userDetails ? <UserDetails /> : <Navigate to="/" />} />
          </Route>

          <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Footer />}>
              <Route
                index
                element={user ? <Home /> : <Navigate to="/login" />}
              />

              {/* <Route path="/404" element={( hosts.length === 0 ) ? <ErrorPage /> : <Navigate to="/"/>} /> */}

              <Route path="/profile/:id" element={<Profile />} />

              <Route path="/accommodation" element={<Accommodation />} />

              <Route path='/edit/profile' element={<Edit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
