import React from 'react'
import { AiOutlineInstagram, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='flex justify-between items-center py-4 bg-black px-7 text-xs'>
        <div>
        © Copyright - ARC 2022
        </div>
        <div className='hidden lg:block'>
            <ul className='flex justify-center gap-4 [&>*]:rounded-full py-3'>
                <li className='p-2'>Contacts</li>
                <li className='p-2'>Contacts</li>
                <li className='p-2'>Contacts</li>
                <div className='hover:bg-red-500 transition duration-500 rounded-full p-3 cursor-pointer'>
                        <AiOutlineInstagram />
                    </div>
                    <div className='hover:bg-blue-800 transition duration-500 rounded-full p-3 cursor-pointer'>
                        <FaFacebookF />
                    </div>
                    <div className='hover:bg-blue-500 transition duration-500 rounded-full p-3 cursor-pointer'>
                        <FaTwitter />
                    </div>
                    <div className='hover:bg-red-700 transition duration-500 rounded-full p-3 cursor-pointer'>
                        <AiFillYoutube />
                    </div>
                    <div className='hover:bg-green-500 transition duration-500 rounded-full p-3 cursor-pointer'>
                        <AiOutlineWhatsApp />
                    </div>
                    <div className='hover:bg-blue-500 transition duration-500 rounded-full p-3 cursor-pointer'>
                        <FaLinkedinIn />
                    </div>
            </ul>
        </div>
    </div>
  )
}
