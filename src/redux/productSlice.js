import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedCategory: '',
    selectedRating: 0
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
        }
    }
});

export const { setProducts, filterByCategory, filterByRating } = productsSlice.actions;
export default productsSlice.reducer;