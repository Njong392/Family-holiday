export default function Accommodation() {
    return(
        <main aria-label="Main Section" className="font-poppins">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded lg:bg-snow mt-5 lg:shadow-md">
                <h3 className="text-3xl font-bold text-blue mt-12">Apartment complex with pool</h3>
                <p className="text-sm text-deepgray font-bold">Douala, Cameroon</p>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-8 mt-4">
                    <div>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="h-[100%] w-full rounded-xl object-cover shadow-xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-[100%] w-full rounded-xl object-cover shadow-xl"
                        />

                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-[100%] w-full rounded-xl object-cover shadow-xl"
                        />

                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-[100%] w-full rounded-xl object-cover shadow-xl"
                        />

                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-[100%] w-full rounded-xl object-cover shadow-xl"
                        />
                    </div>

                </div>

                <h2 className="mt-16 text-blue text-2xl font-bold">About the house</h2>
                <div className="grid grid-cols-1 grid-cols-2 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997Z"></path></svg>
                            <p>2 Bedrooms</p>
                        </div>

                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path d="M15 18H9V21H7V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17V21H15V18ZM11 20H13V23H11V20Z"></path></svg>
                            <p>2 Bathrooms</p>
                        </div>

                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path></svg>
                            <p>2 Beds</p>
                        </div>

                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997Z"></path></svg>
                            <p>2 Beds</p>
                        </div>

                        <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997Z"></path></svg>
                            <p>2 Bedrooms</p>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}