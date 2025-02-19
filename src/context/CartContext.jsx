import { useState, useContext, createContext, useCallback  } from "react";


const CartContext = createContext();

export const UseCart = () => useContext(CartContext);


const CartContextProvider = ({children}) => {
    const [sideBarToggle, setSideBarToggle] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const addItem = (product) => {
      console.log(product.name); // This will print once
      
      setCartItems(prevItems => {
        const itemIndex = prevItems.findIndex((item) => item.id === product.id);
        console.log(itemIndex); // This should now print once
        
        let newItems;
        if (itemIndex !== -1) {
          // Item already exists, update quantity
          newItems = [...prevItems];
          newItems[itemIndex].quantity += 1;
        } else {
          // Item doesn't exist, add it with quantity 1
          newItems = [...prevItems, { ...product, quantity: 1 }];
        }
        
        // Calculate new totals after this update
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
              setTotalQuantity(totalQuantity - 1);
              setTotalCost(totalCost - product.price);
            } else {
              // Remove item if quantity is 1
              updatedItems.splice(itemIndex, 1);
              setTotalQuantity(totalQuantity - 1);
              setTotalCost(totalCost - product.price);
            }

            return updatedItems;
          }

          return prevItems;
        });
      };



    // const [cartItems, setCartItems] = useState();
    // const addItem = () => {};
    // const removeItem = () => {};
    const clearItems = () => setCartItems([]);



 return (
    <CartContext.Provider value={{ sideBarToggle, setSideBarToggle, addItem, removeItem, cartItems, clearItems, totalQuantity, totalCost}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;



