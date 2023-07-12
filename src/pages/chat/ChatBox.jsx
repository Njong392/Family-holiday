import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import ScrollableFeed from "react-scrollable-feed";
import {io} from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
var socket, selectChatCompare

const ChatBox = () => {
  const {
    state: { user },
  } = useUserContext();
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const { id } = useParams();

  const typingHandler = (e) => {
    setMessageInput(e.target.value);

    //typing indicator logic
  };

  const isSameSenderMargin = (msgs, m, i, userId) => {
    if (
      i < msgs.length - 1 &&
      msgs[i + 1].sender._id === m.sender._id &&
      msgs[i].sender._id !== userId
    )
      return 0;
    else if (
      (i < msgs.length - 1 &&
        msgs[i + 1].sender._id !== m.sender._id &&
        msgs[i].sender._id !== userId) ||
      (i === msgs.length - 1 && msgs[i].sender._id !== userId)
    )
      return 0;
    else return "auto";
  };

  // const isSameSender = (msgs, m, i, userId) => {
  //   return (
  //     i < msgs.length - 1 &&
  //     (msgs[i + 1].sender._id !== m.sender._id ||
  //       msgs[i + 1].sender._id === undefined) &&
  //     msgs[i].sender._id !== userId
  //   );
  // };

  //fetches messages
  const fetchMessages = async () => {
    const response = await fetch(`http://localhost:4000/api/message/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      setMessages(json);
      console.log(json);
    }
  };

  //sends message
  const sendMessage = async (e) => {
    e.preventDefault();

    setMessageInput("");
    const response = await fetch("http://localhost:4000/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ chat_id: id, content: messageInput }),
    });

    const json = await response.json();

    if (response.ok) {
      setMessages([...messages, json]);
      console.log(json);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('setup', user)
    socket.on('connection', ()=> setSocketConnected(true))
  }, [])

  return (
    <div className="flex flex-col flex-auto p-6 border-l-2 border-deepgray">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 overflow-x-auto">
        <div className="w-full border py-3 px-7 rounded-lg bg-snow">
          <p>Henry Boyd</p>
        </div>
        <ScrollableFeed className="flex flex-col h-full mb-4">
          <div className="flex flex-col h-full ">
            <div className="grid grid-cols-12 gap-y-2 ">
              {messages &&
                messages.map((m, i) => (
                  <div className="col-start-1 col-end-8 p-2 rounded-lg"
                  style={{marginLeft: isSameSenderMargin(messages, m, i, user.id)}}
                  >
                    <div className="flex flex-row items-center "
                     >
                      <div
                        className={
                          m.sender._id === user.id
                            ? "relative ml-3 text-sm bg-blue text-white py-2 px-4 shadow rounded-xl "
                            : "relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        }
                       
                      >
                        <div>{m.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
        
            </div>
          </div>
        </ScrollableFeed>
        <form
          className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          onSubmit={sendMessage}
        >
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-blue pl-4 h-10"
                onChange={typingHandler}
                value={messageInput}
              />
              <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-lightgray hover:text-deepgray">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-4">
            <button
              className="flex items-center justify-center bg-blue rounded-xl text-white px-4 py-1 flex-shrink-0"
              type="submit"
            >
              <span>Send</span>
              <span className="ml-2">
                <svg
                  className="w-4 h-4 transform rotate-45 -mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
