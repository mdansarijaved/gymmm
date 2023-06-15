import React from 'react'
import { FaAngleDoubleLeft } from 'react-icons/fa';
export default function Heading() {
    return (
        <>
            <div className=' flex flex-col justify-center items-center py-12 hover:bg-[#fda441] transition duration-700 bg-[#e28523] mt-12 px-2  w-full'>
                <h1 className=' lg:text-xl italic'>Special Prelaunch Offers Available for a Limited Time only!</h1>
                <p className='opacity-60 pt-4'>Apply for ARC Membership NOW</p>
            </div>
            <div className=' flex bg-[#0a0a0a] justify-center relative'>
                <video width="640" height="360" autoPlay loop muted src='/images/ARC-Home-Intro.mp4' className='lg:w-[1200px] w-96' ></video>
                <div className='absolute text-7xl lg:text-[400px] opacity-20 arr1'>
                    <FaAngleDoubleLeft />
                </div>
                <div className='bg-transparent text-xl lg:text-3xl h-full absolute top-0 b6 left-0 flex flex-col justify-center items-center -z-10'>
                    <p className='  opacity-100'>INDIA'S PREMIER ATHLETIC PERFORMANCE CENTRE</p>
                    <p className=' text-xl lg:text-5xl italic py-3 opacity-100'>OPENING SOON IN CHENNAI</p>
                </div>



                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center uppercase text-xl lg:text-[120px] font-bold '>
                    <div className='[&>*]:opacity-0 [&>*]:absolute  '>
                        <p className='b1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Agility</p>
                        <p className='b2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>focus</p>
                        <p className='b3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Lalman</p>
                        <p className='b4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Thakur</p>
                        <p className='b5 top-1/2 left-1/2 text-[#e28523] lg:text-[150px] -translate-y-1/2 -translate-x-1/2'>Performance</p>

                    </div>
                </div>

            </div>
            <div className='bg-white text-black  w-full px-28 py-20 text-center text-sm lg:text-2xl'>
                <h1 className='[&>*]:text-[#fea844] text-gray-500'>ARC (Advanced Recalibration & Coaching) is a 9,500 sqft indoor fitness performance facility with four quadrants <span>Cardio Zone, Functional Groupx Circuit, Resistance Training</span> and <span> Free Weights</span> with access to a rooftop semi-Olympic-sized <span>swimming pool</span> and 650ft <span> jogging track.</span></h1>
            </div>
        </>
    )
}
