import { Outlet } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export default function Footer() {
  const {
    state: { user },
  } = useUserContext();

  return (
    <div>
      <Outlet />

      <footer aria-label="Site Footer" className="bg-white font-poppins">
        <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          {/* {!user &&
                (
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-deepgray sm:text-5xl">
                            Ready to start a dream holiday?
                        </h2>

                        <p className="max-w-sm mx-auto mt-4 text-gray-500">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
                            ipsum eos temporibus ea nihil.
                        </p>

                        <a
                            href="#"
                            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-blue border border-indigo-600 rounded-full hover:bg-blue hover:text-white focus:outline-none focus:ring active:bg-blue"
                        >
                            Learn more
                        </a>
                    </div>
                )

            } */}

          <div className="pt-8 mt-16 border-t border-lightgray sm:flex sm:items-center sm:justify-between lg:mt-24">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-deepgray transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-deepgray transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-deepgray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <p className="text-deepgray text-xs">Contact us</p>
                  </div>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </footer>
    </div>
  );
}
