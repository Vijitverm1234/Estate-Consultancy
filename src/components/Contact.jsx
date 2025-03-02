import React from 'react'

const Contact = () => {
  return (
   <div  className='flex flex-col items-center justify-center conatiner mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='#contact'>
               <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>
                   Connect <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
               </h1 >
               <p className='text-gray max-w-80 text-center mb-8' >Ready to make a move ? Let's Build Future Together</p>
               <form action="">
                <div>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                    </div>
                    <input type="text"placeholder='your name' />
                </div>
               </form>
           </div>
  )
}

export default Contact
