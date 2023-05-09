import { useState } from "react"
import { useUpdateHost } from "./useUpdateHost"


export default function HostForm(){
    const[hobby, setHobby] = useState([])
    const[hobbyInput, setHobbyInput] = useState('')

    const[allergy, setAllergy] = useState([])
    const[allergyInput, setAllergyInput] = useState('')

    const[language, setLanguage] = useState([])
    const[languageInput, setLanguageInput] = useState('')

    const [numberOfPeople, setNumberOfPeople] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [bio, setBio] = useState('')
    const [image, setImage] = useState(null)
    const [imageBase64, setImageBase64] = useState('')
    const { updateHost,setError, error, isLoading, success } = useUpdateHost()


    //convert image file to base64
    const setFileToBase64= (file) => {
        const reader = new FileReader()
        if(file) {
            reader.readAsDataURL(file)
        }
        reader.onloadend = () => {
            setImageBase64(reader.result)
        }
    }

    //receive file from form
    const handleImage = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setFileToBase64(file)
    }


    // to handle adding/deleting hobbies
    function getHobbies(e){
        e.preventDefault()
        setHobby(hobby.concat(hobbyInput))
        setHobbyInput('')
        console.log(hobby)
        console.log(numberOfPeople)
    }

    function deleteHobbies(id){
        setHobby(oldHobby => {
            return oldHobby.filter((_, i) => i !== id)
        })
        
    }

    //to handle adding/removing allergies
    function getAllergies(e){
        e.preventDefault()
        setAllergy(allergy.concat(allergyInput))
        setAllergyInput('')
    }

    function deleteAllergies(id){
        setAllergy(oldAllergy => {
            return oldAllergy.filter((_, i) => i !== id)
        })
    }

    //to handle adding/removing languages
    function getLanguages(e){
        e.preventDefault()
        setLanguage(language.concat(languageInput))
        setLanguageInput('')
    }

    function deleteLanguages(id){
        setLanguage(oldLanguage => {
            return oldLanguage.filter((_, i) => i !== id)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if(hobby.length === 0){
        //     setError('There must be at least one hobby')
        // }else if(language.length === 0){
        //     setError('There must be at least one language set ')
        // } else if(allergy || cuisine || bio || image){
        //     setError('Oops. You left out a field')
        // }else{
            
        // }
        await updateHost({hobby,allergy, language,numberOfPeople, cuisine, bio,image: imageBase64  })

    }


    return(
        <main aria-label="Main Section" className="font-poppins">
            <div className="mx-auto max-w-screen-xl py-16 rounded mt-5 lg:grid lg:min-h-screen lg:grid-cols-12">
            <main className="grid col-span-8 lg:border-2 py-5 px-8 lg:shadow-xl lg:border-blue rounded">
            <div className="max-w-xl lg:max-w-3xl">
                    
                    
                        <h3 className="text-3xl font-bold text-blue mt-4">Thinking of becoming a host?</h3>
                        <p className="text-sm text-lightgray">Remember that the more detail and personality you fill in, the easier it will be to connect with guest families.</p>
                        <p className="text-sm text-blue mt-4">*Please fill in all fields correctly and carefully</p>

                        <form action="#" className=" grid grid-cols-6 gap-6 mt-4" onSubmit={handleSubmit}>


                            <div className="col-span-6">
                                <label htmlFor="Number_of_people" className="block font-medium text-deepgray">
                                Number of family members in the household
                                </label>

                                <input
                                type="number"
                                id="number_of_people"
                                name="number_of_people"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                                value={numberOfPeople}
                                onChange={e => setNumberOfPeople(e.target.value)}
                                />
                            </div>


                            <div className="col-span-6 md:col-span-3">
                                
                                    <label htmlFor="Hobbies" className="block font-medium text-deepgray">
                                    What hobbies does your family enjoy?
                                    </label>
                                    <p className="text-xs text-lightgray">After every one hobby you add, click on the plus button to add it. You can add a max of 4.</p>

                                    <div className="flex items-center gap-2">
                                        <input
                                        type="text"
                                        id="hobbies"
                                        name="hobbies"
                                        value={hobbyInput}
                                        onChange={e => setHobbyInput(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                                        />

                                        <button onClick={getHobbies}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
                                        </button>

                                        
                                    </div>
                                
                            </div>

                            <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                                {hobby.map((h, id) => (
                                    <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9" key={h}>
                                        <p >{h} </p>
                                        <button onClick={() => deleteHobbies(id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                                        </button>
                                    </div>
                                    
                                ))}
                            </div>

                            <div className="col-span-6 md:col-span-3">
                                
                                    <label htmlFor="Allergies" className="block font-medium text-deepgray">
                                    What allergy(ies) could your family members have?
                                    </label>
                                    <p className="text-xs text-lightgray">This is to inform guests beforehand of substances that could cause any health complications</p>

                                    <div className="flex items-center gap-2">
                                        <input
                                        type="text"
                                        id="allergies"
                                        name="allergies"
                                        value={allergyInput}
                                        onChange={e => setAllergyInput(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                                        />

                                        <button onClick={getAllergies}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
                                        </button>

                                        
                                    </div>
                                
                            </div>

                            <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                                {allergy.map((a, allergy_id) => (
                                    <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9" key={a}>
                                        <p >{a} </p>
                                        <button onClick={() => deleteAllergies(allergy_id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                                        </button>
                                    </div>
                                    
                                ))}
                            </div>

                            <div className="col-span-6 md:col-span-3">
                                
                                    <label htmlFor="Languages" className="block font-medium text-deepgray">
                                    What language(s) is/are spoken in your household?
                                    </label>
                                    
                                    <div className="flex items-center gap-2">
                                        <input
                                        type="text"
                                        id="languages"
                                        name="languages"
                                        value={languageInput}
                                        onChange={e => setLanguageInput(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                                        />

                                        <button onClick={getLanguages}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
                                        </button>

                                        
                                    </div>
                                
                            </div>

                            <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                                {language.map((l, language_id) => (
                                    <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9" key={l}>
                                        <p >{l} </p>
                                        <button onClick={() => deleteLanguages(language_id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                                        </button>
                                    </div>
                                    
                                ))}
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="cuisine-select" className="block font-medium text-deepgray">What kind of cuisine is common in your household?</label>

                                <select name="cuisine" id="cuisine-select" className="mt-1 w-full rounded border-gray-200 bg-white text-deepgray shadow-sm" 
                                value={cuisine}
                                onChange={e => setCuisine(e.target.value)}
                                >
                                    <option value="">--Please choose an option--</option>
                                    <option value="african cuisine">African</option>
                                    <option value="american cuisine">American</option>
                                    <option value="italian">Italian</option>
                                    <option value="french">French</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Thai">Thai</option>
                                    <option value="Indian">Indian</option>
                                </select>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="about" className="block font-medium text-deepgray">
                               Write at least 100 words about your family.
                                </label>
                                <p className="text-lightgray text-xs">This is the most important part of your profile. What would make you a good host family? What are those things that bring your family together? Make this part count!</p>

                                <textarea
                                id="about"
                                name="about"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                                value={bio}
                                onChange={e => setBio(e.target.value)}
                                />
                                
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="profile_image" className="block font-medium text-deepgray">
                                Upload your favourite family photo. We'll use this as your profile picture
                                </label>

                                <input
                                type="file"
                                id="image"
                                name="image"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                                accept="image/*"
                                onChange={handleImage}
                                />
                            </div>

                            
                            {/* <div className="col-span-6">
                                <label htmlFor="more_info" className="block font-medium text-deepgray">What other information would you like to provide to the guest?</label>

                                <ul className="text-deepgray">
                                    <li>
                                        <input type="checkbox" id="option1" name="option1" value="smoking"/>
                                        <label htmlFor="smoking"> No smoking</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="option2" name="option2" value="cleaning" />
                                        <label htmlFor="cleaning"> Host must clean up after themselves</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="option3" name="option3" value="meals" />
                                        <label htmlFor="meals"> Additional cost will be incurred for home cooked meals</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="option4" name="option4" value="tour" />
                                        <label htmlFor="tour"> Additional cost will be incurred for city tours</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="option5" name="option5" value="pets" />
                                        <label htmlFor="pets"> No pets</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="option6" name="option6" value="pets" />
                                        <label htmlFor="pets"> Additional costs will be incurred for pets</label>
                                    </li>
                                </ul>
                            </div> */}

                            <div className="col-span-6">
                                <p className="text-sm text-lightgray">
                                *This information will be made public for potential guests to view. However, after receving a guest, you can make your profile page 'unavailaible' for further reservations.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                className="inline-block shrink-0 rounded-md bg-blue px-12 py-3 text-sm font-medium text-snow transition hover:bg-transparent hover:text-blue border-2 hover:border-blue focus:outline-none focus:ring active:text-blue-500
                                active:text-blue-500 disabled:opacity-50"
                                disabled={isLoading}
                                >
                                Submit
                                </button>
                            </div>

                            
                        </form>
                        {error && <p className='text-red text-sm mt-4 font-bold'>{error}</p>}
                        {success && <p className='text-green text-sm mt-4 font-bold'>{success}</p>}
                    </div>
                    
                </main>

            </div>
        </main>

        
    )
}