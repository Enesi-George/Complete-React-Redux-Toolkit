import { createSlice, PayloadAction }from "@reduxjs/toolkit";

type initialState ={
  numOfCakes: number
}

const initialState: initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});
// one good thing about createSlice defined above is that it create actioncreator and reducer behind the scene. so we dont need writing them.

export default cakeSlice.reducer; //behind the scene,
export const {ordered, restocked} = cakeSlice.actions;
// const createSlice = require('@reduxjs/toolkit').createSlice

// const initialState = {
//     numOfCakes : 10,
// }

// const cakeSlice = createSlice({
//     name: 'cake',
//     initialState,
//     reducers: {
//         ordered:(state)=>{
//             state.numOfCakes--
//         },
//         restocked:(state, action)=>{
//             state.numOfCakes += action.payload
//         },
//     },

// })

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions
