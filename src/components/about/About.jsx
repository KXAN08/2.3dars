import { About } from "../../static";

const AboutSection = () => {
  return (
  <div className="mt-[135px]">
        <div className="text-center">
             <p className="text-blue-600 text-sm">Here are some of the best clients.</p>
             <h2 className="text-3xl font-bold my-4">What People Say About Us</h2>
             
        </div> 
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto gap-10 mt-[73px]">
   
      {About.map(item => (
        <div
          key={item.id}
          className="flex w-full h-[239px] bg-[#F6F6F6] items-center rounded-3xl gap-6 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            src={item.image}
            alt={item.titel}
            className="w-[160px] h-[170px] object-contain"
          />
          <div>
            <h2 className="font-poppins font-bold text-[24px] leading-[100%] tracking-[0%] pb-[9px] text-[#333]">
              {item.titel}
            </h2>
            <p className="text-sm text-gray-600 leading-[130%] mb-2">{item.information}</p>
            <img src={item.iconImage} alt="icon" className="w-24 h-5" />
          </div>
        </div>
      ))}
      
    </div>
  </div>
  );
};

export default AboutSection;
