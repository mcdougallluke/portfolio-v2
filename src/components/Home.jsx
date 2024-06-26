import React from 'react'
import Typewriter from "typewriter-effect"
import {HiArrowNarrowRight} from 'react-icons/hi'
import GraphemeSplitter from "grapheme-splitter";
import { Link } from 'react-scroll';

const Home = () => {
    const stringSplitter = (string) => {
        const splitter = new GraphemeSplitter()
        return splitter.splitGraphemes(string)
    };
  return (
    <div name="home" className="w-full h-screen bg-[#121212]">
        { /* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-[#BB86FC]'>Hello, my name is</p>
            <h1 className='pb-4 text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>Luke McDougall</h1>
            <div className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
            {" "}
        <Typewriter
          options={{
            strings: [
              "I'm a Software Engineer 🔧",
              "I'm a Fullstack Developer 💻",
              "I'm a Problem Solver 🧩"
            ],
            delay: 50,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            stringSplitter: stringSplitter,
          }}
        />
            </div>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I have a Bachelors degree in Computer Science.
            Currently, I’m working as a software engineer for Target.
            </p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#BB86FC] hover:border-[#BB86FC]'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home