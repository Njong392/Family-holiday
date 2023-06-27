import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAccommodationContext } from "../../hooks/useAccommodationContext";
import { useUserContext } from "../../hooks/useUserContext";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Accommodation() {
  const { id } = useParams();
  const {accommodation, dispatch} = useAccommodationContext()
  const { state: { user } } = useUserContext();
  const [isSaved, setIsSaved] = useState(false)
  const [message, setMessage] = useState("")


  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [guestCount, setGuestCount] = useState(1)

  const adultDisabled = adultCount === 1;
  const childrenDisabled = childrenCount === 0;
  const infantDisabled = infantCount === 0;

  const incrementAdultCount = () => {
    setGuestCount(guestCount + 1)
    setAdultCount(adultCount + 1);
    
  }

  const decrementAdultCount = () => {
    setGuestCount(guestCount - 1)
    setAdultCount(adultCount - 1);
  }

  const incrementChildrenCount = () => {
    setGuestCount(guestCount + 1)
    setChildrenCount(childrenCount + 1);
  }

  const decrementChildrenCount = () => {
    setGuestCount(guestCount - 1)
    setChildrenCount(childrenCount - 1);
  }

  const incrementInfantCount = () => {
    setInfantCount(infantCount + 1)
  }

  const decrementInfantCount = () => {
    setInfantCount(infantCount - 1)
  }


  const fetchAccommodation = async () => {
    const response = await fetch(`http://localhost:4000/api/accommodation/${id}`, {
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_ACCOMMODATION", payload: json });
    }
  }

  
  const saveAccommodation = async () => {
   
      const response = await fetch("http://localhost:4000/api/savedAccommodation", {
      method: "POST",
      body: JSON.stringify({accommodation}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      }
    })

    const json = await response.json()

    if(response.ok){
      dispatch({ type: "SAVE_ACCOMMODATION", payload: json })

      setIsSaved(true)
      localStorage.setItem("saved", true)
      setMessage("You've saved this accommodation!")
      setTimeout(() => {
        setMessage("")
      }, 4000)
      
    }
    
    
    // else{
    //   const response = await fetch(`http://localhost:4000/api/savedAccommodation/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${user.token}`,
    //   }
    //   })

    //   const json = await response.json()

    //   if(response.ok){
    //     dispatch({type: 'UNSAVE_ACCOMMODATION', payload: json})

    //     setIsSaved(false)
    //     localStorage.setItem("saved", false)
    //     setMessage("You've unsaved this accommodation")
    //     setTimeout(() => {
    //       setMessage("")
    //     }, 4000)
    //   }
    // }
  }

  useEffect(() => {
    fetchAccommodation();
    const saved = localStorage.getItem("saved")
    console.log(saved)
    
    if(saved){
      setIsSaved(true)
    } else{
      setIsSaved(false)
    }
   
  }, [])

  return (
    <main aria-label="Main Section" className="font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded lg:bg-snow mt-5 lg:shadow-md">
        <div className="flex justify-between items-center mt-12">
          <div>
              <h3 className="text-3xl font-bold text-blue">
              Apartment complex with pool
            </h3>
            {
              accommodation && (
                <p className="text-sm text-deepgray font-bold">{accommodation.city}, <span>{accommodation.country}</span></p>
              )
            }
          </div>

          <div>
            <button className="bg-blue text-snow rounded-lg p-2 hidden md:block" onClick={saveAccommodation}>{isSaved ? "Bookmarked!" : "Bookmark accommodation"}</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-deepgray cursor-pointer active:bg-blue md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            <p className="text-xs font-bold">{message}</p>
          </div>

        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-4">
          <div>
            <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="h-[100%] w-full rounded-xl object-cover shadow-xl"
            />
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[100%] w-full rounded-xl object-cover shadow-xl"
            />

            <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[100%] w-full rounded-xl object-cover shadow-xl"
            />

            <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[100%] w-full rounded-xl object-cover shadow-xl"
            />

            <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="h-[100%] w-full rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>

        <h2 className="mt-16 text-blue text-2xl font-bold">About the house</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 md:gap-8 ">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997Z" />
                </svg>
                {accommodation && (
                  <p>{accommodation.bedrooms} Bedroom(s)</p>
                )}
              </div>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M15 18H9V21H7V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17V21H15V18ZM11 20H13V23H11V20Z" />
                </svg>
                {accommodation && (
                  <p>{accommodation.bathrooms} Bathroom(s)</p>
                )}
              </div>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z" />
                </svg>
                {accommodation && (
                  <p>{accommodation.beds} Bed(s)</p>
                )}
              </div>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z" />
                </svg>
                {accommodation && (
                  <p>Maximum of {accommodation.maxOfGuests} guest(s)</p>
                )}
              </div>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z" />
                </svg>
                {accommodation && (
                  <p>Available from {moment(accommodation.arrivalDate).format('MMMM D')} - {moment(accommodation.departureDate).format('MMMM D')}</p>
                )}
              </div>
            </div>

            <div>
              {accommodation && (
                <p className="mt-2">Reach out to the <Link to={`/profile/?userId=${accommodation.user_id}`} className="text-blue underline">host family</Link> </p>
              )}   
            </div>

            <div>
              {accommodation && (
                <p className="mt-4 line-clamp-2">
                  {accommodation.description}
              </p>
              )}
              <a className="underline font-bold text-sm" href="#">
                see more
              </a>
            </div>

            {/* <div>
              <h2 className="mt-12 text-blue text-2xl font-bold">
                Extra Amenities
              </h2>
              <p className="text-xs text-lightgray">
                *These are not included in the lodging fee, and should only be
                incurred if the guest is willing to pay extra.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                <div>
                  <p className="font-bold text-2xl">
                    $<scan className="text-lg">22</scan>
                  </p>
                  <p>Home cooked meals</p>
                </div>

                <div>
                  <p className="font-bold text-2xl">
                    $<scan className="text-lg">22</scan>
                  </p>
                  <p>Tours</p>
                </div>

                <div>
                  <p className="font-bold text-2xl">
                    $<scan className="text-lg">22</scan>
                  </p>
                  <p>Boat rides</p>
                </div>

                <div>
                  <p className="font-bold text-2xl">
                    $<scan className="text-lg">22</scan>
                  </p>
                  <p>Cleaning</p>
                </div>

                <div>
                  <p className="font-bold text-2xl">
                    $<scan className="text-lg">22</scan>
                  </p>
                  <p>Pool</p>
                </div>
              </div>
            </div> */}

            <div>
              <h2 className="mt-12 text-blue text-2xl font-bold">
                House rules
              </h2>
              <p className="text-xs text-lightgray">
                *These are very important, as you'll be living in someone else's
                space. Please try to adhere to whatever rules the host puts in
                place.
              </p>

             {accommodation && (
              <ul className="list-disc ml-4 list-inside">
                {accommodation.houseRules.map(rule => (
                  <li key={rule.name}>{rule}</li>
                ))}
            </ul>
             )}
            </div>
          </div>

          <section className="text-deepgray">

                    <div className="border-2 p-4 rounded-xl border-blue shadow-xl">
                       {accommodation &&  (
                        <h3 className="text-2xl font-bold">${accommodation.pricePerNight} <span className="text-sm ">night</span></h3>
                       )}

                        <div className="mt-1">
                            <p className="text-sm font-bold">Guests</p>
                            <p className="border-b border-lightgray">{guestCount} guest(s), {infantCount} infant(s)</p>

                            <div className="flex justify-between mt-4">
                                <div>
                                <p className="font-bold">Adults</p>
                                <p>13+ years old</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={decrementAdultCount} disabled={adultDisabled}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={adultDisabled ? "w-8 h-8 text-lightgray opacity-25" : "w-8 h-8 text-lightgray" }
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>

                                    <p className="w-4 text-sm">{adultCount}</p>

                                   <button onClick={incrementAdultCount}>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                   </button>

                                </div>
                            </div>

                            <div className="flex justify-between mt-2">
                               <div>
                               <p className="font-bold">Children</p>
                               <p>2-12 years old</p>
                               </div>

                                <div className="flex items-center gap-2">
                                    <button onClick={decrementChildrenCount} disabled={childrenDisabled}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={childrenDisabled ? "w-8 h-8 text-lightgray opacity-25" : "w-8 h-8 text-lightgray" } >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>

                                    <p className="w-4 text-sm">{childrenCount}</p>

                                    <button onClick={incrementChildrenCount}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>

                                </div>
                            </div>

                            <div className="flex justify-between mt-2  border-b border-lightgray">
                                <div>
                                    <p className="font-bold">Infants</p>
                                    <p>0-2 years old</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button onClick={decrementInfantCount} disabled={infantDisabled}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className={infantDisabled ? "w-8 h-8 text-lightgray opacity-25" : "w-8 h-8 text-lightgray" }>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>

                                    <p className="w-4 text-sm">{infantCount}</p>

                                    <button onClick={incrementInfantCount}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </button>

                                </div>
                            </div>

                            <div className="lg:flex items-center mt-4 justify-between block">
                              <div>
                                <label
                                  htmlFor="arrivalDate"
                                  className="block  font-medium text-deepgray text-xs"
                                >
                                  Expected arrival date:
                                </label>
                                {accommodation && (
                                  <input type="date" name="arrivalDate" id="" min={moment(accommodation.arrivalDate).format('YYYY-MM-D')} max={moment(accommodation.departureDate).format('YYYY-MM-D')} />
                                )}
                              </div>

                              <div className="mt-2 lg:mt-0">
                                <label
                                  htmlFor="arrivalDate"
                                  className="block  font-medium text-deepgray text-xs"
                                >
                                  Expected departure date:
                                </label>
                                <input type="date" name="departureDate" id="" />
                              </div>
                            </div>
                        </div>

                        <button className="bg-blue text-snow rounded-xl px-4 py-4 w-full mt-4 text-lg font-semibold">Reserve</button>
                    </div>

                    
                </section>
        </div>
      </div>
    </main>
  );
}
