import React, { FC } from "react";

const Details: FC = () => {
  return (
        <div id="profile" className="w-full lg:w-3/5 shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-cyan-500 opacity-25" />
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"> What you do, Age</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"> Your Location - 25.0000° N, 71.0000° W</p>
            <p className="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

            <div className="pt-12 pb-8">
              <button className="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4">
                Message
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            </div>

          </div>
        </div>
  )
}

export default Details;