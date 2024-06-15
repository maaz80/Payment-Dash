import React from 'react'
import Visa from "../images/Visa.png"
import MasterCard from "../images/MasterCard.png"
import Credit from "../images/Credit.png"

const Payment = () => {
    return (
        <div className='w-[100%] mt-8 font-serif flex flex-col justify-around h-[450px]'>
            <h2 className='font-semibold'>Pay Using Credit Card</h2>
            <div className='flex gap-8 h-7 mt-5'>
                <img src={MasterCard} alt="Card" width='39' height='17px' />
                <img src={Visa} alt="Card" width='39' height='17px' />
                <img src={Credit} alt="Card" width='39' height='17px' />
            </div>
            <div>
                <div className='w-[100%] mt-10'>
                    <div className='text-sm text-gray-300 mb-3'>Credit Card</div>
                    <input type="password" placeholder='XXXX XXXX XXXX XXXX' className=' w-[90%] ' />
                    <div className='w-[10%] relative'>
                    <img src={MasterCard} alt="" className='w-10 bottom-0 right-[-269px] md:right-[-385px] absolute'/>

                    </div>
                    <div className='w-[100%] h-[1px] bg-gray-300'></div>
                </div>
                <div className='w-[100%] mt-12'>
                    <div className='text-sm text-gray-300 mb-3'>Name</div>
                    <input type="text" placeholder='Holder Name' className=' w-[100%] border-none' />
                    <div className='w-[100%] h-[0.5px] bg-gray-300'></div>
                </div>
                <div className='w-[100%] mt-12 m-auto flex justify-between'>
                    <div className='w-[49%]'>
                        <div className='text-sm text-gray-300 mb-3'>Expiration Date</div>
                        <input type="text" placeholder='Date of Expiry' className=' w-[100%] border-none' />
                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                    </div>
                    <div className='w-[49%]'>
                        <div className='text-sm text-gray-300 mb-3'>CVV</div>
                        <input type="text" placeholder='CVV Number' className=' w-[100%] border-none' />
                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                    </div>
                </div>
                <div className='flex justify-between mt-10 items-center'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" />
                        <div>Save Card</div>
                    </div>
                    <div>
                        <button className='bg-black py-1 px-10 border-none rounded-md text-white cursor-pointer hover:scale-110'>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
