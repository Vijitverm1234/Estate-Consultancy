import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div id="about" className='flex flex-col items-center justify-center conatiner mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>
                About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
            </h1 >
            <p className='text-gray max-w-80 text-center mb-8' >Welcome to Estate where we redefine estate living.🚀</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:'>
                        <div>
                            <p className='font-medium text-4xl text-gray-600'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='font-medium text-4xl text-gray-600'>20+</p>
                            <p>Projects completed</p>
                        </div>
                        <div>
                            <p className='font-medium text-4xl text-gray-600'>30+</p>
                            <p>Mn Sq Ft Delivered</p>
                        </div>
                        <div>
                            <p className='font-medium text-4xl text-gray-600'>60+</p>
                            <p>Onging Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg:'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, impedit! Explicabo autem labore hic laudantium! Quam sint cumque nostrum voluptate facere? Pariatur, saepe. Necessitatibus officiis quasi atque aut dicta, architecto perferendis totam at natus molestiae dignissimos tenetur, qui alias sequi laboriosam esse velit sed. Modi iste eveniet quasi deleniti laudantium.</p>
                <button className='bg-gray-800 text-white px-8 py-2 rounded'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About
