import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import moment from 'moment'

const Payment = () => {
    const [searchParams] = useSearchParams()
  const [arrivalDate, setArrivalDate] = useState(null)
  const [departureDate, setDepartureDate] = useState(null)
  const [title, setTitle] = useState(null)
  const [price, setPrice] = useState(null)
  const [id, setId] = useState(null)
  const [guestNum, setGuestNum] = useState(null)
  const [accommodationImage, setImage] = useState(null)

  useEffect(() => {
    const date = searchParams.get("arrivalDate")
    setArrivalDate(date)
    const date2 = searchParams.get("departureDate")
    setDepartureDate(date2)
    const title = searchParams.get("title")
    setTitle(title)
    const price = searchParams.get("finalPrice")
    setPrice(price)
    const id = searchParams.get("id")
    setId(id)
    const guestNum = searchParams.get("guestCount")
    setGuestNum(guestNum)
    const accommodationImage = searchParams.get("image")
    setImage(accommodationImage)

    //console.log(date)
  }, [searchParams])

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-poppins'>
        <div className="mx-auto max-w-lg shadow-lg">
        <div href="#" class="group relative block overflow-hidden">


  <Link to={`/accommodations/${id}`}>
  <img
    src={accommodationImage}
    alt=""
    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />
  </Link>

  <div class="relative bg-white p-6">
    <span
      class="whitespace-nowrap bg-blue px-3 py-1.5 text-xs font-medium text-white"
    >
      Reservations details
    </span>

    <h3 class="mt-4 text-lg font-medium text-deepgray">{title}</h3>

    <p class="mt-1.5 text-sm text-deepgray">{guestNum} guest(s)</p>

    <p class="mt-1.5 text-sm text-deepgray">Booked for {moment(arrivalDate).format("MMMM D")} - {moment(departureDate).format("MMMM D")}</p>

    <p class="mt-1.5 text-sm text-deepgray">Total cost(USD): ${price}</p>

    <Link class="mt-1.5 text-sm text-blue underline" to={`/accommodations/${id}`}>Go back and edit this reservation</Link>

    <form class="mt-4">
      <button
        class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </form>
  </div>
</div>
    </div>
    </div>
  )
}

export default Payment