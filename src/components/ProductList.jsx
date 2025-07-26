import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productsSlice';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
