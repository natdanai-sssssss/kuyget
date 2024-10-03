import { createSlice } from '@reduxjs/toolkit'; 

 

const initialState = [ 
]; 

 

const productSlice = createSlice({ 

  name: 'products', 

  initialState, 

  reducers: { 

    addProduct: (state, action) => { 

      state.push(action.payload); 

    }, 

    removeProduct: (state, action) => { 

      return state.filter(product => product.id !== action.payload); 

    }, 

  }, 

}); 

 

// สร้าง action creators 

export const { addProduct, removeProduct } = productSlice.actions; 

 

// สร้าง reducer 

export default productSlice.reducer; 