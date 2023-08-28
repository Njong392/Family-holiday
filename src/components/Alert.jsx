import React from 'react'

const Alert = ({deactivateUser, hasClickedNo, setHasClickedNo}) => {
  return (
    <div className={!hasClickedNo ? "hidden" : "block"}>
        <p className="bg-lightred text-deepgray  rounded-lg px-3 py-2 border-2 border-red">Are you sure you want to delete your profile?
        <button className="bg-red text-snow rounded-lg px-3 py-2 border-2 border-red mr-2" onClick={deactivateUser}>Yes</button>
        <button className="bg-blue text-snow rounded-lg px-3 py-2 border-2 border-blue" onClick={()=> setHasClickedNo(false)}>No</button>
        </p>
    </div>
  )
}

export default Alert