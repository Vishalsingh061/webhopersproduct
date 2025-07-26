import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { products, selectedCategory, selectedRating, selectedPriceRange } = useSelector(state => state.products);

    const filteredProducts = products.filter(product => {
        const price = Number(product.price);
        const minPrice = selectedPriceRange[0];
        const maxPrice = selectedPriceRange[1];

        const matchCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchRating = selectedRating ? product.rating >= selectedRating : true;
        const matchPrice = price >= minPrice && price <= maxPrice;

        return matchCategory && matchRating && matchPrice;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.length === 0 ? (
                <p className="text-lg text-center col-span-full">No products found for selected filters.</p>
            ) : (
                filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
};

export default ProductList;
