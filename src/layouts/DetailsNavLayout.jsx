import { NavLink, Outlet} from 'react-router-dom';

const DetailsNavLayout = () => {
  return (
    <div>
      <header aria-label="Page Header" className="font-poppins relative">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 rounded lg:bg-snow mt-10 lg:shadow-md">
          <div className="flex items-center justify-between gap-4 lg:gap-10 ">
            <div className="flex lg:w-0 lg:flex-1">
              <NavLink to="/details">
                <span className="sr-only">Logo</span>
                <span className="inline-block h-8 w-28 rounded-lg bg-blue" />
              </NavLink>
            </div>

            <nav
              aria-label="Site Nav"
              className="gap-8 text-sm font-medium md:flex"
            >
              

              <NavLink
                className="text-deepgray active:text-blue hover:text-blue font-bold"
                to="/"
              >
                Learn more
              </NavLink>

            </nav>
          </div>
        </div>
      </header>

      <Outlet/>
    </div>
  )
}

export default DetailsNavLayout