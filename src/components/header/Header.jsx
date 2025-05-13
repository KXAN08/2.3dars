import React, { useState } from "react";
import { logo, links, SERVER } from "../../static";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ background: "linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)" }}>
      <div className="max-w-[1100px] mx-auto flex justify-between items-center h-[70px] px-4">
        <div className="logo">
          {logo.map(item => (
            <img key={item.id} src={item.image} alt="Logo" className="w-[100px]" />
          ))}
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map((link, index) => (
              <li key={index} className="text-[#8B8E99] hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex gap-6">
          {SERVER.map(item => (
            <img key={item.id} src={item.image} alt={`Icon ${item.id}`} className="w-6 h-6" />
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-[#8B8E99]">
            {links.map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer">{link}</li>
            ))}
          </ul>
          <div className="flex gap-6 mt-4">
            {SERVER.map(item => (
              <img key={item.id} src={item.image} alt={`Icon ${item.id}`} className="w-6 h-6" />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
