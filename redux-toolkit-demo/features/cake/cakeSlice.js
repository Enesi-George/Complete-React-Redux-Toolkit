const createSlice = require('@reduxjs/toolkit').createSlice


const initialState ={
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered:(state)=>{  
            state.numOfCakes--
        },
        restocked:(state,action)=>{
            state.numOfCakes += action.payload
        }
    }

})
// one good thing about createSlice defined above is that it create actioncreator and reducer behind the scene. so we dont need writing them.

module.exports = cakeSlice.reducer //behind the scene, 
module.exports.cakeActions = cakeSlice.actions
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