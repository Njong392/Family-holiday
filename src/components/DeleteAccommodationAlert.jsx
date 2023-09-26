import React from 'react'

const DeleteAccommodationAlert = (hasClicked, setHasClicked, deleteAccommodation) => {
  return (
    <div className="hidden">
        <p className="bg-lightred text-deepgray  rounded-lg px-3 py-2 border-2 border-red">Are you sure you want to delete this accommodation?
        <button className="bg-red text-snow rounded-lg px-3 py-2 border-2 border-red mr-2" onClick={deleteAccommodation}>Yes</button>
        <button className="bg-blue text-snow rounded-lg px-3 py-2 border-2 border-blue" onClick={()=> setHasClicked(false)}>No</button>
        </p>
    </div>
  )
}

export default DeleteAccommodationAlert