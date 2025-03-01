import React, { use, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    const [index,setIndex]=useState(0)
    const [cardsToShow,setCardsToShow]=useState(1)
    const nextProject=()=>{
        
    }
    return (
        <div class="bg-gray-100 p-6 rounded-2xl shadow-lg text-center">
            <h1 class="text-3xl font-bold text-gray-800">
                Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
            </h1>
            <p class="mt-4 text-gray-600 text-lg font-medium">
                Property • Luxury • Mansion • Landownership
            </p>

          <div className='flex justify-end mb-8'>
            <button className='p-3 bg-gray-200 rounded mr-2'>
                <img src={assets.left_arrow} alt="prevous" />
              
            </button>
            <button className='p-3 bg-gray-200 rounded mr-2'>
    
                <img src={assets.right_arrow} alt="next" />
            </button>
          </div>

          {/* project slider container */}
          <div className='overflow-hidden '>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
                {projectsData.map((project,index)=>(
                   <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                      <img src={project.image} alt="" className='w-full h-auto mb-14'/>
                      <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-mg'>
                           <h2 className='text-xl font-semibold text-gray-800'>
                            {project.title}
                           </h2>
                           <p className='text-gray-500 text-sm'>
                            {project.price} <span>{project.location}</span>
                           </p>
                        </div>
                      </div>
                   </div>
                ))}
            </div>
          </div>
        </div>
    )
}

export default Projects
