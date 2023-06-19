import React from 'react'
import {images,content} from '../constants';


const ContentItem = ({id,img,category,topic,desc,time}) => {
  return (
    <div>
    <div className="flex  justify-evenly flex-wrap pb-10">
    
                <div key={id} className='max-w-sm bg-[#1D1F25] rounded-lg w-80 shadow'>
                
              
                <img class="rounded-t-lg w-80 h-52" src={img} alt={topic} />
                <span className='flex justify-between items-center gap-4'>
                  <h1 className=' font-normal text-[#FFBB29] font-one uppercase tracking-widest text-sm pt-5 pl-4 pb-3'>
                    {category}
                  </h1>
                <span className='flex items-center text-[#ccc] gap-1 pt-5 pr-4 pb-3 font-light opacity-60'>
                  {time}
                </span>
                </span>
                <div class="px-4 pb-3">
                    <a href="#">
                        <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{topic}</h5>
                    </a>
                    <p class="mb-6 font-normal text-[#B5B5BE] text-sm ">{desc}</p>
                    <a href="#" class="inline-flex items-center px-2 pb-2 text-sm font-medium text-center text-[#FFBB29] ">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-3 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </div>

                </div>

    
    </div>
    </div>

  )
}

export default ContentItem
