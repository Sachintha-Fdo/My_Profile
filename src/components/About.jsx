

import React from 'react'
import uoc from '../images/uoc.png'
import ssc from '../images/ssc.png'

const About=() => {
  return (
    <div name='about' className='w-full h-full screen text-center bg-[#050021] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-8 '>
                <div className='text-center pt-40 pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-800'>About</p>
                </div>
                <div></div>
                </div>
                <div className='mas-w-[1000px] w-[60%]  bg-[#31078033] text-gray-200 font-bold'>
                    <div>
                        <p className='text-center'> Hi I'm Sachintha,Welcome to my personal website! I am a dynamic and driven individual with a diverse skill set, excelling in academic and early career settings. With strong leadership and teamwork abilities, I create operational efficiency and achieve outstanding results. My comprehensive understanding of various fields, coupled with solid organizational and communication skills, enables me to develop innovative products and methodologies. As a self-motivated and ambitious individual, I have a passion for success and making a positive impact.</p>
                    </div>
                </div>
                <div className='flex flex-col py-10 items-right w-full h-full text-left px-40 '>
                <p className='text-2xl inline border-b-2 border-gray-300'>Education</p>
                
                <div className='w-full h-full text-left mx-10 leading-10'>
                <p className='text-2xl font-Georgia'>Bachelor's Degree <img  src={uoc}  style={{width:'40px'}} class='inline mx-[70px] my-[10px] '/>  </p>
                <p className='text-sm font--sans my-[-20px]'>University of Colombo | Faculty of Science   </p>
                <p className='text-sm font-mono my-[20px]'>BSc.(Hons.) in Science & Management (Physical Sciences) - GPA:3.263 </p>
                <p className='text-sm font-sans my-[20px]'>Studied Areas: </p>
                <div>
                    <ul className='list-disc mx-[35px] my-[-10px]'>
                        <li className='leading-6 font-sans text-sm'>Applied Mathematics</li>  
                        <li className='leading-6 font-sans text-sm'>Computer Science</li>  
                        <li className='leading-6 font-sans text-sm'>Physics</li>
                        <li className='leading-6 font-sans text-sm'>Statistics</li>
                        <li className='leading-6 font-sans text-sm'>Business Economics</li>
                        <li className='leading-6 font-sans text-sm]'>Database Systems</li>
                    </ul>
                </div>
                </div>

                <div className='w-full h-full text-left mx-10 leading-10'>
                <p className='text-2xl font-Georgia'>G.C.E. Advance Level - 2017<img  src={ssc}  style={{width:'40px'}} className='inline mx-[7px] my-[10px] '/>  </p>
                <p className='text-sm font--sans my-[-20px]'>St. Sebastian's College Moratuwa</p>
                <p className='text-sm font-sans my-[20px]'>Sbjects: </p>
                <div>
                    <ul className='list-disc mx-[35px] my-[-10px]'>
                        <li className='leading-6 font-sans text-sm'>Combined Mathematics C</li>  
                        <li className='leading-6 font-sans text-sm'>Chemistry B</li>  
                        <li className='leading-6 font-sans text-sm'>Physics B</li>
                    </ul>
                </div>
                </div>

                </div>
            </div>
            
            <div className='flex flex-col py-5 items-right w-full h-full text-left px-40 '>
                <p className='text-2xl inline border-b-2 border-gray-300'>Work Experience</p>
                
                <div className='w-full h-full text-left mx-10 leading-10'>
                <p className='text-sm font--sans my-[20px]'>LB FINANCE</p>
                <div>
                    <ul className='list-disc mx-[35px] my-[-12px]'>
                        <li className='leading-6 font-sans text-sm'>Gained experience in Finance Division at LB Finance from January 2018 to July 2018.</li>  
                    </ul>
                </div>
                </div>

                <div className='w-full h-full text-left mx-10 leading-10'>
                <p className='text-sm font--sans my-[20px]'>MAS INTIMATES PVT. LTD.</p>
                
                <div>
                    <ul className='list-disc mx-[35px] my-[-12px]'>
                        <li className='leading-6 font-sans text-sm'>Worked as a Product Development intern at MAS Intimates. From November 2022 to April 2023.</li>  
                    </ul>
                </div>
                </div>



                </div>

        <div>
            
        </div>
    </div>
  )
}

export default About