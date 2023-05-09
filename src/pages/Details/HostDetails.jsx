

export default function HostDetails(){
    return(
        <main aria-label="Main Section" className="font-poppins">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded mt-5">
            <h3 className="text-3xl font-bold text-blue mt-12">Host Profile</h3>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-4">
                    <div>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-[100%] w-full rounded-xl object-cover shadow-xl"
                        />

                    </div>

                    <div>
                        <div  className="flex gap-2 justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-deepgray">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-deepgray">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>

                        </div>

                        <h3 className="text-xl font-bold text-blue mt-4">
                                Michael Michaelson
                        </h3>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p className="text-sm font-bold text-blue">New York, USA</p>

                        </div>

                        <div className="mt-1 text-deepgray">
                            <p className="text-sm"><span className="font-bold">Number of family members:</span> 3, 4-32 years old</p>
                            <p className="text-sm"><span className="font-bold">Laguage(s) spoken:</span> English and French</p>
                        </div>

                        <div className="mt-4">
                        <h3 className="text-xl font-bold text-blue">About Us</h3>
                        <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error voluptatum corporis ex corrupti numquam architecto vitae omnis, ratione fuga earum necessitatibus quam repellendus placeat rerum cum. Commodi molestias ex dicta officia praesentium dolore eveniet provident, laudantium mollitia, iure possimus. Cum, nihil! Earum, odit? Aliquam ipsa sint consectetur quas dolor?</p>
                    </div>
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-blue mt-12">Our Gallery</h3>
                <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-4">
                    
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&w=1000&q=80" alt="" 
                        className="w-full rounded-tl-xl rounded-bl-xl object-cover shadow-xl h-[100%]"/>
                    

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-4">
                        <img src="https://plus.unsplash.com/premium_photo-1670560071294-d42d6ee5c531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3V0ZG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" 
                        className="h-56 w-full object-cover shadow-xl"/>

                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&w=1000&q=80" alt="" 
                        className="h-56 w-full object-cover rounded-tr-xl shadow-xl"/>

                        <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" 
                        className="h-56 w-full object-cover shadow-xl"/>

                        <img src="https://plus.unsplash.com/premium_photo-1670560071294-d42d6ee5c531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3V0ZG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" 
                        className="h-56 w-full object-cover rounded-br-xl shadow-xl"/>
                            
                    </div>

                </section>

                {/* <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-12 text-deepgray">

                    <div className="border-2 p-4 rounded-xl border-blue shadow-xl">
                        <h3 className="text-2xl font-bold">$50 <span className="text-sm ">night</span></h3>

                        <div className="mt-1">
                            <p className="text-sm font-bold">Guests</p>
                            <p className="border-b border-lightgray">1 guest</p>

                            <div className="flex justify-between mt-4">
                                <div>
                                <p className="font-bold">Adults</p>
                                <p>13+ years old</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                    <p>0</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                            </div>

                            <div className="flex justify-between mt-2">
                               <div>
                               <p className="font-bold">Children</p>
                               <p>2-12 years old</p>
                               </div>

                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                    <p>0</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                            </div>

                            <div className="flex justify-between mt-2">
                                <div>
                                    <p className="font-bold">Infants</p>
                                    <p>0-2 years old</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                    <p>0</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-lightgray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <button className="bg-blue text-snow rounded-xl px-4 py-4 w-full mt-4 text-lg font-semibold">Reserve</button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-8">
                        <div className="bg-snow p-4 rounded-xl shadow-xl">        
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-deepgray h-6 w-6"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path></svg>
                                 <p className="text-center text-sm font-extrabold text-deepgray">Duration of stay</p>
                            </div>
                            <p className=" mt-2">04/2023 - 07/2023</p>
                         </div>
 
                        <div className="bg-snow p-4 rounded-xl shadow-xl">    
                          <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-deepgray h-6 w-6"><path fill="none" d="M0 0h24v24H0z" ></path><path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM7.5 13.0001C7.5 15.4854 9.51472 17.5001 12 17.5001C14.4853 17.5001 16.5 15.4854 16.5 13.0001H14.5C14.5 14.3808 13.3807 15.5001 12 15.5001C10.6193 15.5001 9.5 14.3808 9.5 13.0001H7.5Z"></path></svg>
                                <p className="text-center text-sm font-extrabold text-deepgray">Cuisine</p>
                           </div>
                           <p className="mt-2">We serve american cuisine</p>
                        </div>

                        <div className="bg-snow p-4 rounded-xl shadow-xl">
                           <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-deepgray h-6 w-6"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z M5.5 13C6.88071 13 8 11.8807 8 10.5C8 9.11929 6.88071 8 5.5 8C4.11929 8 3 9.11929 3 10.5C3 11.8807 4.11929 13 5.5 13Z M21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5Z M12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11Z M5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999Z M22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056C18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
                                <p className="text-center text-sm font-extrabold text-deepgray">Num. of guests</p>
                           </div>
                           <p className="mt-2">Looking for a maximum of 3 guests</p>
                        </div>

                        <div className="bg-snow p-4 rounded-xl shadow-xl">
                           <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-deepgray h-6 w-6"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z"></path></svg>
                                <p className="text-center text-sm font-extrabold text-deepgray">Hobbies</p>
                           </div>
                           <p className="mt-2">Cycling, hiking, surfing.</p>
                        </div>

                        <div className="bg-snow p-4 rounded-xl shadow-xl">
                           <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-deepgray h-6 w-6"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM13 9H11V12H8V14H10.999L11 17H13L12.999 14H16V12H13V9ZM15 3H9V5H15V3Z"></path></svg>
                                <p className="text-center text-sm font-extrabold text-deepgray">Allergies</p>
                           </div>
                           <p className="mt-2">Nuts and honey</p>
                        </div>

                        <div className="bg-snow p-4 rounded-xl shadow-xl">
                           <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-deepgray h-6 w-6"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path></svg>
                                <p className="text-center text-sm font-extrabold text-deepgray">Additional info</p>
                           </div>
                           <p className="mt-2">- No smoking</p>
                           <p className="mt-2">- Fees don't include cleaning</p>
                        </div>



                        

                    </div>
                </section> */}

            </div>

        </main>
    )
}