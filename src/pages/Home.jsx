import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const dispatch = useDispatch();
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Products</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <ProductList />
        </div>
      </main>
    </div>
  );
};

export default Home;
