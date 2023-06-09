import { Link } from "react-router-dom";
import { useAccommodationContext } from "../hooks/useAccommodationContext";
import { useEffect } from "react";
import moment from 'moment'

export default function AccomodationList({acc}) {


  return (
    <>
      <h3 className="text-3xl font-bold text-blue mt-12">Accommodations</h3>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-4">
        <Link className="group" to="/">
          <img
            alt="Lava"
            src={acc.image.url}
            className="h-56 w-full rounded-xl object-cover shadow-xl"
          />

          <div className="mt-2">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-deepgray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-sm font-bold text-deepgray">{acc.city}, <span>{acc.country}</span></p>
            </div>

            <p className="line-clamp-3 text-sm/relaxed text-deepgray">
             {moment(acc.createdAt).format('MMMM D')} - {moment(acc.departureDate).format('MMMM D')}
            </p>

            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <p className="text-sm text-deepgray">{acc.pricePerNight}/night</p>
            </div>
          </div>
        </Link>

        
      </section>
    </>
  );
}
