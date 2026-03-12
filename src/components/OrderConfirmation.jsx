import React from 'react';

function OrderConfirmation({ cartItems, onNewOrder }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        {/* Confirmation Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed</h1>
          <p className="text-gray-600">We hope you enjoy your meal!</p>
        </div>

        {/* Order Details Box */}
        <div className="bg-rose-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary ({itemCount} items)</h2>
          <div className="space-y-3">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center pb-3 border-b border-rose-200 last:border-b-0">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">x{item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="bg-gray-900 text-white rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg">Order Total</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* New Order Button */}
        <button
          onClick={onNewOrder}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
