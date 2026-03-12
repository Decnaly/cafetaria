import React from 'react';

function Cart({ cartItems, onClose, onRemoveItem, onUpdateQuantity, onConfirmOrder }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center z-50" onClick={onClose}>
      <div className="bg-white w-full max-w-md h-full overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <img src="./assets/images/illustration-empty-cart.svg" alt="" />
              <p className="text-gray-500 text-lg font-medium">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">Add some delicious desserts to get started!</p>
            </div>
          ) : (
            <div className="space-y-4 w-full">
              {cartItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <button
                      onClick={() => onRemoveItem(item.name)}
                      className="text-red-600 hover:text-red-700 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}
                        className="border border-gray-300 w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                        className="border border-gray-300 w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                      <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Confirm */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-700">Order Total:</span>
              <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onConfirmOrder}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
