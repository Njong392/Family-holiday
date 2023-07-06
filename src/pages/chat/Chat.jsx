const Chat = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-poppins">
        <div className="flex text-deepgray">
    <div className="flex flex-row h-full w-full overflow-x-hidden">
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        
        
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Active Conversations</span>
            
          </div>
          <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
            <button
              className="flex hover:bg-snow rounded-xl p-2"
            >
             
              <div className="ml-2 text-sm ">Henry Boyd</div>
            </button>
            <button
              className="flex flex-row items-center hover:bg-snow rounded-xl p-2"
            >
             
              <div className="ml-2 text-sm ">Marta Curtis</div>
              
            </button>
            <button
              className="flex flex-row items-center hover:bg-snow rounded-xl p-2"
            >
              
              <div className="ml-2 text-sm ">Philip Tucker</div>
            </button>
            <button
              className="flex flex-row items-center hover:bg-snow rounded-xl p-2"
            >
              
              <div className="ml-2 text-sm ">Christine Reid</div>
            </button>
            <button
              className="flex flex-row items-center hover:bg-snow rounded-xl p-2"
            >
              
              <div className="ml-2 text-sm ">Jerry Guzman</div>
            </button>
          </div>
         
          
        </div>
      </div>

      <div className="flex flex-col flex-auto p-6 border-l-2 border-deepgray">
        <div
          className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 overflow-x-auto"
        >

        <div className="w-full border py-3 px-7 rounded-lg bg-snow">
            <p>Henry Boyd</p>
        </div>
          <div className="flex flex-col h-full mb-4 ">
            <div className="flex flex-col h-full ">
              <div className="grid grid-cols-12 gap-y-2 ">
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    
                    <div
                      className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl mt-4"
                    >
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    
                    <div
                      className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel ipsa commodi illum saepe numquam maxime
                        asperiores voluptate sit, minima perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    
                    <div
                      className="relative mr-3 text-sm bg-blue text-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>I'm ok what about you?</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    
                    <div
                      className="relative mr-3 text-sm bg-blue text-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    
                    <div
                      className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>Lorem ipsum dolor sit amet !</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    
                    <div
                      className="relative mr-3 text-sm bg-blue text-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    
                    <div
                      className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, in.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-blue pl-4 h-10"
                />
                <button
                  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-lightgray hover:text-deepgray"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-blue rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Chat