const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;


initialState = {
    name: "George",
    address: {
      state: "Lagos",
      city: "Ikoyi",
      street: "33, Lagos",
    },
  };

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet=(street)=> {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
        return produce(state, (draft)=>{
            draft.address.street = action.payload
        })
    //   return{
    //       ...state,
    //       address: {
    //           ...state.address,
    //           state: action.payload,
    //       }
    //   }        
    default:
        return state
  }
};

const store = createStore(reducer);
console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() =>{
    console.log('updated State', store.getState())
});

store.dispatch(updateStreet("33, Ikoyi Road"));

unsubscribe();
