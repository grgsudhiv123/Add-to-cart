import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const UseCart = () => useContext(CartContext);


const CartContextProvider = ({children}) => {
    const [sideBarToggle, setSideBarToggle] = useState(false)

    // const [cartItems, setCartItems] = useState();
    // const addItem = () => {};
    // const removeItem = () => {};
    // const clearItems = () => {};



 return (
    <CartContext.Provider value={{ sideBarToggle, setSideBarToggle }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;