import { useEffect, useState } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateButton((prevAnimateButton) => !prevAnimateButton);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav 
    className="fixed top-0 z-50 flex items-center justify-between w-full py-4 backdrop-filter backdrop-blur-lg bg-opacity-70" 
    >
      <img
        // src={logo}
        src="https://leadschool.in/wp-content/uploads/2021/06/logo.svg"
        alt="logo"
        className="w-[124px] h-[32px]"
      />
      <h1></h1>
      <ul className="items-center justify-end hidden space-x-4 md:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-0'
            } text-white hover:text-teal-200`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="hidden mr-20 space-x-4 md:flex">
        <button
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[14px] text-white bg-blue-gradient rounded-[10px] outline-none ${
            animateButton ? 'animate-pulse' : ''
          }`}
        >
          Get Started
        </button>
        <button className="px-4 py-2 text-sm text-white bg-gray-500 rounded-2xl hover:bg-gray-600">
          Login
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-end flex-1 mr-14 md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
          }}
        />

        {toggle && (
          <div className="mr-10 flex flex-col items-center p-6 bg-black-gradient absolute top-full right-0 mt-2 mx-4 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-start justify-end flex-1 mb-4 list-none">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;