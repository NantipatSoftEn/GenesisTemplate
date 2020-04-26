import React from 'react';
import GroupMenu from '../Interface/Navbar/GroupMenu';
const Navbar = () => {
  return (
    <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">
      <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
        <div class="w-1/2 pl-2 md:pl-0">
          <a
            class="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"
            href="#">
            <i class="fas fa-sun text-orange-600 pr-3"></i> Admin Day Mode
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <GroupMenu />
      </div>
    </nav>
  );
};
export default Navbar;