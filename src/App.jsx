import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/signup/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/userProfile";
import Footer from "./layouts/FooterLayout";
import UserDetails from "./pages/forms/main/UserDetails.jsx";
import { useUserContext } from "./hooks/useUserContext.jsx";
import { useAccommodationContext } from "./hooks/useAccommodationContext";
import Navbar from "./Layouts/NavLayout";
import Accommodation from "./pages/accommodation/accommodation";
import DetailsNavLayout from "./layouts/DetailsNavLayout";
import Edit from "./pages/forms/edit/Edit";
import Host from "./pages/Forms/host/host";
// import ErrorPage from "./pages/Error/404.jsx";

function App() {
  const {
    state: { user, userDetails, hosts, host },
  } = useUserContext();

  // const {
  //   state: {accommodations}
  // } = useAccommodationContext()

  console.log("user: ", user);
  console.log("userdetails: ", userDetails);
  console.log("hosts: ", hosts);
  console.log("host: ", host);
  //console.log("accommodations:", accommodations)

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

          <Route path="/" element={<DetailsNavLayout />}>
            <Route
              path="/details"
              element={!userDetails ? <UserDetails /> : <Navigate to="/" />}
            />
          </Route>

          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Footer />}>
              <Route
                index
                element={user ? <Home /> : <Navigate to="/login" />}
              />

              {/* <Route path="/404" element={( hosts.length === 0 ) ? <ErrorPage /> : <Navigate to="/"/>} /> */}

              <Route path="/profile/:id" element={<Profile />} />

              <Route path="/edit/profile" element={<Edit />} />

              <Route path="/host" element={<Host />} />

              <Route path="/accommodation" element={<Accommodation />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
