import { createContext, useState } from "react";


const CartContext = createContext({})

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // const { token } = useAuth()
  const cartQuantity = cart.length

  const cartTotalValue = cart.reduce((acc, current) => {
    return acc + current.price * current.quantiy
  }, 0)

  function addItemToCart(item) {
    const itemIsAlreadyInCart = cart.find(cartItem => cartItem.id === item.id)

    if (itemIsAlreadyInCart) {
      setCart(state => cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count + item.count }
        : cartItem
      )
    } else {
      setCart([...cart, { ...item, count: item.count }])
    }
  }

  function removeItemInCart(id) {
    const itemIsAlreadyInCart = cart.find(cartItem => cartItem.id === item.id)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      cartQuantity,
      cartTotalValue,
      addItemToCart,
      removeItemInCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}