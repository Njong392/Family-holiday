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
              Estimated budget
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

          <div className="col-span-6 ">
            <label
              htmlFor="Languages"
              className="block font-medium text-deepgray"
            >
              What language(s) do you speak or do you wish to learn from the
              host family?
            </label>

            <div className="flex items-center gap-2">
              <input
                type="text"
                id="languages"
                name="languages"
                value={languageInput}
                onChange={(e) => setLanguageInput(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
              />

              <button onClick={getLanguages}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-blue"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="col-span-6 flex gap-2 flex-wrap border-b border-lightgray pb-1">
            {language.map((l, language_id) => (
              <div
                className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9"
                key={l}
              >
                <p>{l} </p>
                <button onClick={() => deleteLanguages(language_id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-snow"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                  </svg>
                </button>
              </div>
            ))}
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
