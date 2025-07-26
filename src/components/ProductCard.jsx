import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300">
            {/* SALE badge */}
            {product.id % 3 === 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                </div>
            )}

            {/* Image */}
            <div className="p-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-2"
                />
                <div className="text-yellow-500 font-semibold">⭐ {product.rating}</div>
            </div>

            {/* Info */}
            <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Category: {product.category}
                </p>

                {/* In stock label */}
                {product.id % 2 === 0 && (
                    <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded mb-2">
                        In Stock
                    </span>
                )}

                {/* Price and button */}
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-lg font-bold text-red-600">₹{product.price}</p>
                    <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
