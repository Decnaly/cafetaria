import React from 'react';
import data from '../data.js';

function Home({ onAddToCart, cartItemsCount, onOpenCart }) {
  return (
    <div className="home-container min-h-screen  bg-rose-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between  items-center  mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Desserts</h1>
          </div>
          <button
            onClick={onOpenCart}
            className="relative bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Your Cart
            {cartItemsCount > 0 && (
              <span className="ml-2 bg-red-800 px-2 py-1 rounded-full text-sm">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-4">
                <img
                  src={item.image.desktop}
                  alt={item.name}
                  className="w-full rounded-lg object-cover h-50 md:h-40"
                />
                <button
                  onClick={() => onAddToCart(item)}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-red-600 px-8 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition border-2 border-red-600"
                >
                  Add to Cart
                </button>
              </div>
              <p className="text-sm text-gray-600">{item.category}</p>
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-red-600 font-bold text-lg">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;