import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import FilteredAccommodations from "../../components/FilteredAccommodations";
import Verification from "../../components/Verification";
import { useAccommodationContext } from "../../hooks/useAccommodationContext";

const Filter = () => {
  const [searchParams] = useSearchParams();
  const [destination, setDestination] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [budget, setBudget] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [languageInput, setLanguageInput] = useState("");
  const [language, setLanguage] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const NavigateTo = useNavigate();
  const { accommodations } = useAccommodationContext();

  // to handle adding/removing languages
  function getLanguages(e) {
    e.preventDefault();
    setLanguage(language.concat(languageInput));
    setLanguageInput("");
  }

  function deleteLanguages(id) {
    setLanguage((oldLanguage) => oldLanguage.filter((_, i) => i !== id));
  }

  const setQueryParams = (e) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("destination", destination);
    newSearchParams.set("numberOfGuests", numberOfGuests);
    newSearchParams.set("budget", budget);
    newSearchParams.set("arrivalDate", arrivalDate);
    newSearchParams.set("departureDate", departureDate);
    //newSearchParams.set('language', language)

    const url = `?destination=${destination}&numberOfGuests=${numberOfGuests}&budget=${budget}&arrivalDate=${arrivalDate}&departureDate=${departureDate}`;
    NavigateTo(url);
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-poppins">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-blue sm:text-3xl">
          Narrow down your search 🔍!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-deepgray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 grid gap-6 grid-cols-6"
          onSubmit={setQueryParams}
        >
          {/* {error && <p className="text-red text-sm mt-4 font-bold">{error}</p>} */}

          {/* {success && (
            <p className="text-green text-sm mt-4 font-bold">
              Registered successfully
            </p>
          )} */}

          <div className="col-span-6">
            <label
              htmlFor="Destination"
              className="block font-medium text-deepgray"
            >
              Where do you wish to go?
            </label>

            <CountryDropdown
              className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
              value={destination}
              onChange={(destination) => setDestination(destination)}
              name="destination"
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="numberOfGuests"
              className="block  font-medium text-deepgray"
            >
              Number of guests travelling
            </label>

            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              className="w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <label htmlFor="budget" className="block font-medium text-deepgray">
             Maximum estimated budget
              <span className="text-xs text-lightgray">
                (The currency is dollars)
              </span>
            </label>

            <input
              type="number"
              id="budget"
              name="budget"
              className="w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="arrivalDate"
              className="block  font-medium text-deepgray"
            >
              Expected arrival date
            </label>

            <input
              type="date"
              id="arrivalDate"
              name="arrivalDate"
              className="w-full mt-1 rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block  font-medium text-deepgray"
            >
              Expected departure date
            </label>

            <input
              type="date"
              id="departureDate"
              name="departureDate"
              className="w-full mt-1 rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="col-span-6">
            <button
              type="submit"
              className="block w-full rounded-lg bg-blue px-5 py-3 font-medium text-snow
                disabled:opacity-50"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
      {isSubmitted && accommodations && (
        <FilteredAccommodations submitted={isSubmitted} />
      )}

      {!accommodations && isSubmitted && (
        <Verification
          text={"Oops. We found no accommodations that fit that criteria."}
        />
      )}
    </div>
  );
};

export default Filter;
