import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, filterByRating } from '../redux/productsSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { selectedCategory, selectedRating } = useSelector(state => state.products);

    const categories = ['Electronics', 'Apparel', 'Books'];
    const ratings = [3, 4, 5];

    return (
        <div className="w-60 p-4 bg-white rounded-md shadow h-fit">
            <h3 className="font-bold mb-2">Filter by Category</h3>
            <ul>
                {categories.map(category => (
                    <li
                        key={category}
                        className={`cursor-pointer hover:underline ${selectedCategory === category ? 'font-bold' : ''}`}
                        onClick={() => dispatch(filterByCategory(category))}
                    >
                        {category}
                    </li>
                ))}
            </ul>

            <h3 className="font-bold mt-4 mb-2">Filter by Rating</h3>
            <ul>
                {ratings.map(rating => (
                    <li
                        key={rating}
                        className={`cursor-pointer hover:underline ${selectedRating === rating ? 'font-bold' : ''}`}
                        onClick={() => dispatch(filterByRating(rating))}
                    >
                        {rating}+ stars
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;