import { UseCart } from "../context/CartContext"
import {icons} from "../constants/Constants"
import { useState } from "react";


const Sidebar = () => {
    const {sideBarToggle, setSideBarToggle, cartItems, totalCost, totalQuantity, addItem, removeItem} = UseCart();
    const [discount, setDiscount] = useState(0);
    const [tip, setTip] = useState(0)
    const handleClick = () => {
        setSideBarToggle(!sideBarToggle)
    }
    const Vat = (0.13 * totalCost);
    const withVAT = totalCost + Vat;

    const DiscountOnly = (discount / 100) * withVAT;
    const DiscountRounded = DiscountOnly.toFixed(2);
    const Total = tip + (withVAT - DiscountOnly); // Apply discount before adding tip
    let GrandTotal = Total.toFixed(2); // Ensure final output is rounded

  return (
    // <div className={`absolute -right-40 top-0 h-screen w-full transform ${sideBarToggle ? "translate-x-0 " : "translate-x-full" } transition-transform duration-500 ease-in-out `
    // } 
    // style={{zIndex:1000}}>
    <div className={`absolute w-full md:w-1/2 lg:w-2/5 h-screen shadow-lg bg-slate-100 top-0 right-0 z-20 transform ${sideBarToggle ? "translate-x-0 " : "translate-x-full" } transition-transform duration-500 ease-in-out flex flex-col gap-10`}
    // style={{zIndex:1010}}
    >
        <div className="w-full p-5 flex justify-between items-center">
            <h1 className="text-slate-700 text-2xl font-semibold">My Cart</h1>
          <div className="p-2 hover:bg-slate-400 rounded-lg duration-300 z-50" onClick={handleClick} >
            <img src={icons.Cross} alt="" className="object-contain w-5"/>
          </div>

        </div>

        <div className="w-[80%] mx-auto flex flex-row font-palanquin text-xl text-slate-700 font-bold uppercase">
          <p className="flex-1 ">Product</p>
          <p className="flex-1 flex justify-center">Price</p>
          <p className="flex-1 flex justify-center">Quantity</p>
          <p className="flex-1 flex justify-center">Cost</p>
        </div>
        
        <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5">
          {
            cartItems.map((items) => (
              <div key={items.id} className="flex flex-row w-full border-b-2 pb-2 text-md font-montserrat text-slate-700">
              <p className="flex-1 flex items-center">{items.name}</p>
              <p className="flex-1 flex justify-center items-center">{items.price}</p>
              <p className="flex-1 flex justify-center items-center gap-3">
                <button 
                  className="hover:bg-red-200 border active:bg-red-300 border-red-700 text-xl font-bold cursor-pointer p-1 rounded-md"
                  onClick={() => removeItem(items)}
                  >
                    {
                      items.quantity === 1 
                      ? <img src={icons.delete} alt="" className="w-4"/>
                    : <img src={icons.minus} alt="" className="w-4"/>
                  }
                    </button>
                {items.quantity}
                <button 
                  className="bg-green-200 hover:bg-green-500 border active:bg-green-700 border-green-700 text-xl font-bold cursor-pointer p-1 rounded-md"
                  onClick={() => addItem(items)}
                  ><img src={icons.plus} alt="" className="w-4"/></button>
                </p>
              <p className="flex-1 flex justify-center items-center">{items.cost}</p>
            </div>
          ))
        }
      </div>

      
      {
        cartItems.length > 0 ? 
        (
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5">
         <div className="w-full flex flex-row justify-between font-montserrat text-md text-slate-800 font-medium">
          <p className="flex-1 flex justify-start items-center">VAT :</p>
          <p className="flex-1 flex justify-center items-center"> 13% OF Rs. {totalCost}  </p>
          <p className="flex-1 flex justify-center items-center"> Rs. {Vat.toFixed(2)}  </p>
          <p className="flex-1 flex justify-center items-center">Rs. {withVAT}</p>
        </div> 

        <div className="flex flex-row justify-around w-full font-montserrat text-md text-slate-800 font-medium">
          <p className="flex-1 flex">Total Quantity : </p>
          <p className="flex-1 flex">{totalQuantity}</p>
        </div>

        <div className="w-full flex flex-row justify-between font-montserrat text-md text-slate-800 font-medium">
          <p className="flex-1 flex justify-start items-center">Discount : </p>
          <div className="flex-[2]">
              <input
              type="text"
              placeholder="Enter discount"
              value={discount} // Assuming `discount` is a state variable
              onChange={(e) => setDiscount(Number(e.target.value.replace(/\D/g, "")))}
              className="w-1/2 outline-blue-400 duration-200 rounded-lg border-2 border-slate-400 text-md px-5 py-2"
              />  
          </div>
          <p className="flex-1 flex justify-center items-center">{DiscountRounded}</p>
        </div>

        <div className="w-full flex flex-row justify-between font-montserrat text-md text-slate-800 font-medium">
          <p className="flex-1 flex justify-start items-center">Tips : </p>
          <div className="flex-[2]">
              <input
              type="text"
              placeholder="Enter tips"
              value={tip} // Assuming `discount` is a state variable
              onChange={(e) => setTip(Number(e.target.value.replace(/\D/g, "")))}
              className="w-1/2 outline-blue-400 duration-200 rounded-lg border-2 border-slate-400 text-md px-5 py-2"
              />  
          </div>
          <p className="flex-1 flex justify-center items-center">{tip}</p>
        </div>
        <div className="w-full border-2"></div>
        <div className="w-full flex flex-row justify-between font-montserrat text-lg text-slate-700 font-bold ">
          <p className="flex-1 flex justify-start items-center">Grand Total :</p>
            <div className="flex-[2]">
          </div>
          <p className="flex-1 flex justify-center items-center">{GrandTotal}</p>
        </div>
      </div>
        ) : (
        <div className="w-[80%] mx-auto flex flex-col items-center gap-5">
          <p className="text-center font-montserrat text-md text-slate-800 font-medium border-b-2 w-full pb-2">No products in cart !</p>
          <p className="font-montserrat text-md text-slate-800 font-medium">No products in cart !</p>
        </div>
        )}
      
    </div>
    // </div>
  )
}

export default Sidebar