import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedCategory: '',
    selectedRating: 0,
    selectedPriceRange: [0, 500]
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        filterByCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        filterByRating: (state, action) => {
            state.selectedRating = action.payload;
        },
        filterByPriceRange: (state, action) => {
            state.selectedPriceRange = action.payload;
        }
    }
});

export const { setProducts, filterByCategory, filterByRating, filterByPriceRange } = productsSlice.actions;
export default productsSlice.reducer;
