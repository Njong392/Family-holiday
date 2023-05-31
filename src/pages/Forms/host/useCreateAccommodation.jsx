import { useState } from "react";
import { useAccommodationContext } from "../../../hooks/useAccommodationContext";
import { useUserContext } from "../../../hooks/useUserContext";

export const useCreateAccommodation = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);
  const { dispatch } = useAccommodationContext();
  const {
    state: { user },
  } = useUserContext();

  const createAccommodation = async () => {
    setIsLoading(true);
    setError(null);

    const accommodation = {
      country,
      city,
      bedrooms,
      beds,
      bathrooms,
      maxOfGuests,
      arrivalDate,
      departureDate,
      pricePerNight,
      houseRules,
    };

    const response = await fetch("http://localhost:4000/api/accommodation", {
      method: "POST",
      body: JSON.stringify(accommodation),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setSuccess("");
    }

    if (response.ok) {
      // update the auth context
      dispatch({ type: "CREATE_ACCOMMODATION", payload: json });

      // update loading state
      setIsLoading(false);
      setError(false);
      if (setError) {
        setSuccess("Accommodation created succesfully");
      }
    }
  };

  return {
    createAccommodation,
    error,
    isLoading,
    success,
    setError,
  };
};
