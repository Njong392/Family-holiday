import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "./pages/signup/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/userProfile";
import Footer from "./layouts/FooterLayout";
import UserDetails from "./pages/Forms/main/UserDetails.jsx";
import { useUserContext } from "./hooks/useUserContext.jsx";
import { useAccommodationContext } from "./hooks/useAccommodationContext";
import Navbar from "./layouts/NavLayout";
import Accommodation from "./pages/accommodation/accommodation";
import DetailsNavLayout from "./layouts/DetailsNavLayout";
import Edit from "./pages/Forms/edit/Edit";
import Host from "./pages/Forms/host/host";
import VerifyEmail from "./pages/Error/VerifyEmail.jsx";
import Verification from "./components/Verification";
import Filter from "./pages/filter/Filter";
import Welcome from "./pages/Welcome/Welcome";
import Chat from "./layouts/Chat";
import { useChatContext } from "./hooks/useChatContext";
import ChatBox from "./pages/chat/ChatBox";
import ChatHome from "./pages/chat/ChatHome";
import { io } from "socket.io-client";
import Notification from "./pages/notifications/Notification";
import SavedAccommodations from "./pages/savedAccommodations/savedAccommodations";
import Payment from "./pages/payment/Payment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// import ErrorPage from "./pages/Error/404.jsx";

const ENDPOINT = "http://localhost:4000";
var socket, selectedChatCompare;

function App() {
  const {
    state: { user, userDetails, hosts, host, verifiedUser },
  } = useUserContext();
  const { chat, chats, notifications, setNotifications } = useChatContext();

  const { accommodations, accommodation, savedAccommodations, reservationNotification, setReservationNotification } =
    useAccommodationContext();
  const [selectedChat, setSelectedChat] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  // console.log("user: ", user);
  // console.log("userdetails: ", userDetails);
  // console.log("hosts: ", hosts);
  //console.log("host: ", host);
  //console.log("accommodations:", accommodations);
  //console.log("accommodation:", accommodation);
  // console.log("verifiedUser:", verifiedUser);
  //console.log("savedAccommodations:", savedAccommodations);
  //console.log("chat:", chat);
  //console.log("chats:", chats);

  const initialOptions = {
    clientId: "AWAN_GYuMF4RVbB4F8b_X9FpluWXi3swuoXUk7TnyfnwDGaRnMukkbCWoHN9Yio9fKoYYxWVE1aIUugd",
    currency: "USD",
    intent: "capture",
};

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/verify-email" />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route path="/" element={<DetailsNavLayout />}>
            <Route
              path="/details"
              element={!host ? <UserDetails /> : <Navigate to="/" />}
            />

            <Route path="/welcome" element={<Welcome />} />
          </Route>

          <Route path="/verify-email" element={<VerifyEmail />} />

          <Route path="/" element={user ? <Navbar /> : <DetailsNavLayout />}>
            <Route path="/" element={<Footer />}>
              <Route
                index
                element={user ? <Home /> : <Navigate to="/login" />}
              />

              {/* <Route path="/404" element={( hosts.length === 0 ) ? <ErrorPage /> : <Navigate to="/"/>} /> */}

              <Route path="/profile" element={<Profile />} />

              <Route path="/notifications" element={<Notification />} />

              <Route path="/filter/" element={<Filter />} />

              <Route path="/edit/profile" element={<Edit />} />

              <Route path="/host" element={<Host />} />

              <Route path="/" element={<Chat />}>
                <Route path="/chats/:id" element={<ChatBox />} />
                <Route path="/chats" element={<ChatHome />} />
              </Route>

              <Route path="/accommodations/:id" element={<Accommodation />} />

              <Route path="/bookmarked" element={<SavedAccommodations />}/>

              <Route path="/payment/" element={<Payment />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
