import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    state: { hosts },
    dispatch,
  } = useUserContext();

  const fetchHosts = async () => {
    setIsLoading(true)
    const response = await fetch("http://localhost:4000/api/user");
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_HOSTS", payload: json });
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchHosts();
  }, []);
  
  return (
    <main aria-label="Main Section" className="font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded lg:bg-snow mt-5 lg:shadow-md ">
        <section className="lg:flex justify-between items-center block">
          <div>
            <h1 className="text-4xl text-deepgray font-extrabold">
              Looking for a host family?
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, doloribus?
            </p>
          </div>

          <Link
            className="flex gap-2 items-center rounded bg-blue text-snow px-3 py-2 mt-3 lg:mt-0"
            to="/filter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-snow"
              role="filter"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            Filters
          </Link>
        </section>

        {isLoading ? <div className="text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-snow animate-spin fill-blue mt-8" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div> : <div>
          <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {hosts &&
            hosts.map((host) =>
              host.form.length !== 0 ? (
                <Link
                  className="group"
                  to={`/profile/?userId=${host._id}`}
                  key={host._id}
                  id={host._id}
                >
                  <img
                    alt="Lava"
                    src={host.form[0].image.url}
                    className="w-full h-56 rounded-xl object-cover shadow-xl transition"
                  />

                  <div className="py-4">
                    <h3 className="text-2xl font-bold text-blue">
                      {host.first_name} <span>{host.last_name}</span>
                    </h3>
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
                      <p className="text-sm font-bold text-blue">
                        New York, USA
                      </p>
                    </div>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {host.form[0].bio}
                    </p>

                    <button className="text-blue text-sm underline">
                      Read more
                    </button>
                  </div>
                </Link>
              ) : (
                <p key={host._id} className="hidden" />
              )
            )}
        </section>

        <div className="text-center">
          <button className="px-12 py-3 mt-8 text-sm font-medium text-blue border border-indigo-600 rounded-full hover:bg-blue hover:text-white focus:outline-none focus:ring active:bg-blue">
            See more families
          </button>
        </div>
        </div> }
      </div>
    </main>
  );
};

export default Welcome;
