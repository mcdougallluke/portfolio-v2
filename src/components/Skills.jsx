import React from 'react'

import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';
import Cpp from '../assets/cpp.png';
import Go from '../assets/go.png';
import Unity from '../assets/unity.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-300 bg-[#121212]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#BB86FC] '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt='HTML Icon'/>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='HTML Icon'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Cpp} alt='HTML Icon'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Unity} alt='HTML Icon'/>
                    <p className='my-4'>Unity Engine</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='HTML Icon'/>
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Go} alt='HTML Icon'/>
                    <p className='my-4'>Go</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='HTML Icon'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='HTML Icon'/>
                    <p className='my-4'>Node JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills