import { useAccommodationContext } from "../../hooks/useAccommodationContext";
import { useUserContext } from "../../hooks/useUserContext";
import { useState } from "react";

export const useFetchAccommodations = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const { accommodations, dispatch } = useAccommodationContext()
    const { state:{user} } = useUserContext()

    const fetchAccommodations = async () => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/accommodation', {
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        })
    
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setIsLoading(false)
        }
    
        if(response.ok){
          dispatch({type: 'SET_ACCOMMODATION', payload: json})

            setIsLoading(false)
            setError(null)
        }
      }

      return { fetchAccommodations, isLoading, error, accommodations }
    
}