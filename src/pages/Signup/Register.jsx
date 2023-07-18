import { Link } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import { useState } from "react";
import { useRegister } from "./useRegister";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, isLoading, error, success } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(
      firstName,
      lastName,
      country,
      city,
      email,
      password,
      confirmPassword
    );
  };

  return (
    <section className="bg-white font-poppins">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 place-content-end">
          <img
            src="https://images.pexels.com/photos/6190862/pexels-photo-6190862.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <Link
              className="rounded bg-blue px-8 py-3 text-sm font-medium text-snow transition hover:shadow-xl focus:outline-none focus:ring"
              to="/"
            >
              Home
            </Link>
            <h1 className="mt-6 text-2xl font-bold text-deepgray sm:text-3xl md:text-4xl">
              Welcome to Family Holiday with Family
            </h1>

            <p className="mt-4 leading-relaxed text-lightgray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            {error && (
              <p className="text-red text-sm mt-4 font-bold">{error}</p>
            )}

            {success && (
              <p className="text-green text-sm mt-4 font-bold">
                Registered successfully
              </p>
            )}

            <form
              className="mt-2 grid grid-cols-6 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block font-medium text-deepgray"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block font-medium text-deepgray"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Country"
                  className="block font-medium text-deepgray"
                >
                  Country
                </label>

                <CountryDropdown
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  value={country}
                  onChange={(country) => setCountry(country)}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="City"
                  className="block font-medium text-deepgray"
                >
                  City
                </label>

                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-deepgray"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-deepgray"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-deepgray"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>

              <div className="col-span-6">
                <p className="text-sm text-lightgray">
                  By creating an account, you agree to our
                  <a href="#" className="text-deepgray underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-deepgray underline">
                    {" "}
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md bg-blue px-12 py-3 text-sm font-medium text-snow transition hover:bg-transparent hover:text-blue border-2 hover:border-blue focus:outline-none focus:ring active:text-blue-500 disabled:opacity-50"
                  disabled={isLoading}
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-lightgray sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-deepgray underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
