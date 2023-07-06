import {ChatContext} from '../context/ChatContext'
import {useContext} from 'react'

export const useChatContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw Error(
      "useChatContext must be used inside ChatContextProvider"
    );
  }

  return context;
};
