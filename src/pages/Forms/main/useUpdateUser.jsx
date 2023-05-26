import { useState } from "react";
import { redirect } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);
  const {
    state: { user },
    dispatch,
  } = useAuthContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateUser = async ({
    hobby,
    allergy,
    language,
    adults,
    children,
    pet,
    cuisine,
    bio,
    image,
  }) => {
    setIsLoading(false);
    setError(null);

    const response = await fetch(`http://localhost:4000/api/user/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        hobby,
        allergy,
        language,
        adults,
        children,
        pet,
        cuisine,
        bio,
        image,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setSuccess("");
      setIsSubmitted(false);
    }
    if (response.ok) {
      dispatch({ type: "UPDATE_USER_DETAILS", payload: json });
      setIsLoading(false);
      setError(false);
      setIsSubmitted(true);
      if (setError) {
        setSuccess("We got your profile information ready!");
      }
      return redirect("/");
    }
  };

  return {
    updateUser,
    setError,
    error,
    isLoading,
    success,
    isSubmitted,
  };
};
