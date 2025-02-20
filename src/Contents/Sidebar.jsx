import { UseCart } from "../context/CartContext"
import {icons} from "../constants/Constants"

const Sidebar = () => {
    const {sideBarToggle, setSideBarToggle, cartItems, totalCost, totalQuantity, addItem, removeItem} = UseCart();
    const handleClick = () => {
        setSideBarToggle(!sideBarToggle)
    }
  return (
    <div className={`absolute w-full md:w-1/2 lg:w-1/3 h-screen shadow-lg bg-slate-100 z-20 top-0 right-0 transform ${sideBarToggle ? "translate-x-0 " : "translate-x-full" } transition-transform duration-500 ease-in-out flex flex-col gap-10`}>
        <div className="w-full p-5 flex justify-between items-center">
            <h1 className="text-slate-700 text-2xl font-semibold">My Cart</h1>
          <div className="p-2 hover:bg-slate-400 rounded-lg duration-300" onClick={handleClick}>
            <img src={icons.Cross} alt="" className="object-contain w-5"/>
        </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5">

                <div className="flex flex-row w-full font-palanquin text-lg text-slate-800 font-semibold">
                  <p className="flex-1">Product</p>
                  <p className="flex-1 flex justify-center">Price</p>
                  <p className="flex-1 flex justify-center">Quantity</p>
                  <p className="flex-1 flex justify-center">Cost</p>
                </div>
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
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row justify-around w-full font-palanquin text-lg text-slate-800 font-normal">
          <p className="flex-1 flex">Total Quantity : </p>
          <p className="flex-1 flex">{totalQuantity}</p>
        </div>
        <div className="flex flex-row justify-around w-full font-palanquin text-lg text-slate-800 font-normal">
          <p className="flex-1 flex">Total Cost :</p>
          <p className="flex-1 flex">{totalCost}</p>
        </div>
      </div>
        </div>
  )
}

export default Sidebar