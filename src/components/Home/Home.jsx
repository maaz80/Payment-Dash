import React, { useState } from 'react'
import CardContainer from '../CardContainer/CardContainer'
import Payment from '../Payment/Payment'
import OrderSummary from '../OrderSummary/OrderSummary'
import Search from '../Search/Search'
import Sidebar from '../Sidebar/Sidebar'
import PayPalPayment from '../Paypal/Paypal'
import UPIPayment from '../UPI/UPI'
import CODPayment from '../COD/COD'

const Home = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');

    const renderPaymentComponent = () => {
        switch (selectedPaymentMethod) {
            case 'creditCard':
                return <Payment />;
            case 'paypal':
                return <PayPalPayment />;
            case 'upi':
                return <UPIPayment />;
            case 'cod':
                return <CODPayment />;
            default:
                return <Payment />;
        }
    };

    return (
        <div className='w-[100%] flex bg-white  m-auto '>
            <Sidebar />
            {/* Main Content */}
            <div className='w-[95%] rounded-md border' >
                <Search />
                <div className='w-[100%] p-5 flex  m-auto gap-3 flex-col md:flex-row'>
                    <div className='w-[100%] md:w-[69%] rounded-md bg-white'>
                        <h2 className='font-bold font-serif'>Select Payment Method</h2>
                        <div className='flex font-medium gap-8 text-[13px] md:text-[18px] md:gap-16 mt-7 font-serif'>
                            <span 
                                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'creditCard' ? 'text-blue-500' : ''}`}
                                onClick={() => setSelectedPaymentMethod('creditCard')}
                            >
                                Credit Card
                            </span>
                            <span 
                                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'paypal' ? 'text-blue-500' : ''}`}
                                onClick={() => setSelectedPaymentMethod('paypal')}
                            >
                                PayPal
                            </span>
                            <span 
                                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'upi' ? 'text-blue-500' : ''}`}
                                onClick={() => setSelectedPaymentMethod('upi')}
                            >
                                UPI
                            </span>
                            <span 
                                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'cod' ? 'text-blue-500' : ''}`}
                                onClick={() => setSelectedPaymentMethod('cod')}
                            >
                                C.O.D
                            </span>
                        </div>
                        <div className="flex">
                            <div className='w-[100%] md:w-[90%] m-auto gap-5 flex flex-col md:flex-row'>
                                <CardContainer />
                                <div className='w-[100%] md:w-[50%]'>
                                    {renderPaymentComponent()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[30%] p-2 rounded-md bg-gray-50 flex flex-col justify-between items-center mt-[100px] md:mt-0'>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
