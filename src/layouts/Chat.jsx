import { useEffect, useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import { useUserContext } from "../hooks/useUserContext";
import { Outlet, NavLink } from "react-router-dom";

/**
 * React component that displays a list of active conversations.
 * It fetches the chats from an API and renders them as clickable links.
 * It also shows a loading spinner while the chats are being fetched.
 */
const Chat = () => {
  const { state: { user } } = useUserContext();
  const { chats, dispatch } = useChatContext();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches the chats from the API and updates the state with the fetched data.
   */
  const fetchChats = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/chat/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        const json = await response.json();
        dispatch({ type: "GET_CHATS", payload: json });
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Returns the name of the other user in the chat based on the logged-in user and the chat users.
   * @param {string} loggedInUser - The ID of the logged-in user.
   * @param {Array} users - The array of chat users.
   * @returns {string} - The name of the other user in the chat.
   */
  const getSender = (loggedInUser, users) => {
    return users[0]._id === loggedInUser
      ? `${users[1].first_name} ${users[1].last_name}`
      : `${users[0].first_name} ${users[0].last_name}`
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-poppins">
      <div className="flex text-deepgray">
        <div className="flex flex-row h-full ">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 h-full">
            <div className="flex flex-col ">
              <span className="font-bold">Active Conversations</span>

              {isLoading ? (
                <div className="text-center">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 mr-2 text-snow animate-spin fill-blue"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                  {chats &&
                    chats.map((chat) => (
                      <NavLink
                        className="flex hover:bg-snow rounded-xl p-2"
                        to={`/chats/${chat._id}`}
                        key={chat._id}
                      >
                        <div className="ml-2 text-sm">
                          {getSender(user.id, chat.users)}
                        </div>
                      </NavLink>
                    ))}
                </div>
              )}
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
