import { useState, useContext, createContext, useCallback  } from "react";


const CartContext = createContext();

export const UseCart = () => useContext(CartContext);


const CartContextProvider = ({children}) => {
    const [sideBarToggle, setSideBarToggle] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const addItem = (product) => {
      console.log(product.name); 
      
      setCartItems(prevItems => {
        const itemIndex = prevItems.findIndex((item) => item.id === product.id);
        console.log(itemIndex); 
        
        let newItems;
        if (itemIndex !== -1) {
          newItems = [...prevItems];
          newItems[itemIndex].quantity += 1;
          newItems[itemIndex].cost += product.price;
        } else {
          newItems = [...prevItems, { ...product, quantity: 1, cost : product.price }];
        }
        
        setTotalQuantity(prevQuantity => prevQuantity + 1);
        setTotalCost(prevCost => prevCost + product.price);
        
        return newItems;
      });
    };
      const removeItem = (product) => {
        setCartItems((prevItems) => {
          const itemIndex = prevItems.findIndex((item) => item.id === product.id);
                console.log(itemIndex);

          if (itemIndex !== -1) {
            const updatedItems = [...prevItems];
            const item = updatedItems[itemIndex];

            if (item.quantity > 1) {
              item.quantity -= 1;
              item.cost -= product.price;
              setTotalQuantity(totalQuantity - 1);
              setTotalCost(totalCost - product.price);
            } else {
              updatedItems.splice(itemIndex, 1);
              setTotalQuantity(totalQuantity - 1);
              setTotalCost(totalCost - product.price);
            }
            console.log(updatedItems)
            return updatedItems;
          }

          return prevItems;
        });
      };


    const clearItems = () => setCartItems([]);


 return (
    <CartContext.Provider value={{ sideBarToggle, setSideBarToggle, addItem, removeItem, cartItems, clearItems, totalQuantity, totalCost}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;



