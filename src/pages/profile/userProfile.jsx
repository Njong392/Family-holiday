import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccomodationList from "../../components/accommodation/AccommodationList";
import { useUserContext } from "../../hooks/useUserContext";


export default function UserProfile() {
  const {
    state: { host, userDetails },
    dispatch,
  } = useUserContext();
  const [hideText, setHideText] = useState(false);
  const [searchParams] = useSearchParams();


  const id = searchParams.get('userId');

  const showText = () => {
    setHideText(!hideText);
  }

  const fetchHost = async () => {
    const response = await fetch(`http://localhost:4000/api/user/${id}`);

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_HOST", payload: json });
      console.log(host);
    }
  };

  
  useEffect(() => {
    fetchHost();
    // const url = window.location.pathname.split('/')[2]
    // console.log('url:', url)
  }, [host?.id, userDetails, id]);

  

  return (
    <main aria-label="Main Section" className="font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded mt-5">
        <h3 className="text-3xl font-bold text-blue mt-12">Family Profile</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-4">
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 text-deepgray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
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
                className={hideText ? "leading-relaxed cursor-pointer" : "leading-relaxed cursor-pointer line-clamp-3"
                } >
                  {host.form[0].bio}
                </p>

              )}
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
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
        </div>

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
