import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 p-6 w-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <span className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm">
                    ⭐ {product.rating}
                </span>
            </div>
            <h2 className="font-bold text-xl text-gray-800 dark:text-white mb-2 line-clamp-2">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 flex items-center gap-2">
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{product.category}</span>
            </p>
            <div className="flex justify-between items-center mt-4">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${product.price}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;