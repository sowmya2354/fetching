import { createSlice } from '@reduxjs/toolkit';

const initialCakeState = {
  numberOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState: initialCakeState,
  reducers: {
    // This reducer will be called when we sell a cake
    sellCake: (state, action) => {
      state.numberOfCakes -= action.payload;
    },
    // This reducer will be called when we add a new cake to the shop
    addCake: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export const { sellCake, addCake } = cakeSlice.actions;

export default cakeSlice.reducer;
