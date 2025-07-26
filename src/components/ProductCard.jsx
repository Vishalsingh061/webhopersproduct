import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-md bg-white p-4 w-full shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-gray-500">Category: {product.category}</p>
            <p className="text-sm">Rating: {product.rating} ⭐</p>
            <p className="text-green-600 font-semibold mt-2">${product.price}</p>
        </div>
    );
};

export default ProductCard;