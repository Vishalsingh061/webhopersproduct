import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, selectedCategory, selectedRating } = useSelector(state => state.products);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => dispatch(setProducts(data)));
    }, [dispatch]);

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
        const ratingMatch = selectedRating ? product.rating >= selectedRating : true;
        return categoryMatch && ratingMatch;
    });

    return (
        <div className="flex-1">
            {filteredProducts.length === 0 ? (
                <div className="flex items-center justify-center h-64 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your filters.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
