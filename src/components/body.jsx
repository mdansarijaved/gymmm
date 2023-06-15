import React from 'react'
import Image from 'next/image'
import DivCard from './DivCard'
import Footer from './footer'

export default function Body() {
    return (
        <div className=' bg-fixed bg-hero-pattern h-screen bg-cover'>

            <div className=' py-44 w-full grid place-items-center bg-black/40 '>
                <button className='uppercase border-2  rounded hover:bg-black/70 transition duration-500 text-[#c29446] border-[#c29446] py-5 px-10 font-bold'>Expore the facility</button>
            </div>
            <div className=''>
                <DivCard />
                <Footer/>

            </div>

        </div>
    )
}
