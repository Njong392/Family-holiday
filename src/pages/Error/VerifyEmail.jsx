import { useUserContext } from "../../hooks/useUserContext"
import { useState, useEffect} from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import Verification from "../../components/Verification"

const VerifyEmail = () => {
    const { state:{user, verifiedUser},  dispatch} = useUserContext()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const emailToken = searchParams.get('emailToken')
    

    // const updateUser = useCallback((response) => {
    //     localStorage.setItem('user', JSON.stringify(response))
    // }, [])

    const isUserVerified = async () => {
            if(user?.isVerified) {
                setTimeout(() => {
                    return navigate('/details')
                }, 3000)
            } else {
                if(emailToken) {
                    //post request
                    setIsLoading(true)
                    
                    const response = await fetch('http://localhost:4000/api/user/verify-email', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({emailToken})
                    })

                    setIsLoading(false)
                    //console.log('res', response)

                    const json = await response.json()

                    if(response.error){
                        return setError(response)
                       
                    }

                    if(response.ok){
                    //update auth context
                        dispatch({type: 'VERIFY_USER', payload: json})
                        setIsLoading(false)

                        // update user state
                        const newUser = {
                            ...user
                            //isVerified: true
                        }
                        dispatch({ type: 'UPDATE_VERIFIED_USER', payload: newUser })
                    }
                } 
            }
        
    }

    useEffect(() => {
        
        if(emailToken && user){
            isUserVerified()
            console.log("verifiedUser",verifiedUser)
        }
        
    }, [emailToken])

  return (
    <div>
        {isLoading ? (
            <div>
                <Verification text={"Loading..."} />
            </div> 
        ) : (
            <div>
                {user?.isVerified ? (
                <div>
                    <Verification text={"Redirecting..."}/>
                </div>
            ) : (
                
                    <div>
                        <Verification text={"Please check your mail(probably the spam folder) for a verification link. "} />
                    </div>          
            )}
            </div>
        )}
        
    </div>
  )
}

export default VerifyEmail