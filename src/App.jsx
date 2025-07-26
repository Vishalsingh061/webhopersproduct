import React from 'react';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="min-h-screen p-4 flex gap-6 bg-gray-100">
      <Sidebar />
      <ProductList />
    </div>
  );
};

export default App;