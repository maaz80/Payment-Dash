import React from 'react'
import UPI from "../images/UPI.png"

const UPIPayment = () => {
    return (
        <div className='w-[100%] mt-8 font-serif flex flex-col justify-around h-[200px]'>
            <h2 className='font-semibold'>Pay Using UPI</h2>
            <div className='flex gap-8 h-7 mt-5'>
                <img src={UPI} alt="UPI" width='60' height='20px' />
            </div>
            <div>
                <div className='w-[100%] mt-10'>
                    <div className='text-sm text-gray-300 mb-3'>UPI ID</div>
                    <input type="text" placeholder='Enter UPI ID' className='w-[90%] border-b-2 border-gray-300' />
                </div>
                <div className='flex justify-between mt-10 items-center'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" />
                        <div className='text-[13px] md:text-[18px]'>Save UPI ID</div>
                    </div>
                    <div>
                        <button className='bg-black py-1 px-10 border-none rounded-md text-white cursor-pointer hover:scale-110 text-[13px] md:text-[18px]'>Pay with UPI</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UPIPayment
