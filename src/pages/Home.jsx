import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ChevronsLeft } from 'lucide-react';

const Home = () => {
  const dispatch = useDispatch();
  const { darkMode, toggleDarkMode } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'}`}>
      {/* Header */}
      <header className="bg-red-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(prev => !prev)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold">Products Explorer</h1>
        </div>
        <button
          onClick={toggleDarkMode}
          className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            transition-all duration-300
            ${sidebarOpen ? 'w-64' : 'w-0'}
            overflow-hidden
            border-r
            ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}
          `}
        >
          {sidebarOpen && (
            <div className="p-4 h-full flex flex-col justify-between">
              <div>
                <Sidebar />
              </div>
              <div className="mt-4">
                <button
                  className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  <ChevronsLeft size={20} />
                  Collapse
                </button>
              </div>
            </div>
          )}
        </aside>

        {/* Product Section */}
        <section className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <ProductList />
        </section>
      </div>
    </div>
  );
};

export default Home;
