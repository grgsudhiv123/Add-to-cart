import Button from "./Button"
import { icons } from "../constants/Constants"
import { useState } from "react"
import { UseCart } from "../context/CartContext";
import { Icon } from '@iconify/react';


const Cards = ({products}) => {
    const { id, name, price, desc, bgimg } = products;

    const {cartItems} = UseCart()
    const productIncart = cartItems.find((item) => item.id === products.id)
    const [eyeState, setEyeState] = useState(true)
    const eyeToggle = (e) => {
        e.stopPropagation();
        setEyeState(!eyeState);
    }

  return (
    <div className="relative p-5 shadow-lg hover:shadow-xl duration-300 rounded-xl">
         <div
            className={`absolute inset-0 rounded-xl bg-cover bg-center transition-all duration-300 ${
            !eyeState ? "blur-[2px]" : ""
            }`}
            style={{ backgroundImage: `${eyeState ? "none" : `url(${bgimg})`}` }}
        ></div>

        {/* Dark Overlay */}
        {!eyeState && (
            <div className="absoluterounded-xl bg-slate-300 opacity-50"></div>
        )}

        <div className="relative flex flex-col gap-4 z-10">
            <p className="text-xl font-palanquin font-semibold">{name}</p>
            <p className="text-sm text-balanced font-montserrat text-slate-600">{desc}</p>
        
            <div className="w-full flex justify-between items-center">
                <div className="bg-green-200 hover:bg-slate-200 active:bg-slate-400 duration-200 p-2 rounded-full cursor-pointer" onClick={eyeToggle}>
                    {
                        eyeState ? <Icon icon="clarity:eye-show-line" className="w-6 h-6" /> : <Icon icon="clarity:eye-hide-line" className="w-6 h-6" />
                    }
                    
                </div>
                <p className="text-md font-semibold text-green-500"> Rs. <span className="text-3xl font-semibold text-green-600">{price}</span></p>
            </div>
            <div className="border"></div>
            <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-row justify-between ">
                    <p className="text-slate-600 text-lg">Quantity</p>
                    <p>{productIncart ? productIncart.quantity : 0}</p>
                </div>
                <div className="w-full flex flex-row justify-between ">
                    <p className="text-slate-600 text-lg">Cost</p>
                        <p>{productIncart ? productIncart.cost : 0}</p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-10">
                <Button name='-' products={products}/>
                <Button name='+' products={products} />
            </div>
        </div>
    </div>
  )
}

export default Cards