import React, { useState } from 'react';
import disneylogo from './../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus } from 'react-icons/hi2';
import { HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCHLIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ];

  return (
    <div className="flex items-center gap-6 justify-between p-5">
      <div className="flex gap-6 items-center">
        <img src={disneylogo} className="w-[80px] md:w-[115px] object-cover" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-4">
          {menu.map((item, index) =>
            index < 3 ? (
              <HeaderItem key={item.name} name="" Icon={item.icon} />
            ) : null
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem key="menu-toggle" name="" Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map((item, index) =>
                  index > 2 ? (
                    <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0dGVufGVufDB8fDB8fHww"
        className="w-[40px] rounded-full"
        alt="Profile"
      />
    </div>
  );
}

export default Header;