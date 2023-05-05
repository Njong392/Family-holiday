import { Link } from 'react-router-dom'

export default function DiscoverPage(){
    return(
        <main aria-label="Main Section" className="font-poppins">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded lg:bg-snow mt-5 lg:shadow-md">

                <section className="lg:flex justify-between items-center block">
                    <div>
                        <h1 className='text-4xl text-deepgray font-extrabold'>Looking for a guest family?</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, doloribus?</p>
                    </div>

                    <button className='flex gap-2 items-center rounded bg-blue text-snow px-3 py-2 mt-3 lg:mt-0'>
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-snow" role='filter'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                            Filters
                    </button>
                </section>

                <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <Link className="group" to='/details'>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition"
                        />

                        <div className="p-4">
                            
                            <h3 className="text-2xl font-bold text-blue">
                                Michael Michaelson
                            </h3>
                            <div className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className="text-sm font-bold text-blue">New York, USA</p>

                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </Link>

                    <Link className="group" to='/'>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition"
                        />

                        <div className="p-4">
                            
                            <h3 className="text-2xl font-bold text-blue">
                                Michael Michaelson
                            </h3>
                            <div className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className="text-sm font-bold text-blue">New York, USA</p>

                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </Link>

                    <Link className="group" to='/details'>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition"
                        />

                        <div className="p-4">
                            
                            <h3 className="text-2xl font-bold text-blue">
                                Michael Michaelson
                            </h3>
                            <div className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className="text-sm font-bold text-blue">New York, USA</p>

                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </Link>

                    <Link className="group" to='/'>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition"
                        />

                        <div className="p-4">
                            
                            <h3 className="text-2xl font-bold text-blue">
                                Michael Michaelson
                            </h3>
                            <div className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className="text-sm font-bold text-blue">New York, USA</p>

                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </Link>

                    <Link className="group" to='/'>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition"
                        />

                        <div className="p-4">
                            
                            <h3 className="text-2xl font-bold text-blue">
                                Michael Michaelson
                            </h3>
                            <div className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className="text-sm font-bold text-blue">New York, USA</p>

                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </Link>

                    <Link className="group" to='/'>
                        <img
                            alt="Lava"
                            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition"
                        />

                        <div className="p-4">
                            
                            <h3 className="text-2xl font-bold text-blue">
                                Michael Michaelson
                            </h3>
                            <div className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className="text-sm font-bold text-blue">New York, USA</p>

                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </Link>

                </section>

                <div className='text-center'>
                    <button
                    className="px-12 py-3 mt-8 text-sm font-medium text-blue border border-indigo-600 rounded-full hover:bg-blue hover:text-white focus:outline-none focus:ring active:bg-blue"
                    >
                    See more families
                    </button>
                </div>
                    

            </div>

        </main>
    )
}