import React from 'react'
import { useAccommodationContext } from '../../hooks/useAccommodationContext'
import { useChatContext } from '../../hooks/useChatContext'
import { NavLink, Link } from 'react-router-dom'

const Notification = () => {
    const { notifications, setNotifications } = useChatContext();
      const { reservationNotification, setReservationNotification } = useAccommodationContext();


      const getSender = (loggedUser, users) => {
    if(users[0]?._id === loggedUser?._id) {
      return `${users[1].first_name} ${users[1].last_name}`
    } else{
       return `${users[0].first_name} ${users[0].last_name}`
    };
  }
  return (
    <div className='flex justify-center items-center flex-col'>
        
         {(!notifications.length && !reservationNotification.length) && (
                 <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-deepgray">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
</svg>
                  <p>No new notifications</p>
                 
                 </div>

              )}
              {notifications.map(notification => (
                <Link 
                to={`/chats/${notification.chat._id}`} 
                key={notification._id} 
                onClick={() => {
                  setNotifications(notifications.filter((n) => n !== notification))
                }}
                className="flex flex-col items-center border-b-2 border-snow pb-2 mt-2
                "
                >
                  <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-deepgray">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
                    <p>New message from {getSender(user, notification.chat.users)}</p>
  
                  </div>
                </Link>
              ))}

              {reservationNotification.map(reservationNotif => (
                <div className="flex flex-col border-b-2 border-snow pb-2 mt-2">
                  <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-deepgray">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

                  <div>
                    <p >New reservation request for <span className="font-bold text-blue">{reservationNotif.id.title}</span></p>
                  <div className="flex gap-2">
                    <NavLink to={`/profile/?userId=${reservationNotif.guest}` } className="rounded-sm text-white bg-blue text-sm font-bold p-1">View guest</NavLink>
                    <button className="rounded-sm text-white bg-green text-sm font-bold p-1">Accept</button>
                    <button className="rounded-sm text-white bg-red text-sm font-bold p-1">Reject</button>
                    
                  </div>
                  </div>
                  </div>
                </div>
              ))}
    </div>
  )
}

export default Notification