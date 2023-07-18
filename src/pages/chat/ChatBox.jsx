import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import io from "socket.io-client";
import { useChatContext } from "../../hooks/useChatContext";

const ENDPOINT = "http://localhost:4000";
var socket, selectedChatCompare;

const Chat = () => {
  const {
    state: { user },
  } = useUserContext();
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const { id } = useParams();
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const { notifications, setNotifications } = useChatContext();

  const typingHandler = (e) => {
    setMessageInput(e.target.value);

    //typing indicator logic
    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", id);
    }

    let lastTypingTime = new Date().getTime();
    var timerLength = 4000;

    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", id);
        setTyping(false);
      }
    }, timerLength);
  };

  // const isSameSenderMargin = (msgs, m, i, userId) => {
  //   if (
  //     i < msgs.length - 1 &&
  //     msgs[i + 1].sender._id === m.sender._id &&
  //     msgs[i].sender._id !== userId
  //   )
  //     return 0;
  //   else if (
  //     (i < msgs.length - 1 &&
  //       msgs[i + 1].sender._id !== m.sender._id &&
  //       msgs[i].sender._id !== userId) ||
  //     (i === msgs.length - 1 && msgs[i].sender._id !== userId)
  //   )
  //     return 0;
  //   else return "710px";
  // };

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
      //console.log(json);

      socket.emit("join chat", id);
    }
  };

  //sends message
  const sendMessage = async (e) => {
    e.preventDefault();

    socket.emit("stop typing", id);
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
      socket.emit("new message", json);
      console.log(json);
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = id;
  }, [id]);

  console.log(notifications, "--------");

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        //notifications logic
        if (!notifications.include(newMessageReceived.chat._id)) {
          setNotifications([newMessageReceived, ...notifications]);
        }
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
  });

  return (
    <div class="flex h-screen antialiased text-deepgray">
      <div class="flex flex-row h-full w-full overflow-x-hidden ">
        <div class="flex flex-col flex-auto h-full p-6 border-l-2 border-deepgray">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4">
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  {messages &&
                    messages.map((m, i) => (
                      <div
                        className={
                          m.sender._id === user.id
                            ? "col-start-6 col-end-13 rounded-lg"
                            : "col-start-1 col-end-8 rounded-lg"
                        }
                      >
                        <div
                          className={
                            m.sender._id === user.id
                              ? "flex flex-row-reverse justify-start items-center "
                              : "flex flex-row justify-start items-center"
                          }
                        >
                          <div
                            className={
                              m.sender._id === user.id
                                ? "relative ml-3 text-sm bg-blue text-white py-2 px-4 shadow rounded-xl "
                                : "relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                            }
                          >
                            <div className="w-auto">{m.content}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <form
              class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
              onSubmit={sendMessage}
            >
              {isTyping ? <p className="text-sm">Typing...</p> : <></>}
              <div class="flex-grow ml-4">
                <div class="relative w-full">
                  <input
                    type="text"
                    class="flex w-full border rounded-xl focus:outline-none pl-4 h-10"
                    onChange={typingHandler}
                    value={messageInput}
                  />
                </div>
              </div>
              <div class="ml-4">
                <button
                  class="flex items-center justify-center bg-blue rounded-xl text-white px-4 py-1 flex-shrink-0"
                  type="submit"
                >
                  <span>Send</span>
                  <span class="ml-2">
                    <svg
                      class="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
