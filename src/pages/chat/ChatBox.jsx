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
  const { notifications, setNotifications, chats } = useChatContext();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [fetchAgain, setFetchAgain] = useState(false);


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
    setIsLoading(true)
    const response = await fetch(`http://localhost:4000/api/message/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      setIsLoading(false)
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

    const selectedChat = chats.find((c) => c._id === id)
    selectedChatCompare = setSelectedChat(selectedChat)

  }, [selectedChat, id, fetchAgain]);


  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        //notification
        if(!notifications.includes(newMessageReceived)){
          setNotifications([newMessageReceived, ...notifications])
          setFetchAgain(!fetchAgain)
          //fetchMessages()
        }
        
      } else{
        setMessages([...messages, newMessageReceived]);
      }
    });
  });

  console.log(notifications, "-----")

  return (
    <div className="flex h-screen antialiased text-deepgray">
      <div className="flex flex-row h-full w-full ">
        <div className="flex flex-col flex-auto p-6 border-l-2 border-deepgray">
           <p className="border-2 px-4 py-2 rounded-lg border-blue ">hi</p>
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 items-center justify-center">
           {isLoading ? <div>
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-snow animate-spin fill-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div> : <> <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full mt-4">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages &&
                    messages.map((m) => (
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
              className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
              onSubmit={sendMessage}
            >
              {isTyping ? <p className="text-sm">Typing...</p> : <></>}
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none pl-4 h-10"
                    onChange={typingHandler}
                    value={messageInput}
                  />
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
