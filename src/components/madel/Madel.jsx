import React from "react";
import { MADEL } from "../../static"; 

const Madel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1102px] mx-auto gap-10 mt-[73px]">
      {MADEL.map(item => (
        <div
          key={item.id}
          className="flex w-[354px] h-[239px] bg-[#F6F6F6] items-center rounded-3xl gap-6 mx-auto pl-[10px] pr-[10px] transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#eaeaea]"
        >
          <img src={item.image} alt={item.titel} className="w-[100px] h-[100px] object-contain" />
          <div>
            <h2 className="font-poppins font-bold text-[28px] leading-[100%] tracking-[0%] pb-[9px] text-[#333]">
              {item.titel}
            </h2>
            <p className="text-sm text-gray-600 leading-[130%]">{item.information}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Madel;