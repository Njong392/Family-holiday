import { NavLink, Outlet, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const { id } = useParams();
  const {
    state: { user, userDetails },
    dispatch,
  } = useUserContext();

  //if modal is visible, hide it
  function handleModal() {
    setModal(false);
  }

  //if modal is hidden, show it
  function showModal() {
    setModal(true);
  }

  //for the burger menu
  function handleMenu() {
    setMenu(!menu);
  }

  // handle logout
  const handleClick = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch LOGOUT action
    dispatch({ type: "LOGOUT" });
  };

  // fetch user from backend for navbar
  const fetchUser = async () => {
    const response = await fetch(`http://localhost:4000/api/user/${user.id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_USER_DETAILS", payload: json });
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    } else {
      console.log("no user");
    }
  }, [user, id]);

  return (
    <div>
      <header aria-label="Page Header" className="font-poppins relative">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 rounded lg:bg-snow lg:shadow-md mt-10">
          <div className="flex items-center justify-between gap-4 lg:gap-10 ">
            <div className="flex lg:w-0 lg:flex-1">
              <NavLink to="/">
                <span className="sr-only">Logo</span>
                <span className="inline-block h-8 w-28 rounded-lg bg-blue" />
              </NavLink>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium md:flex"
            >
              <NavLink
                className="text-deepgray active:text-blue hover:text-blue font-bold"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={
                  user
                    ? "text-deepgray active:text-blue hover:text-blue font-bold"
                    : "hidden"
                }
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

            <div
              className={
                user
                  ? "md:flex items-center gap-4 hidden"
                  : "items-center gap-4 sm:hidden"
              }
            >
              <a href="#" className="block shrink-0 p-2.5 text-deepgray">
                <span className="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"></path>
                </svg>
              </a>

              <a href="#" className="block shrink-0 p-2.5 text-deepgray">
                <span className="sr-only">Messages</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path>
                </svg>
              </a>
            </div>

            <button className="md:block shrink-0 hidden" onClick={showModal}>
              <span className="sr-only">Profile</span>
              {user && userDetails ? (
                <img
                  alt="Man"
                  src={userDetails.form[0].image.url}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="h-10 w-10 rounded-full object-cover hidden"
                />
              )}
            </button>

            <div
              className={
                modal
                  ? "absolute bg-white rounded p-2 right-2 -bottom-24 border-2 border-blue pt-4"
                  : "hidden"
              }
            >
              <ul>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-4 h-4"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M14.2558 21.7442L12 24L9.74416 21.7442C5.30941 20.7204 2 16.7443 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 16.7443 18.6906 20.7204 14.2558 21.7442ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
                  </svg>
                  {user && (
                    <NavLink to={`/profile/${user.id}`}>
                      View your profile
                    </NavLink>
                  )}
                </li>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-4 h-4"
                  >
                    <path d="M7.24264 17.9964H3V13.7538L14.435 2.31877C14.8256 1.92825 15.4587 1.92825 15.8492 2.31877L18.6777 5.1472C19.0682 5.53772 19.0682 6.17089 18.6777 6.56141L7.24264 17.9964ZM3 19.9964H21V21.9964H3V19.9964Z" />
                  </svg>
                  <NavLink to="/edit/profile">Edit your profile</NavLink>
                </li>
                <li className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-4 h-4"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M1.99805 21.0003V19.0003L3.99805 19.0001V4.83489C3.99805 4.35161 4.34367 3.93748 4.81916 3.85102L14.2907 2.12892C14.6167 2.06965 14.9291 2.28589 14.9884 2.61191C14.9948 2.64733 14.998 2.68325 14.998 2.71924V4.00014L18.998 4.00032C19.5503 4.00032 19.998 4.44803 19.998 5.00032V19.0001L21.998 19.0003V21.0003H17.998V6.00032L14.998 6.00014V21.0003H1.99805ZM11.998 11.0003H9.99805V13.0003H11.998V11.0003Z" />
                  </svg>
                  <NavLink onClick={handleClick} to="/">
                    Log out
                  </NavLink>
                </li>
              </ul>
              <button
                className="rounded-full p-1 border-2 mt-2 border-red text-red text-xs"
                onClick={handleModal}
              >
                Cancel
              </button>
            </div>

            <div className="md:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
                onClick={handleMenu}
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
          <nav
            className={
              menu ? "border-b border-deepgray pb-4 md:hidden" : "hidden"
            }
            id="menu"
          >
            <ul className="text-sm mt-6 flex flex-col ">
              <li className="text-gray-700 py-1">
                <NavLink
                  className="flex justify-end gap-2 items-center"
                  id="nav-item"
                >
                  <span>Become a host</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-deepgray"
                  >
                    <path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM7.5 13.0001C7.5 15.4854 9.51472 17.5001 12 17.5001C14.4853 17.5001 16.5 15.4854 16.5 13.0001H14.5C14.5 14.3808 13.3807 15.5001 12 15.5001C10.6193 15.5001 9.5 14.3808 9.5 13.0001H7.5Z"></path>
                  </svg>
                </NavLink>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-2 items-center"
                  id="nav-item2"
                >
                  <span>Messages</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-deepgray"
                  >
                    <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path>
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-2 items-center"
                  id="nav-item3"
                >
                  <span>Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-deepgray"
                  >
                    <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"></path>
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-2 items-center"
                  id="nav-item3"
                >
                  <span>View your profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-6 h-6"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M14.2558 21.7442L12 24L9.74416 21.7442C5.30941 20.7204 2 16.7443 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 16.7443 18.6906 20.7204 14.2558 21.7442ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-2 items-center"
                  id="nav-item3"
                >
                  <span>Edit your profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-6 h-6"
                  >
                    <path d="M7.24264 17.9964H3V13.7538L14.435 2.31877C14.8256 1.92825 15.4587 1.92825 15.8492 2.31877L18.6777 5.1472C19.0682 5.53772 19.0682 6.17089 18.6777 6.56141L7.24264 17.9964ZM3 19.9964H21V21.9964H3V19.9964Z" />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <Link
                  onClick={handleClick}
                  to="/"
                  className="flex justify-end gap-2 items-center"
                  id="nav-item3"
                >
                  <span>Log out</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-deepgray w-6 h-6"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M1.99805 21.0003V19.0003L3.99805 19.0001V4.83489C3.99805 4.35161 4.34367 3.93748 4.81916 3.85102L14.2907 2.12892C14.6167 2.06965 14.9291 2.28589 14.9884 2.61191C14.9948 2.64733 14.998 2.68325 14.998 2.71924V4.00014L18.998 4.00032C19.5503 4.00032 19.998 4.44803 19.998 5.00032V19.0001L21.998 19.0003V21.0003H17.998V6.00032L14.998 6.00014V21.0003H1.99805ZM11.998 11.0003H9.99805V13.0003H11.998V11.0003Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="flex justify-end gap-2 items-center"
                  id="nav-item3"
                >
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-deepgray"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
