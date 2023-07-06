import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContextProvider from "./context/UserContext";
import AccommodationContextProvider from "./context/AccommodationContext";
import { ChatContextProvider } from "./context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ChatContextProvider >
     <UserContextProvider>
      <AccommodationContextProvider>
        <App />
      </AccommodationContextProvider>
    </UserContextProvider>
   </ChatContextProvider>
  </React.StrictMode>
);
