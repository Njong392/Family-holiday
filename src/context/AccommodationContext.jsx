import { createContext, useReducer } from "react";

export const AccommodationContext = createContext();

export const accommodationReducer = (state, action) => {

  switch (action.type) {
    case "SET_ACCOMMODATION":
      return {
        accommodations: action.payload,
      };
    case "GET_ACCOMMODATION":
      return {
        accommodation: action.payload,
      };
    case "CREATE_ACCOMMODATION":
      return {
        accommodations: [action.payload, ...state.accommodations],
      };
    case "SAVE_ACCOMMODATION":
      return {
        savedAccommodations: action.payload
      }
    case "UNSAVE_ACCOMMODATION":
      return {
        savedAccommodations: action.payload
      }
    case "DELETE_ACCOMMODATION":
      return {
        accommodations: state.accommodations.filter(
          (a) => a._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const AccommodationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accommodationReducer, {
    accommodations: [],
    savedAccommodations: [],
    accommodation: null,
  });

  return (
    <AccommodationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccommodationContext.Provider>
  );
};

export default AccommodationContextProvider;
