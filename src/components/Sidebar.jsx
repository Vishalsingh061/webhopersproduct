import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, filterByRating } from '../redux/slices/productSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { selectedCategory, selectedRating } = useSelector(state => state.products);

    const categories = ['Electronics', 'Apparel', 'Books'];
    const ratings = [3, 4, 5];

    return (
        <div className="w-72 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-fit sticky top-4 transition-colors duration-200">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Filter by Category</h3>
                <ul className="space-y-2">
                    {categories.map(category => (
                        <li
                            key={category}
                            className={`cursor-pointer p-2 rounded-md transition-all ${selectedCategory === category
                                    ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                                }`}
                            onClick={() => dispatch(filterByCategory(category))}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Filter by Rating</h3>
                <ul className="space-y-2">
                    {ratings.map(rating => (
                        <li
                            key={rating}
                            className={`cursor-pointer p-2 rounded-md transition-all flex items-center gap-2 ${selectedRating === rating
                                    ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                                }`}
                            onClick={() => dispatch(filterByRating(rating))}
                        >
                            <span>{rating}+ </span>
                            <span className="text-yellow-400">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;