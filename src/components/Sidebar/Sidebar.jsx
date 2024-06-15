import React from 'react'
import { BiCart, BiLogIn, BiMenu } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GiHelp } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'

const Sidebar = () => {
  return (
    <div className='w-[10%] md:w-[5%] rounded-md  flex flex-col items-center gap-10'>
    <div className='text-3xl text-gray-400 mt-16 cursor-pointer hover:scale-110 hover:text-black'><BiMenu/></div>
    <div className='text-3xl text-gray-400 cursor-pointer hover:scale-110 hover:text-black'><BiCart/></div>
    <div className='text-3xl text-gray-400 cursor-pointer hover:scale-110 hover:text-black'><TbTruckDelivery/></div>
    <div className='text-3xl text-gray-400 cursor-pointer hover:scale-110 hover:text-black'><CgProfile/></div>
    <div className='text-3xl text-gray-400 cursor-pointer hover:scale-110 hover:text-black'><GiHelp/></div>
    <div className='text-3xl text-gray-400 cursor-pointer hover:scale-110 hover:text-black'><BiLogIn/></div>
    </div>
  )
}

export default Sidebar
