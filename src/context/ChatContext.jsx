import { createContext, useReducer, useState } from "react";

export const ChatContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_CHATS":
      return {
        chats: action.payload,
      };
    case "SELECTED_CHAT":
      return {
        chat: action.payload,
      };
    default:
      return state;
  }
};

export const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    chats: [],
    chat: null,
  });
  const [notifications, setNotifications] = useState([]);

  return (
    <ChatContext.Provider
      value={{ ...state, dispatch, notifications, setNotifications }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
