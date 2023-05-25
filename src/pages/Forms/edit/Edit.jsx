import { CountryDropdown } from 'react-country-region-selector';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useState } from 'react';
import UserDetails from '../main/UserDetails';

const Edit = () => {
    const {state: {userDetails}} = useAuthContext();

    const[firstname, setFirstName] = useState('');

  return (
    <main aria-label="Main Section" className="font-poppins">
        
      <div className="mx-auto max-w-screen-xl py-16 rounded mt-5 lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="grid col-span-8 lg:border-2 lg:shadow-xl lg:border-blue rounded pb-7">
        
            <div className='w-full md:h-40 sm:h-36 h-24 bg-blue sm:p-8 p-4 relative'>
                <div className='flex justify-between items-center'>
                    <h1 className='md:text-3xl text-snow font-bold text-lg'>Edit Profile</h1>
                    <button className='bg-snow rounded text-blue font-bold md:p-2 p-1 text-sm md:text-lg'>Save</button>
                </div>

                <div className='absolute sm:-bottom-14 -bottom-10'>
                    {userDetails && (
                        <img src={userDetails.form[0].image.url} alt="" 
                        className='sm:w-24 sm:h-24 rounded-full object-cover opacity-100 ring-4 ring-white grayscale w-16 h-16'/>
                    )}

                    <div className='absolute sm:top-8 sm:left-8 top-6 left-6'>
                        <label htmlFor="image" className='cursor-pointer'>
                            <input
                            type="file"
                            id="image"
                            name="image"
                            className='hidden'
                            accept="image/*"
                            />

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='sm:w-8 sm:h-8 w-4 h-4 fill-snow'><path d="M2 6.00087C2 5.44811 2.45531 5 2.9918 5H21.0082C21.556 5 22 5.44463 22 6.00087V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5554 2 19.9991V6.00087ZM14 18C16.7614 18 19 15.7614 19 13C19 10.2386 16.7614 8 14 8C11.2386 8 9 10.2386 9 13C9 15.7614 11.2386 18 14 18ZM4 7V9H7V7H4ZM4 2H10V4H4V2Z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>
            

          <div className="max-w-xl lg:max-w-3xl py-5 px-5 mt-12">

          {/* <h3 className="text-3xl font-bold text-blue mt-4">Edit Your Profile Information</h3> */}

            <form action="#" className=" grid grid-cols-6 gap-6 mt-4">
                <div className="col-span-6 md:col-span-3">
                    <label htmlFor="first_name" className="block font-medium text-deepgray">
                    First Name
                    </label>

                    {userDetails && (
                        <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                        placeholder={userDetails.first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    )}
                </div>

                <div className="col-span-6 md:col-span-3">
                    <label htmlFor="last_name" className="block font-medium text-deepgray">
                    Last Name
                    </label>

                   {userDetails && (
                     <input
                     type="text"
                     id="last_name"
                     name="last_name"
                     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                     placeholder={userDetails.last_name}
                     />
                   )}
                </div>

                <div className="col-span-6 md:col-span-3">
                    <label htmlFor="adults" className="block font-medium text-deepgray">
                    Number of adults in the family (18+)
                    </label>

                    {userDetails && (
                        <input
                        type="number"
                        id="adults"
                        name="adults"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                        placeholder={userDetails.form[0].adults}
                        />
                    )}
                </div>

                <div className="col-span-6 md:col-span-3">
                    <label htmlFor="children" className="block font-medium text-deepgray">
                    Number of children (less than 18 years old)
                    </label>

                   {userDetails && (
                     <input
                     type="number"
                     id="children"
                     name="children"
                     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                        placeholder={userDetails.form[0].children}
                     />
                   )}
                </div>

                <div className="col-span-6 md:col-span-3">
                    <label htmlFor="Country" className="block font-medium text-deepgray">
                    Country
                    </label>

                    <CountryDropdown
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                            
                    />
                    
                </div>

                <div className="col-span-6 md:col-span-3">
                    <label htmlFor="city" className="block font-medium text-deepgray">
                    City
                    </label>

                   {userDetails && (
                     <input
                     type="text"
                     id="city"
                     name="city"
                     className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                     placeholder={userDetails.city}
                     />
                   )}
                </div>

                <div className="col-span-6 md:col-span-3">

                    <label htmlFor="Hobbies" className="block font-medium text-deepgray">
                    What hobbies does your family enjoy?
                    </label>
                    <p className="text-xs text-lightgray">After every one hobby you add, click on the plus button to add it</p>

                    <div className="flex items-center gap-2">
                    <input
                        type="text"
                        id="hobbies"
                        name="hobbies"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                    />

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" />
                        </svg>
                    </button>

                    </div>

                </div>

                <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                
                    {/* <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9">
                        
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                        </svg>
                        </button>
                    </div> */}

                
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
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                    />

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" />
                        </svg>
                    </button>

                    </div>

                </div>

                <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                    {/* {allergy.map((a, allergy_id) => (
                    <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9" key={a}>
                        <p>
                        {a}
                        {' '}
                        </p>
                        <button onClick={() => deleteAllergies(allergy_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                        </svg>
                        </button>
                    </div>

                    ))} */}
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
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                    />

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" />
                        </svg>
                    </button>

                    </div>

                </div>

                <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                    {/* {language.map((l, language_id) => (
                    <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9" key={l}>
                        <p>
                        {l}
                        {' '}
                        </p>
                        <button onClick={() => deleteLanguages(language_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                        </svg>
                        </button>
                    </div>

                    ))} */}
                </div>

                <div className="col-span-6 md:col-span-3">

                    <label htmlFor="pets" className="block font-medium text-deepgray">
                    What kind of pet(s) do you own?
                    <p className="text-xs text-lightgray">If you own no pets, feel free to submit "none"</p>
                    </label>

                    <div className="flex items-center gap-2">
                    <input
                        type="text"
                        id="pets"
                        name="pets"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                    />

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-blue">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" />
                        </svg>
                    </button>

                    </div>

                </div>

                <div className="col-span-6 lg:col-span-3 flex gap-2 flex-wrap border-b border-lightgray pb-1">
                    {/* {pet.map((p, pet_id) => (
                    <div className="bg-blue rounded p-2 text-white flex gap-1 items-center h-9" key={p}>
                        <p>
                        {p}
                        {' '}
                        </p>
                        <button onClick={() => deletePets(pet_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-snow">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                        </svg>
                        </button>
                    </div>

                    ))} */}
                </div>

                <div className="col-span-6">
                    <label htmlFor="cuisine-select" className="block font-medium text-deepgray">What kind of cuisine is common in your household?</label>

                    {userDetails && (
                        <select
                        name="cuisine"
                        id="cuisine-select"
                        className="mt-1 w-full rounded border-gray-200 bg-white text-deepgray shadow-sm"
                        
                        >
                        <option value="">{userDetails.form[0].cuisine}</option>
                        <option value="African">African</option>
                        <option value="American">American</option>
                        <option value="Italian">Italian</option>
                        <option value="French">French</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Thai">Thai</option>
                        <option value="Indian">Indian</option>
                        <option value="Other">Other</option>
                        </select>
                    )}
                </div>

                <div className="col-span-6">
                    <label htmlFor="about" className="block font-medium text-deepgray">
                    Write at least 100 words about your family.
                    </label>
                    <p className="text-lightgray text-xs">This is the most important part of your profile. What would make you a good host family? What are those things that bring your family together? Make this part count!</p>

                    {userDetails && (
                        <textarea
                        id="about"
                        name="about"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-deepgray shadow-sm"
                        placeholder={userDetails.form[0].bio}
                        />
                    )}

                </div>

                

                </form>
                {/* {error && <p className="text-red text-sm mt-4 font-bold">{error}</p>}
                {success && <p className="text-green text-sm mt-4 font-bold">{success}</p>} */}
            </div>

        </main>

      </div>
    </main>

  )
}

export default Edit