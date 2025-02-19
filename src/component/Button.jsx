import {icons} from "../constants/Constants"
import {UseCart} from "../context/CartContext"


const Button = ({name, products}) => {
    const {addItem, removeItem} = UseCart();

    const handleClick = (e) => {
        e.stopPropagation();
            if (name == '+') {
                addItem(products);
            } else {
                removeItem(products);
            }
        }
    

  return (
    <div className={`
        w-[30%] flex justify-center items-center text-[30px] font-bold p-1
        ${name==='-' ? 'border-2 border-red-500 hover:bg-red-100 active:bg-red-300 duration-200' :'' } 
        ${name==='+' ? 'border-2 border-green-500 bg-green-100 hover:bg-green-500 active:bg-green-600 duration-200' :'' } 
        rounded-full hover:shadow-lg duration-200 cursor-pointer`}
        onClick={handleClick}>
            {
                name == '+' 
                ? (<img src={icons.plus} alt="" className="w-6" />) 
                : (<img src={icons.minus} alt="" className="w-6 " />)
            }
    </div>
  )
}

export default Button