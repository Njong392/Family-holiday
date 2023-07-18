import { useEffect, useState } from "react";
import { useChatContext } from "../hooks/useChatContext";
import { useUserContext } from "../hooks/useUserContext";
import { Outlet, NavLink } from "react-router-dom";

const Chat = () => {
  const {
    state: { user },
  } = useUserContext();
  const { chats, dispatch } = useChatContext();

  //fetches all chats
  const fetchChats = async () => {
    const response = await fetch("http://localhost:4000/api/chat/", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_CHATS", payload: json });
    }
  };

  //returns the name of the other user in the chat
  const getSender = (loggedInUser, users) => {
    return users[0]._id === loggedInUser._id
      ? users[1].first_name
      : users[0].first_name;
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-poppins">
      <div className="flex text-deepgray">
        <div className="flex flex-row h-full overflow-x-hidden overflow-auto">
          <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 h-full">
            <div class="flex flex-col mt-8">
              <span class="font-bold">Active Conversations</span>

              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {chats &&
                  chats.map((chat) => (
                    <NavLink
                      className="flex hover:bg-snow rounded-xl p-2"
                      to={`/chats/${chat._id}`}
                    >
                      <div className="ml-2 text-sm" key={chat._id}>
                        {getSender(user.id, chat.users)}
                      </div>
                    </NavLink>
                  ))}
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
