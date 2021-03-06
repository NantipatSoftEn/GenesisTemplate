import React from 'react';
import GroupMenu from '../Interface/Navbar/GroupMenu';
import UserPanel from '../Interface/Navbar/UserPanel'
import Search from '../Interface/Search'
const Navbar = () => {
  return (
    <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
        <div className="w-1/2 pl-2 md:pl-0">
          <a className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"
            href="#">
            <i className="fas fa-sun text-orange-600 pr-3"></i> Admin Day Mode
          </a>
        </div>
        <UserPanel />
        <GroupMenu />
        <Search />
      </div>
    </nav>
  );
};
export default Navbar;
