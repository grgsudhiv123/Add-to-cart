import Button from "./Button"
import { icons } from "../constants/Constants"
import { useState } from "react"

const Cards = ({id,name,price,desc,bgimg}) => {
    const [eyeState, setEyeState] = useState(true)
    const eyeToggle = () => {
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
                        eyeState ? <img src={icons.EyeOpen} alt="" className="w-5 object-contain bg-cover"/> : <img src={icons.EyeClose} alt="" className="w-5 object-contain bg-cover"/>
                    }
                    
                </div>
                <p className="text-md font-semibold text-green-500"> Rs. <span className="text-3xl font-semibold text-green-600">{price}</span></p>
            </div>
            <div className="border"></div>
            <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-row justify-between ">
                    <p className="text-slate-600 text-lg">Quantity</p>
                    <p>{price}</p>
                </div>
                <div className="w-full flex flex-row justify-between ">
                    <p className="text-slate-600 text-lg">Cost</p>
                    <p>{price}</p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-10">
                <Button name='-' id={id} />
                <Button name='+' id={id}/>
            </div>
        </div>
    </div>
  )
}

export default Cards