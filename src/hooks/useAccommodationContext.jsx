import { AccommodationContext } from "../context/AccommodationContext";
import { useContext } from "react";

export const useAccommodationContext = () => {
    const context = useContext(AccommodationContext);

    if (!context) {
        throw Error("useAccommodationContext must be used inside AccommodationContextProvider");
    }

    return context;
}