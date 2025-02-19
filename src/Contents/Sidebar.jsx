import { UseCart } from "../context/CartContext"
import {icons} from "../constants/Constants"

const Sidebar = () => {
    const {sideBarToggle, setSideBarToggle, cartItems, totalCost, totalQuantity} = UseCart();
    const handleClick = () => {
        setSideBarToggle(!sideBarToggle)
    }
  return (
    <div className={`absolute w-full md:w-1/2 lg:w-1/3 h-screen shadow-lg bg-slate-500 z-20 top-0 right-0 transform ${sideBarToggle ? "translate-x-0 " : "translate-x-full" } transition-transform duration-500 ease-in-out`}>
        <div className="w-full p-5 flex justify-between items-center">
            <h1 className="text-slate-200 text-xl ">My Cart</h1>
            <div className="p-2 hover:bg-slate-400 rounded-lg duration-300" onClick={handleClick}>
            <img src={icons.Cross} alt="" className="object-contain w-5"/>
        </div>
        </div>
        <div>
          {
            cartItems.map((items) => (
              <div key={items.id}>
              <p>{items.name}</p>
              <p>{items.price}</p>
              <p>{items.quantity}</p>
            </div>
          ))
        }
      </div>
      <div>
        <p>totalcost : {totalCost}</p>
        <p>totalQuantity : {totalQuantity}</p>
      </div>
        </div>
  )
}

export default Sidebar