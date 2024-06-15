import React from 'react'
import { BiBell, BiNotification, BiSearch, BiSolidNotification } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

const Search = () => {
  return (
    <div className='h-10 border-b w-[100%] flex items-center'>
      <div className='text-2xl ml-4'><BiSearch /></div>
      <div className='w-[83%] ml-5'>
        <input type="text" placeholder='Search' className='w-[100%]' />
      </div>
      <div className='border-r border-black pr-2 md:pr-10'><BiBell /></div>
      <div className='flex items-center ml-5'>
        <div className='text-2xl'><CgProfile /></div>
        <div className='text-[9px] ml-3 w-16 md:w-24'>
          <div className='font-bold'>Maaz Shakeel</div>
          <div>Lorem, ipsum.</div>
        </div>
      </div>
    </div>
  )
}

export default Search
