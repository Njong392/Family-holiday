import {
  useParams,
  useSearchParams,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import AccomodationList from "../../components/accommodation/AccommodationList";
import { useUserContext } from "../../hooks/useUserContext";
import { useChatContext } from "../../hooks/useChatContext";
import NonVerified from "../../components/NonVerified";
import DeactivationAlert from "../../components/DeactivationAlert";

export default function UserProfile() {
  const {
    state: { user, host, userDetails },
    dispatch,
  } = useUserContext();
  const [hideText, setHideText] = useState(false);
  const [searchParams] = useSearchParams();
  const { chat, chats, dispatch: dispatchChat } = useChatContext();
  const sender_id = searchParams.get("userId");
  const navigateTo = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isNotVerified, setIsNotVerified] = useState(false)
  const [hasClickedNo, setHasClickedNo] = useState(false)

  const showText = () => {
    setHideText(!hideText);
  };

  const fetchHost = async () => {
    setIsLoading(true);
    
    const response = await fetch(`http://localhost:4000/api/user/${sender_id}`);

    const json = await response.json();

    if (response.ok) {
      if (!chats.find((c) => c._id === json._id))
        dispatch({ type: "GET_HOST", payload: json });
        setIsLoading(false);
    }
    
    
  };

  const deactivateUser = async () => {
    const response = await fetch("http://localhost:4000/api/user/deactivate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ sender_id })
    });

    const json = await response.json();

    if (response.ok) {
      localStorage.removeItem("user");

      dispatch({ type: "LOGOUT" });
    }
  }

  const accessChat = async () => {
   if(!user?.isVerified){
    setIsNotVerified(true)
   } else{
     const response = await fetch("http://localhost:4000/api/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ sender_id }),
    });

    const json = await response.json();

    if (response.ok) {
      dispatchChat({ type: "SELECTED_CHAT", payload: json });
      navigateTo(`/chats/${json._id}`);
    }
   }
  };

  useEffect(() => {
    fetchHost();

    // const url = window.location.pathname.split('/')[2]
    // console.log('url:', url)
  }, [sender_id]);

  return (
    <main aria-label="Main Section" className="font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded mt-5">
        <NonVerified isNotVerified={isNotVerified} />
        <DeactivationAlert deactivateUser={deactivateUser} hasClickedNo={hasClickedNo} setHasClickedNo={setHasClickedNo}/>
        <h3 className="text-3xl font-bold text-blue mt-12">Family Profile</h3>
        {isLoading ? <div className="text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-snow animate-spin fill-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div> : <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-4">
          <div>
            {host && (
              <img
                alt="Lava"
                src={host.form[0].image.url}
                className="w-full md:h-96 h-full rounded-xl object-cover shadow-xl"
              />
            )}
          </div>

          <div>
            <div className="flex gap-2 justify-end">
              {(user && host) && (host._id === user.id) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-red cursor-pointer" onClick={() => setHasClickedNo(true)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

              ): (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-deepgray cursor-pointer"
                onClick={accessChat}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              )  }
            </div>

            {host && (
              <h3 className="text-2xl font-bold text-blue mt-4">
                {host.first_name} <span>{host.last_name}</span>
              </h3>
            )}

            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              {host && (
                <p className="text-sm font-bold text-blue">
                  {host.city}, <span>{host.country}</span>
                </p>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-blue">About Us</h3>
              {host && (
                <p
                  onClick={showText}
                  className={
                    hideText
                      ? "leading-relaxed cursor-pointer"
                      : "leading-relaxed cursor-pointer line-clamp-3"
                  }
                >
                  {host.form[0].bio}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 mt-6 gap-5">
              <div className="parent border-2 border-blue rounded-lg p-2 relative">
                {host && (
                  <p className="text-sm">
                    <span className="font-bold">Adults:</span>{" "}
                    {host.form[0].adults}
                  </p>
                )}

                {host && (
                  <p className="text-sm">
                    <span className="font-bold">Children: </span>{" "}
                    {host.form[0].children}
                  </p>
                )}

                <div className="child">
                  <p className="bg-blue text-white text-sm w-24 px-1 rounded-sm absolute -top-3 -right-3">
                    composition
                  </p>
                </div>
              </div>

              <div className="parent border-2 border-blue rounded-lg p-2 relative">
                {host &&
                  host.form[0].allergy.map((a) => <span key={a}>{a} </span>)}
                <div className="child">
                  <p className="bg-blue text-white text-sm w-24 px-1 rounded-sm absolute -top-3 -right-3">
                    allergy(ies)
                  </p>
                </div>
              </div>

              <div className="parent border-2 border-blue rounded-lg p-2 relative">
                {host &&
                  host.form[0].hobby.map((h) => <span key={h}>{h} </span>)}
                <div className="child">
                  <p className="bg-blue text-white text-sm w-24 px-1 rounded-sm absolute -top-3 -right-3">
                    hobby(ies)
                  </p>
                </div>
              </div>

              <div className="parent border-2 border-blue rounded-lg p-2 relative">
                {host && <p>{host.form[0].cuisine}</p>}
                <div className="child">
                  <p className="bg-blue text-white text-sm w-24 px-1 rounded-sm absolute -top-3 -right-3">
                    Cuisine
                  </p>
                </div>
              </div>

              <div className="parent border-2 border-blue rounded-lg p-2 relative">
                {host &&
                  host.form[0].language.map((l) => <span key={l}>{l} </span>)}
                <div className="child">
                  <p className="bg-blue text-white text-sm w-24 px-1 rounded-sm absolute -top-3 -right-3">
                    Language(s)
                  </p>
                </div>
              </div>

              <div className="parent border-2 border-blue rounded-lg p-2 relative">
                {host &&
                  host.form[0].pet.map((p) => <span key={p.name}>{p} </span>)}
                <div className="child">
                  <p className="bg-blue text-white text-sm w-24 px-1 rounded-sm absolute -top-3 -right-3">
                    Pet(s)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}

        {/* <div>
          {accommodations && accommodations.filter(acc => acc.user_id === id).map(acc => (
            <AccomodationList key={acc._id} acc={acc} />
          ))}
        </div> */}

        <AccomodationList />
      </div>
    </main>
  );
}
