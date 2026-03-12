import React, { useState } from 'react'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import OrderConfirmation from './components/OrderConfirmation.jsx'


function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name)
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemName) => {
    setCartItems(cartItems.filter(item => item.name !== itemName))
  }

  const updateQuantity = (itemName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemName)
    } else {
      setCartItems(cartItems.map(item =>
        item.name === itemName ? { ...item, quantity } : item
      ))
    }
  }

  const confirmOrder = () => {
    setOrderConfirmed(true)
  }

  const newOrder = () => {
    setCartItems([])
    setOrderConfirmed(false)
    setIsCartOpen(false)
  }

  if (orderConfirmed) {
    return <OrderConfirmation cartItems={cartItems} onNewOrder={newOrder} />
  }

  return (
    <div className="bg-rose-50 min-h-screen">
      <Home 
        onAddToCart={addToCart}
        cartItemsCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onConfirmOrder={confirmOrder}
        />
      )}
    </div>
  )
}

export default App
