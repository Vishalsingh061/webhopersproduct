import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('ProductCard', () => {
    const mockProduct = {
        id: 1,
        name: 'Test Product',
        price: 99.99,
        category: 'Electronics',
        rating: 4,
        image: 'test-image.jpg'
    };

    test('renders product name', () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    test('renders product price', () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText('₹99.99')).toBeInTheDocument();
    });

    test('renders product category', () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText(/Electronics/)).toBeInTheDocument();
    });

    test('renders sale badge for products with id divisible by 3', () => {
        render(<ProductCard product={{ ...mockProduct, id: 3 }} />);
        expect(screen.getByText('SALE')).toBeInTheDocument();
    });

    test('renders in stock badge for products with even id', () => {
        render(<ProductCard product={{ ...mockProduct, id: 2 }} />);
        expect(screen.getByText('In Stock')).toBeInTheDocument();
    });
});
