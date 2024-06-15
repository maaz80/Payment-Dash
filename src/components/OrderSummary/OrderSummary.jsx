import React from 'react'
import Food from "../images/Food.png"
const OrderSummary = () => {
  return (
    <div className='font-serif'>
      <h2 className='font-semibold text-xl text-center'>Order Summary</h2>
      <div className='flex flex-col justify-center items-center text-lg'>
        <img src={Food} alt="Food" width={300} className='mt-[-20px]' />
        <div className='mt-[-20px]'>Burger Combo + Cold Drink</div>
        <div className='font-bold font-sans text-2xl'>₹350</div>
      </div>
      <div className='mt-10 flex flex-col justify-between h-[200px]'>
        <div className='flex justify-between'>
          <div>Delivery time:</div>
          <div className='font-sans'>30 mins</div>
        </div>
        <div className='flex justify-between'>
          <div>Quantity:</div>
          <div className='font-sans'>2</div>
        </div>
        <div className='flex justify-between'>
          <div>Discount:</div>
          <div className='text-green-500 font-sans'>-25%</div>
        </div>
        <div className='w-[100%] h-[1px] bg-gray-300'></div>
        <div className='flex justify-between'>
          <div className='font-bold text-xl'>Total:</div>
          <div className='font-bold text-xl font-sans'>₹525</div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary