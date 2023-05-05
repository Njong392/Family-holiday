import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [success, setSuccess] = useState(null)
    const { dispatch } = useAuthContext()


    const register = async(first_name, last_name, country, city, email, password, confirm_password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({first_name, last_name, country,city, email, password, confirm_password})

        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            setSuccess('')
        }

        if(response.ok){
            //TODO: use cookies
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            //update loading state
            setIsLoading(false)
            setError(false)
            if(setError){
                setSuccess('Registered succesfully')
            }
        }
    }

    return { register, isLoading, error, success}

}