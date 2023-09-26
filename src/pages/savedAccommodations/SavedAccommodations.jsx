import {useState, useEffect} from 'react'
import { useUserContext } from '../../hooks/useUserContext'

const SavedAccommodations = () => {
    const {state: {user}} = useUserContext()
    const [savedAccommodations, setSavedAccommodations] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchSavedAccommodations = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/savedAccommodation/", {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },  
            })

            const json = await response.json()

            if(response.ok){
                setSavedAccommodations(json)
                console.log(json)
                setIsLoading(false)
                
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchSavedAccommodations()
        setIsLoading(false)
    }, [])


  return (
<main aria-label="Main Section" className="font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded lg:bg-snow mt-5 lg:shadow-md ">
        <section>
            {savedAccommodations && savedAccommodations.accommodation.map(acc => (
                    <p className='text-blue'>{acc}</p>
            ))}
        </section>
        {/* <section>
          {savedAccommodations && (
            <p>{savedAccommodations._id}</p>
          )}
        </section> */}
      </div>
    </main>
  )
}

export default SavedAccommodations