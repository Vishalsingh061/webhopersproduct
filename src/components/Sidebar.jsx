import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filterByCategory,
    filterByRating,
    filterByPriceRange
} from '../redux/slices/productSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const selectedRating = useSelector((state) => state.products.selectedRating);
    const selectedPriceRange = useSelector((state) => state.products.selectedPriceRange);

    const [price, setPrice] = useState(selectedPriceRange[1] || 500);

    const categories = ['All', 'Electronics', 'Books', 'Apparel'];
    const ratings = [5, 4, 3];

    const handleCategoryChange = (category) => {
        dispatch(filterByCategory(category === 'All' ? '' : category));
    };

    const handleRatingChange = (rating) => {
        dispatch(filterByRating(rating));
    };

    const clearRatingFilter = () => {
        dispatch(filterByRating(3));
    };

    const handlePriceChange = (e) => {
        const newPrice = parseInt(e.target.value);
        setPrice(newPrice);
        dispatch(filterByPriceRange([0, newPrice]));
    };

    return (
        <div className="bg-slate-800 text-white w-full p-4 rounded-lg shadow-md space-y-6">
            <h2 className="text-xl font-bold border-b pb-2">Filters</h2>

            {/* Category Filter */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className="bg-slate-700 hover:bg-slate-600 text-sm px-3 py-1 rounded"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rating Filter */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Rating</h3>
                <div className="space-y-1 text-sm">
                    {ratings.map((rate) => (
                        <label key={rate} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="rating"
                                value={rate}
                                checked={selectedRating === rate}
                                onChange={() => handleRatingChange(rate)}
                            />
                            <span>{rate} Stars & above</span>
                        </label>
                    ))}
                </div>
                <button
                    onClick={clearRatingFilter}
                    className="mt-2 text-xs text-blue-400 hover:underline"
                >
                    Clear Rating Filter
                </button>
            </div>

            {/* Price Filter */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Max Price: <span className="text-green-400">₹{price}</span></h3>
                <input
                    type="range"
                    min="0"
                    max="500"
                    step="1"
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full accent-red-500"
                />
            </div>
        </div>
    );
};

export default Sidebar;
