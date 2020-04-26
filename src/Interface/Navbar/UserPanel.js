import React from 'react';
const UserPanel = () => {
  return (
    <div class="w-1/2 pr-0">
      <div class="flex relative inline-block float-right">
        <div class="relative text-sm">
          <button
            id="userButton"
            class="flex items-center focus:outline-none mr-3">
            <img
              class="w-8 h-8 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              alt="Avatar of User"
            />{' '}
            <span class="hidden md:inline-block">Hi, User </span>
            <svg
              class="pl-2 h-2"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              enable-background="new 0 0 129 129">
              <g>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
              </g>
            </svg>
          </button>
          <div
            id="userMenu"
            class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
            <ul class="list-reset">
              <li>
                <a
                  href="#"
                  class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
                  My account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
                  Notifications
                </a>
              </li>
              <li>
                <hr class="border-t mx-2 border-gray-400" />
              </li>
              <li>
                <a
                  href="#"
                  class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
                  Logout
                </a>
              </li>
            </ul>
          </div>
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
      </div>
    </div>
  );
};
export default UserPanel;