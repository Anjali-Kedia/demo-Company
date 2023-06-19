import React from 'react'
import {RiSearchLine} from 'react-icons/ri';


const Search = () => {
  return (
    <div className='bg-[#1D1F25]'>
        <p className='font-one font-semibold text-white p-10 text-4xl'>We tackle interesting topics every day</p>
        <div className='flex flex-wrap  '>
        <form class="flex items-center ml-8 pb-8 mr-auto">   
    <div class="relative w-full ">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            
            <RiSearchLine className='text-[#757B8C] pl-0.5'/>
        </div>
        <input type="text" className="bg-[#282C38] text-[#757B8C] text-sm rounded-md  block w-96 pl-10 p-2.5
         " placeholder="Find Courses" required/>
    </div>
    </form>
    <svg  width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="43" height="43" rx="5" fill="#282C38"/>
<path d="M29.9 23.5H14.1C12.6 23.5 12 24.14 12 25.73V29.77C12 31.36 12.6 32 14.1 32H29.9C31.4 32 32 31.36 32 29.77V25.73C32 24.14 31.4 23.5 29.9 23.5Z" fill="#757B8C"/>
<path d="M22.9 12H14.1C12.6 12 12 12.64 12 14.23V18.27C12 19.86 12.6 20.5 14.1 20.5H22.9C24.4 20.5 25 19.86 25 18.27V14.23C25 12.64 24.4 12 22.9 12Z" fill="#757B8C"/>
</svg>
<svg className='ml-5 mr-8' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="43" height="43" rx="5" fill="#FFBB29"/>
<path d="M32 18.52V13.98C32 12.57 31.36 12 29.77 12H25.73C24.14 12 23.5 12.57 23.5 13.98V18.51C23.5 19.93 24.14 20.49 25.73 20.49H29.77C31.36 20.5 32 19.93 32 18.52Z" fill="#141518"/>
<path d="M32 29.77V25.73C32 24.14 31.36 23.5 29.77 23.5H25.73C24.14 23.5 23.5 24.14 23.5 25.73V29.77C23.5 31.36 24.14 32 25.73 32H29.77C31.36 32 32 31.36 32 29.77Z" fill="#141518"/>
<path d="M20.5 18.52V13.98C20.5 12.57 19.86 12 18.27 12H14.23C12.64 12 12 12.57 12 13.98V18.51C12 19.93 12.64 20.49 14.23 20.49H18.27C19.86 20.5 20.5 19.93 20.5 18.52Z" fill="#141518"/>
<path d="M20.5 29.77V25.73C20.5 24.14 19.86 23.5 18.27 23.5H14.23C12.64 23.5 12 24.14 12 25.73V29.77C12 31.36 12.64 32 14.23 32H18.27C19.86 32 20.5 31.36 20.5 29.77Z" fill="#141518"/>
</svg>


    </div>
    </div>
  )
}

export default Search
