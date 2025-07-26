import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import ProductList from '../components/ProductList/ProductList';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => dispatch(setProducts(data)));
    }, [dispatch]);

    return (
        <div className="flex">
            <Sidebar />
            <ProductList />
        </div>
    );
};

export default Home;
