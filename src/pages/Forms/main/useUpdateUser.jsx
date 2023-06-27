import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [success, setSuccess] = useState(null);
  const {
    state: { user },
    dispatch,
  } = useUserContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

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

    if(user?.isVerified){
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
      setError("Some error occured. Please try again later.");
      setSuccess("");
      setIsSubmitted(false);
    }
    if (response.ok) {
      dispatch({ type: "UPDATE_USER_DETAILS", payload: json });
      setIsLoading(false);
      setError(false);
      setIsSubmitted(true);
      setIsLoggedIn(true)
      if (setError) {
        setSuccess("We got your profile information ready!");
      }
      return navigate("/");
    } 
    else{
      setError("Whoops! You cannot perform this action until your email is verified.")
    }
    }
  };

  return {
    updateUser,
    setError,
    isLoggedIn,
    error,
    isLoading,
    setSuccess,
    isSubmitted,
  };
};
