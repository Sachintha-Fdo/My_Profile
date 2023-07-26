import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/fa'
import profilePic from '../images/profilePic.jpg'

const  Home = () => {

  return (
    <div>
      
      <div name='home'className='w-full h-full text-center bg-[#050021]'>
        
      <div className='flex justify-center items-center py-20'>
            <img class="rounded-full w-18 h-18" src={profilePic}  style={{width:'200px ' }}/>
      </div>

        <div className='max-w-[1000px] mx-auto my-0 flex-col justify-center  h-full'>
        

            <p className='text-[#ffffff]'>Hi, My name is</p>
            <h1 className='text-4xl sm:text=7xl font-bold text-[#ffffff]'>Sachintha Fernando</h1>
            <h1 className='text-4xl sm:text-2xl font-bold text-[#8892b0]'>I'm a graduate of the University of Colombo</h1>
            
            
        </div>
        
        </div>
          
    </div>
  )
}
export default Home;
