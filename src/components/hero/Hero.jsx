import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)'
      }}
      className="py-10 px-4"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left md:mr-[50px]">
          <h1 className="text-[#FFFFFF] font-poppins font-bold text-[40px] md:text-[64px] leading-[125%] tracking-[0%]">
            Discover <br className="hidden md:block" /> Most Suitable <br className="hidden md:block" /> Watches
          </h1>
          <p className="text-[#8B8E99] font-poppins font-medium text-[14px] md:text-[16px] leading-[125%] tracking-[0%] mt-4">
            Find the best, reliable, and cheap smart watches here. <br className="hidden md:block" />
            We focus on product quality. Here you can find smart <br className="hidden md:block" />
            watches of almost all brands. So why you are waiting? <br className="hidden md:block" />
            Just order now!
          </p>
          <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-full max-w-md mt-6 mx-auto md:mx-0">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1116.65 2a7 7 0 010 14z"
              />
            </svg>
            <input
              type="text"
              placeholder="Find the best brands"
              className="ml-2 flex-grow outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
        <div className="max-w-[400px] md:max-w-[661px]">
          <img
            className="w-full h-auto object-contain"
            src="/img/hero.png" 
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
