import React from 'react'

const CODPayment = () => {
    return (
        <div className='w-[100%] mt-8 font-serif flex flex-col justify-around h-[250px]'>
            <h2 className='font-semibold'>Cash on Delivery</h2>
            <p className='mt-5 text-gray-500'>Pay with cash upon delivery. Please ensure you have the exact amount ready as our delivery personnel may not carry change.</p>
            <div className='flex justify-between mt-10 items-center'>
                <div className='flex items-center gap-1'>
                    <input type="checkbox" />
                    <div className='text-[10px] md:text-[16px]'>Confirm COD Payment</div>
                </div>
                <div>
                    <button className='bg-black py-1 px-10 border-none rounded-md text-white cursor-pointer hover:scale-110 text-[13px] md:text-[20px]'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default CODPayment
