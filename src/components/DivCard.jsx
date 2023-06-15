import React from 'react'

export default function DivCard() {
    return (
        <div className=' flex justify-center items-center h-screen  flex-wrap bg-footer-texture bg-fixed bg-cover'>
            <div className='bg-black lg:w-1/2 text-gray-600 text-center text-sm lg:text-xl lg:p-20'><p className='[&>*]:text-[#e78924]'>At India’s premier Athletics Performance Centre, clients will have access to sports scientists, nutritionists, physiotherapists, sports psychologists and personal fitness trainers to evaluate how they perform and give guidance on how to achieve <span> #peakperformance.</span></p></div>
            <div className=' w-1/2 bg-black/70 hidden lg:block '></div>
            <div className=' w-1/2 bg-black/70 hidden lg:block '></div>
            <div className='lg:w-1/2 bg-black text-gray-600 text-center text-sm lg:text-xl lg:p-20  '><p className='[&>*]:text-[#e78924]'>At India’s premier Athletics Performance Centre, clients will have access to sports scientists, nutritionists, physiotherapists, sports psychologists and personal fitness trainers to evaluate how they perform and give guidance on how to achieve <span> #peakperformance.</span></p></div>
        </div>
    )
}
