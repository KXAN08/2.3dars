import React from 'react'


const Main = () => {
   
  return (
    <main className='mt-[180px]'>
    <section
      className="bg-gray-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1100px] h-[377px] mx-auto p-[50px]"  >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800">
          Subscribe To Newsletter
        </h2>
        <p className="text-gray-500 mt-2">
          Get free guide about smart watches daily.
        </p>
        <div className="mt-6 flex items-center bg-white rounded-full shadow-md w-full max-w-md mx-auto md:mx-0 overflow-hidden">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium transition">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/img/app.png"
          alt="Smart Watch"
          className="w-52 md:w-64"
        />
      </div>
    </section>
    </main>
  )
}

export default Main;
