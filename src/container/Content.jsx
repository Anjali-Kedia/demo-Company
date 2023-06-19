import React, {useState} from 'react'
import ContentItem from '../components/ContentItem'

import {images,content} from '../constants';

const Content = () => {

    const [items, setItems] = useState(content);
    
    const filterItem = (categItem) => {
        const updatedItems = content.filter((currElem) => {
                return currElem.category === categItem;
        });

        setItems(updatedItems);
    }
  return (
    <div>
        <div className='flex flex-row justify-start ml-10 mt-10 mr-6 '>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => setItems(content)}>All</button>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => filterItem('Technology')}>Technology</button>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => filterItem('Education')}>Education</button>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => filterItem('Lifestyle')} >Lifestyle</button>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => filterItem('Healthcare')}>Healthcare</button>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => filterItem('Sport')}>Sport</button>
        <button type="button" class="text-white bg-[#1D1F25] hover:text-black hover:bg-[#FFBB29] text-opacity-60 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2" onClick={() => filterItem('Food')}>Food</button>

        </div>
    <div>
    <div className="flex  justify-evenly flex-wrap 
      py-10">
        {
        items.map(({id,img,category,topic,desc,time}) => {
            return ( 
        <ContentItem id={id} img={img} category={category} topic={topic} desc={desc} time={time}/>
            )})
        }
        </div>
    
        </div>
    </div>
  )
}

export default Content
