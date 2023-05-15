import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useUpdateHost } from '../pages/forms/hosts/useUpdateHost';

export default function Navbar({user, userDetails}) {
  const [modal, setModal] = useState(false);
  //const {isSubmitted} = useUpdateHost()
  // const {
  //   state: { user, userDetails },
  //   dispatch,
  // } = useAuthContext();


  function handleModal() {
    setModal(false);
  }

  function showModal() {
    setModal(true);
  }

  const handleClick = () => {
    //remove user from storage
    localStorage.removeItem('user');

    //dispatch LOGOUT action
    dispatch({ type: 'LOGOUT' });
  };



  return (
    <div>
      <header aria-label="Page Header" className="font-poppins relative">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 rounded lg:bg-snow mt-5 lg:shadow-md">
          <div className="flex items-center justify-between gap-4 lg:gap-10 ">
            <div className="flex lg:w-0 lg:flex-1">
              <NavLink to="/signup">
                <span className="sr-only">Logo</span>
                <span className="inline-block h-8 w-28 rounded-lg bg-blue"></span>
              </NavLink>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium md:flex"
            >
              <NavLink
                className="text-deepgray active:text-blue hover:text-blue font-bold"
                to="/guest_form"
              >
                Become a guest
              </NavLink>
              <NavLink
                className="text-deepgray active:text-blue hover:text-blue font-bold"
                to="/host_form"
                
              >
                Become a host
              </NavLink>
             
                <NavLink
                  className="text-deepgray active:text-blue hover:text-blue font-bold"
                  to="/"
                >
                  Learn more
                </NavLink>
              
            </nav>

            <div className="md:flex items-center gap-4 hidden">
              <a href="#" className="block shrink-0 p-2.5 text-deepgray">
                <span className="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-deepgray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </a>

              <a href="#" className="block shrink-0 p-2.5 text-deepgray">
                <span className="sr-only">Messages</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-deepgray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </a>
            </div>

            {/*<button*/}
            {/*  className="md:block shrink-0 hidden"*/}
            {/*  onClick={showModal}*/}
            {/*>*/}
            {/*  <span className="sr-only">Profile</span>*/}
            {/*  {!userDetails ? (*/}
            {/*    <img*/}
            {/*      alt="Man"*/}
            {/*      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"*/}
            {/*      className="h-10 w-10 rounded-full object-cover"*/}
            {/*    />*/}
            {/*  ): (*/}
            {/*    <img*/}
            {/*      alt="Man"*/}
            {/*      src={userDetails.form[0].image.url}*/}
            {/*      className="h-10 w-10 rounded-full object-cover"*/}
            {/*    />*/}
            {/*  )}*/}
            {/*</button>*/}

            <div
              className={
                modal
                  ? 'absolute bg-white rounded p-2 right-14 -bottom-20 border-2 border-blue'
                  : 'absolute bg-white rounded p-2 right-14 -bottom-20 border-2 border-blue hidden'
              }
            >
              <ul>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-4 h-4"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14.2558 21.7442L12 24L9.74416 21.7442C5.30941 20.7204 2 16.7443 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 16.7443 18.6906 20.7204 14.2558 21.7442ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                  </svg>
                  <NavLink to="/">Edit your profile</NavLink>
                </li>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-4 h-4"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M1.99805 21.0003V19.0003L3.99805 19.0001V4.83489C3.99805 4.35161 4.34367 3.93748 4.81916 3.85102L14.2907 2.12892C14.6167 2.06965 14.9291 2.28589 14.9884 2.61191C14.9948 2.64733 14.998 2.68325 14.998 2.71924V4.00014L18.998 4.00032C19.5503 4.00032 19.998 4.44803 19.998 5.00032V19.0001L21.998 19.0003V21.0003H17.998V6.00032L14.998 6.00014V21.0003H1.99805ZM11.998 11.0003H9.99805V13.0003H11.998V11.0003Z"></path>
                  </svg>
                  <NavLink onClick={handleClick} to="/">
                    Log out
                  </NavLink>
                </li>
              </ul>
              <button
                className="rounded-full p-1 border-2 mt-2 border-red text-red text-sm"
                onClick={handleModal}
              >
                Cancel
              </button>
            </div>

            <div className="md:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-deepgray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <Outlet user={user} />
    </div>
  );
}
