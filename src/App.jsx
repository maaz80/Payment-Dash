import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import PayPalPayment from "./components/Paypal/Paypal";
import UPIPayment from "./components/UPI/UPI";
import CODPayment from "./components/COD/COD";

export default function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/paypal" element={<PayPalPayment/>}/>
        <Route path="/upi" element={<UPIPayment/>}/>
        <Route path="/cod" element={<CODPayment/>}/>
      </Routes>
    </div>
  )
}