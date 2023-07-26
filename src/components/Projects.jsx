import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-full screen text-center bg-[#050021] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-8 '>
                    <div className='text-center pt-20 pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-800'>Projects</p>
                    </div>
                </div>
            </div>

        <div className='flex flex-col py-10 items-right w-full h-full text-left px-40 '>
            <ul className='list-disc mx-[35px] my-[-10px]'>
                <li className='leading-6 font-sans text-sm'>Software For an Automated Drink Dispenser user interface (C#). - October 2021 (Universityof Colombo)</li>
                <li className='leading-6 font-sans text-sm'>Electronic load tester (Arduino). - August 2020 (University of Colombo)</li>
                <li className='leading-6 font-sans text-sm'>Find the most comfortable light source (Python). - November 2020 (University of Colombo)</li>
                <li className='leading-6 font-sans text-sm'>Digitalized Delivery Management System Using C# & SQL. - (Final year project University ofColombo)</li>
                <li className='leading-6 font-sans text-sm'>Computer Vision project- Developing a Face and object recognition model (Ongoing project)</li>
            </ul>
        </div>

    </div>
  )
}

export default Projects