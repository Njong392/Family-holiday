import { createContext, useReducer } from "react";

export const ChatContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_CHATS":
      return {
        chats: action.payload,
      };
    case "GET_NOTIFICATIONS":
      return {
        notifications: [...state.notifications, action.payload],
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
    notifications: [],
    chat: null,
  });

  return (
    <ChatContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
