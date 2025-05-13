import React from "react";
import { menu } from "../../static"; 

const Menu = () => {
  return (
   <menu className="mt-[170px]">
    <div className="text-center">
      <p className="text-[#3858D6] font-poppins font-medium text-[16px] leading-[125%] tracking-[0%]"> Find your favourite smart watch.</p>
      <h2 className="font-poppins font-bold text-[36px] leading-[125%] tracking-[0%] text-[#1E1D1D] mt-2">Our Latest Products</h2>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-between p-6 max-w-[1100px] mx-auto">
      {menu.map(item => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 duration-300  w-[334px] h-[437px] mx-auto  "
        >
         <div className="bg-[#F6F6F6] w-[334px] h-[337px] mx-auto pt-[30px]">
              <img src={item.mainImage} alt={item.titel} className="w-[250px] h-[280px] object-cover mx-auto " />
         </div>
          <div className="text-center pt-3">
            <h3 className="font-poppins font-semibold text-xl mb-2">{item.titel}</h3>
              <img src={item.iconImage} alt="icon" className="w-18 h-4 mx-auto" />
            <div className="flex w-[152px] mx-auto items-center">
                <span className="font-medium text-lg text-gray-800   ">{item.price} </span>
               <img  className="w-26 h-4 mx-auto" src="/img/pulno.png" alt="pul" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="w-[184px] h-[37px] mx-auto">
        <button className=" mx-auto rounded-[15px] w-[184px] h-[37px] bg-[#3858D6] text-white hover:bg-[#fff] hover:text-[#3858D6] border-2 border-[#3858D6]" >
      View More
    </button>
    </div>
  
   </menu>
  );
};

export default Menu;
