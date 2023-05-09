import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const useUpdateHost = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const { user, dispatch} = useAuthContext()

    const updateHost = async ({hobby,allergy, language,numberOfPeople, cuisine, bio, image}) => {

        setIsLoading(false)
        setError(null)

        // if(user.form.role){
        //     setError('You have submitted this form before.')
        // }

        const response = await fetch(
            'http://localhost:4000/api/user/' + user.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify({hobby,  allergy, language,numberOfPeople, cuisine, bio, image})
            }
        )

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            setSuccess('')
        }
        if(response.ok){
            dispatch({type: 'UPDATE_USER', payload: json})
            setIsLoading(false)
            setError(false)
            if(setError){
                setSuccess('We got your profile information ready!')
            }
        }
    }

    return { updateHost,setError, error, isLoading, success }
}