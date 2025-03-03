import { useEffect } from "react";
import {icons} from "../constants/Constants"
import { UseCart } from "../context/CartContext"


const NavBar = () => { 
    const {sideBarToggle,setSideBarToggle, totalQuantity, totalCost} = UseCart();
    const handleClick = () => {
        setSideBarToggle(!sideBarToggle);
    }
    console.log(sideBarToggle)
    useEffect(()=>{
      if(sideBarToggle){
        document.body.style.overflow = 'hidden'
        document.body.style.pointerEvent = "none"
      } else {
        document.body.style.overflow = 'auto'
      }
      return()=>(document.body.classList.remove = "no-scroll")
    },[sideBarToggle])
  return (
    <div className="relative w-full flex justify-end shadow-xl rounded-xl">
        <div className="flex justify-start p-3 m-2 rounded-lg hover:bg-lime-100 duration-300" onClick={handleClick}>
            <img src={icons.cart} alt="asefas" className="w-5 z-10 "/>
            <div className="absolute bg-green-600 w-4 h-4 right-2 top-1 rounded-full flex justify-center items-center p-1 text-xs text-slate-200">{totalQuantity}</div>
        </div>
    </div>
  )
}

export default NavBar