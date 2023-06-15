import Image from 'next/image'
import React from 'react'
import { AiOutlineInstagram,AiOutlineMenuFold, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function NavBar() {
    return (
        <div>
            <nav className='flex justify-between px-9 items-center  lg:justify-between lg:px-32 z-50 bg-black text-white fixed top-0 w-full'>
                <div>
                    <Image src="/images/ARC-Logo.png" alt="logo" width={120} height={60} />
                </div>
                <div className='lg:hidden text-2xl'>
                    <AiOutlineMenuFold/>
                </div>
                <ul className='hidden justify-center gap-5 uppercase font-bold text-xs  lg:flex '>
                    <li className='hover:text-[#e78824] transition duration-500 cursor-pointer'>Home</li>
                    <li className='hover:text-[#e78824] transition duration-500 cursor-pointer'>About ARC</li>
                    <li className='hover:text-[#e78824] transition duration-500 cursor-pointer'>Club specs</li>
                    <li className='hover:text-[#e78824] transition duration-500 cursor-pointer'>Rates & benefits</li>
                    <li className='hover:text-[#e78824] transition duration-500 cursor-pointer'>faqs</li>
                    <li className='hover:text-[#e78824] transition duration-500 cursor-pointer'>contact arc</li>
                </ul>
                <div className='hidden justify-center gap-2  [&>*]:p-1  [&>*]:rounded-full lg:flex '>
                    <div className='hover:bg-red-500 transition duration-500 cursor-pointer'>
                        <AiOutlineInstagram />
                    </div>
                    <div className='hover:bg-blue-800 transition duration-500 cursor-pointer'>
                        <FaFacebookF />
                    </div>
                    <div className='hover:bg-blue-500 transition duration-500 cursor-pointer'>
                        <FaTwitter />
                    </div>
                    <div className='hover:bg-red-700 transition duration-500 cursor-pointer'>
                        <AiFillYoutube />
                    </div>
                    <div className='hover:bg-green-500 transition duration-500 cursor-pointer'>
                        <AiOutlineWhatsApp />
                    </div>
                    <div className='hover:bg-blue-500 transition duration-500 cursor-pointer'>
                        <FaLinkedinIn />
                    </div>
                </div>
            </nav>
        </div>
    )
}
