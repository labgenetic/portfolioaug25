"use client"

import Image from 'next/image'
import React, { useState } from 'react'


export default function Sidebar() {

    const [isTool, setTool] = useState(0);

    const handleToolHover = (index) => {
        setTool(index);
        console.log(`Hovered over tool ${index}`);
    }
    const handleToolLeave = () => {
    setTool(0);
};
    return (
        <aside className='cursor-default select-none hidden sm:visible sm:flex sm:flex-col gap-6 p-4 bg-[#3D8D7A] h-full w-[400px] justify-around items-center'>
            <div className='flex flex-col items-center gap-1'>
                <Image
                    src="/assets/Asset 1.svg"
                    width={150}
                    height={150}
                    alt="Logo"
                />
                <h2 className='text-[#FBFFE4] text-medium font-bold text-center w-[160px] '>CHARAF EDDINE CHAROUIT</h2>
            </div>
            <h2 className='text-[#FBFFE4] text-2xl font-bold text-center italic'>Technical Skills</h2>
            <div className='flex flex-col h-1/2 justify-around gap-2 w-full p-3'>
                <h3 className='text-white text-2xl font-semibold text-left w-[200px] italic'>Design:</h3>
                <ul className='grid grid-rows-2 grid-cols-3 w-full '>
                    <div className='flex flex-col justify-between items-center'>
                        <Image
                            onMouseOver={() => handleToolHover(1)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/AI.svg"
                            width={50}
                            height={50}
                            alt="AI Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 1 ? 'font-medium text-sm text-center  text-[#FBFFE4] opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>Adobe Illustrator</span>
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        <Image
                            onMouseOver={() => handleToolHover(2)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/Ps.svg"
                            width={50}
                            height={50}
                            alt="Ps Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 2 ? 'opacity-100 transition-opacity duration-300 text-sm text-center font-medium text-[#FBFFE4]' : 'opacity-0'}`}>Adobe Photoshop</span>
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        <Image
                            onMouseOver={() => handleToolHover(3)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/Id.svg"
                            width={50}
                            height={50}
                            alt="Id Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 3 ? 'opacity-100 transition-opacity duration-300 font-medium text-sm text-[#FBFFE4] text-center' : 'opacity-0'}`}>Adobe InDesign</span>
                    </div>
                    <div className='flex justify-around items-center flex-col-reverse'>
                        <Image
                            onMouseOver={() => handleToolHover(4)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/C.svg"
                            width={40}
                            height={40}
                            alt="Canva Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 4 ? 'opacity-100 transition-opacity duration-300  font-medium text-sm  text-[#FBFFE4]  text-center' : 'opacity-0'}`}>Canva</span>
                    </div>
                    <div className='flex justify-around items-center flex-col-reverse'>
                        <Image
                            onMouseOver={() => handleToolHover(5)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/Figma.svg"
                            width={35}
                            height={35}
                            alt="Figma Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 5 ? 'text-sm font-medium  text-[#FBFFE4] opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>Figma</span>
                    </div>
                </ul>
            </div>
            <div className='flex flex-col h-1/2 justify-around gap-2 w-full p-3'>
                <h3 className='text-white text-2xl font-semibold text-left w-[200px] italic'>Front-end Developement:</h3>
                <ul className='grid grid-rows-2 grid-cols-3 w-full gap-2'>
                    <div className='flex justify-between items-center flex-col'>
                        <Image
                            onMouseOver={() => handleToolHover(6)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/HTML.svg"
                            width={50}
                            height={50}
                            alt="HTML Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 6 ? 'opacity-100 transition-opacity duration-300  font-medium text-sm  text-[#FBFFE4]  text-center' : 'opacity-0'}`}>HTML</span>
                    </div>
                    <div className='flex justify-between items-center flex-col'>
                        <Image
                            onMouseOver={() => handleToolHover(7)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/CSS.svg"
                            width={49.5}
                            height={49.5}
                            alt="CSS Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 7 ? 'opacity-100 transition-opacity duration-300  font-medium text-sm  text-[#FBFFE4]  text-center' : 'opacity-0'}`}>CSS</span>
                    </div>
                    <div className='flex justify-between items-center flex-col'>
                        <Image
                            onMouseOver={() => handleToolHover(8)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/JS.svg"
                            width={50}
                            height={50}
                            alt="JS Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 8 ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} font-medium text-sm  text-[#FBFFE4]  text-center`}>JavaScript</span>
                    </div>
                    <div className='flex justify-around items-center flex-col-reverse'>
                        <Image
                            onMouseOver={() => handleToolHover(9)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/REACT.svg"
                            width={50}
                            height={50}
                            alt="REACT Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 9 ? 'opacity-100  font-medium text-sm transition-opacity duration-300 text-[#FBFFE4]  text-center' : 'opacity-0'}`}>React</span>
                    </div>
                    <div className='flex justify-around items-center flex-col-reverse'>
                        <Image
                            onMouseOver={() => handleToolHover(10)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/NEXT.svg"
                            width={50}
                            height={50}
                            alt="NEXT Icon"
                            className='hover:scale-110 transition-transform duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 10 ? 'opacity-100 transition-opacity duration-300 font-medium text-sm  text-[#FBFFE4]  text-center' : 'opacity-0'}`}>Next</span>
                    </div>
                    <div className='flex justify-around items-center flex-col-reverse'>
                        <Image
                            onMouseOver={() => handleToolHover(11)}
                            onMouseLeave={handleToolLeave}
                            src="/assets/TAILWIND.svg"
                            width={50}
                            height={50}
                            alt="TW Icon"
                            className='hover:scale-110 transition-transform justify-self-center duration-200 cursor-pointer  '
                        />
                        <span className={`${isTool === 11 ? 'opacity-100 transition-opacity duration-200 font-medium text-sm  text-[#FBFFE4]  text-center' : 'opacity-0'}`}>Tailwind</span>
                    </div>
                </ul>
            </div>
        </aside>
    )
}
