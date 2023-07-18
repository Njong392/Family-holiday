import { CountryDropdown } from "react-country-region-selector";
import { useState } from "react";
import { useUserContext } from "../../../hooks/useUserContext";
import { useAccommodationContext } from "../../../hooks/useAccommodationContext";
import moment from "moment";

const Host = () => {
  const {
    state: { user },
  } = useUserContext();
  const { dispatch } = useAccommodationContext();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [maxOfGuests, setMaxOfGuests] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [houseRulesInput, setHouseRulesInput] = useState("");
  const [houseRules, setHouseRules] = useState([]);
  const [description, setDescription] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);
  const date = moment().format("DD-MM-YYYY");

  //to handle adding and deleting house rules
  function getHouseRules(e) {
    e.preventDefault();
    setHouseRules(houseRules.concat(houseRulesInput));
    setHouseRulesInput("");
  }

  function deleteHouseRules(id) {
    setHouseRules((oldHouseRules) => oldHouseRules.filter((_, i) => i !== id));
  }

  // convert image file to base64
  const setFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
  };

  // receive file from form
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFileToBase64(file);
  };

  //handle form submission for creating accommodation
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    const accommodation = {
      country,
      city,
      bedrooms,
      beds,
      bathrooms,
      maxOfGuests,
      arrivalDate,
      departureDate,
      description,
      image: imageBase64,
      pricePerNight,
      houseRules,
    };

    if (!user?.isVerified) {
      setError(
        "You must verify your email and/or be logged in before creating an accommodation"
      );
      setSuccess("");
    } else {
      if (
        !country ||
        !city ||
        !bedrooms ||
        !beds ||
        !bathrooms ||
        !maxOfGuests ||
        !pricePerNight ||
        !houseRules ||
        !image
      ) {
        setError("Please fill in all the fields");
        setSuccess("");
      } else if (!(arrivalDate < departureDate)) {
        setError(
          "Expected date of arrival must be before expected date of departure"
        );
        setSuccess("");
      } else if (arrivalDate < date) {
        setError("Expected date of arrival must be later than today");
        setSuccess("");
      } else {
        const response = await fetch(
          "http://localhost:4000/api/accommodation",
          {
            method: "POST",
            body: JSON.stringify(accommodation),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const json = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setError(json.error);
          setSuccess("");
        }

        if (response.ok) {
          // update the auth context
          dispatch({ type: "CREATE_ACCOMMODATION", payload: json });
          setIsLoading(false);
          setSuccess("Accommodation created successfully");
          setError("");
        }
      }
    }
  };

  return (
    <main aria-label="Main Section" className="font-poppins">
      <div className="mx-auto max-w-screen-xl py-16 rounded mt-5 lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="grid col-span-8 lg:border-2 lg:shadow-xl lg:border-blue rounded pb-7 py-5 px-8">
          <div className="max-w-xl lg:max-w-3xl">
            <h3 className="text-3xl font-bold text-blue mt-4">
              Tell Guests About Your Home
            </h3>
            <p className="text-sm text-lightgray">
              This is where you enter details about your property.
            </p>
            <p className="text-sm text-blue mt-4">
              *Please fill in all fields correctly and carefully
            </p>

            <form
              className="mt-2 grid grid-cols-6 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="Country"
                  className="block font-medium text-deepgray"
                >
                  Country
                </label>
                <p className="text-xs text-lightgray">
                  This is the country where your property is located
                </p>

                <CountryDropdown
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={country}
                  onChange={(country) => setCountry(country)}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="City"
                  className="block font-medium text-deepgray"
                >
                  City
                </label>
                <p className="text-xs text-lightgray">
                  This is the city where your property is located
                </p>

                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-2">
                <label
                  htmlFor="bedrooms"
                  className="block font-medium text-deepgray"
                >
                  Number of bedrooms
                </label>
                <p className="text-xs text-lightgray">
                  These are the number of bedrooms availaible for guests
                </p>

                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-2">
                <label
                  htmlFor="beds"
                  className="block font-medium text-deepgray"
                >
                  Beds
                </label>
                <p className="text-xs text-lightgray">
                  These are the number of beds availaible for guests
                </p>

                <input
                  type="number"
                  id="beds"
                  name="beds"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-2">
                <label
                  htmlFor="bathrooms"
                  className="block font-medium text-deepgray"
                >
                  Bathrooms
                </label>
                <p className="text-xs text-lightgray">
                  These are the number of bathrooms availaible for guests
                </p>

                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="arrivalDate"
                  className="block  font-medium text-deepgray"
                >
                  Guests can stay from:
                </label>

                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block  font-medium text-deepgray"
                >
                  to:
                </label>

                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="maxOfGuests"
                  className="block  font-medium text-deepgray"
                >
                  Maximum number of guests allowed
                </label>

                <input
                  type="number"
                  id="maxOfGuests"
                  name="maxOfGuests"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={maxOfGuests}
                  onChange={(e) => setMaxOfGuests(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="pricePerNight"
                  className="block  font-medium text-deepgray"
                >
                  Price per night{" "}
                  <span className="text-xs text-lightgray">
                    (The currency is dollars)
                  </span>
                </label>

                <input
                  type="number"
                  id="pricePerNight"
                  name="pricePerNight"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white  text-deepgray shadow-sm"
                  value={pricePerNight}
                  onChange={(e) => setPricePerNight(e.target.value)}
                />
              </div>

              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="Hobbies"
                  className="block font-medium text-deepgray"
                >
                  Home rules
                </label>
                <p className="text-xs text-lightgray">
                  Some rules that you would want guests to know beforehand. For
                  each rule you add, click on the "+" button.
                </p>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    id="houseRules"
                    name="houseRules"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                    value={houseRulesInput}
                    onChange={(e) => setHouseRulesInput(e.target.value)}
                  />

                  <button onClick={getHouseRules}>
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

              <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                {houseRules.map((h, id) => (
                  <div
                    className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9"
                    key={h}
                  >
                    <p>{h} </p>
                    <button onClick={() => deleteHouseRules(id)}>
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
                <label
                  htmlFor="about"
                  className="block font-medium text-deepgray"
                >
                  A description about the property
                </label>
                <p className="text-lightgray text-xs">
                  Use this chance to write about the accommodation your families
                  will be staying at, and what makes it special. What should
                  guests expect from spending the holidays under your roof?
                </p>

                <textarea
                  id="description"
                  name="description"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="profile_image"
                  className="block font-medium text-deepgray"
                >
                  Upload your favourite family photo. We'll use this as your
                  profile picture
                </label>

                <input
                  type="file"
                  id="image"
                  name="image"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                  multiple
                  accept="image/*"
                  onChange={handleImage}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md bg-blue px-12 py-3  font-medium text-snow transition hover:bg-transparent hover:text-blue border-2 hover:border-blue focus:outline-none focus:ring active:text-blue-500 disabled:opacity-50"
                  disabled={isLoading}
                >
                  Create listing
                </button>
              </div>
            </form>
            {error && (
              <p className="text-red text-sm mt-4 font-bold">{error}</p>
            )}
            {success && (
              <p className="text-green text-sm mt-4 font-bold">{success}</p>
            )}
          </div>
        </main>
      </div>
    </main>
  );
};

export default Host;
