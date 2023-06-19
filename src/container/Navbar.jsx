import React from 'react'

import demo from '../images/DemoCompany.png'
import {RiSettings3Fill} from 'react-icons/ri';
import {LuBellDot} from 'react-icons/lu'

const Navbar = () => {
  return (
    
<nav className="bg-[#1D1F25] border-b border-[#FFFFFF] border-opacity-10 dark:bg-[#1D1F25]">
  
  <div className="max-w-screen-xl flex flex-wrap items-center  ">
  <a href="https://anjali-kedia.github.io/WebPortfolio/" className="flex items-center">
      <img src={demo} className="h-8 m-8 " alt="Demo Company" />
      
  </a>
  <ul className="flex flex-col ml-8 text-sm font-one p-4 md:p-0 mt-4 border text-[#FFFFFF]  border-gray-100   md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:text-[#FFBB29] text-opacity-50 md:p-0 " >Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:text-[#FFBB29] text-opacity-50 md:p-0  ">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:text-[#FFBB29] text-opacity-50 md:p-0 ">Work</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:text-[#FFBB29] text-opacity-50 md:p-0 ">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-[#FFBB29]  hover:text-[#FFBB29]  md:p-0 "aria-current="page">Blog</a>
      </li>
    </ul>

  <div className='flex items-center ml-auto gap-12'>
  <RiSettings3Fill className='text-white text-opacity-50'/>
  <LuBellDot className='text-white text-opacity-50'/>
  <button type="button" className="flex mr-8 text-sm bg-gray-800 rounded-full md:mr-8 focus:ring-4 focus:ring-gray-300
   dark:focus:ring-gray-600" id="user-menu-button"  >
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
  </button>
  
  </div>
    </div>
   



  


  {/* <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="#" alt="user photo"/>
      </button> */}
  
      {/* <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div> */}
      {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> */}
  {/* </div> */}
  

</nav>

  )
}

export default Navbar