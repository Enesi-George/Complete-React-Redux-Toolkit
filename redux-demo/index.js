 const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applymiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


//ACTION: descriobe what should or what hapeen in the app

//ACTION TYPE
//for cake
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
//for icecream
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
// ACTION CREATOR FUNCTION
//for cake
function orderCake() {
  return {
    type: CAKE_ORDERED,
    // quantity: 1,
  };
}
function cakeRestocked() {
  return {
    type: CAKE_RESTOCKED,
    payload: 1,
  };
}

//for icecream
function icecream0rdered() {
  return {
    type: ICECREAM_ORDERED,
  };
}

function icecreamRestocked(qty) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  };
}

//Reducer: it specify how application state changes or update in response to action.
//two argument is required be4 writing reducer which are the previous state for example /(previousState, action) = newState/

const initialCakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //keep memory of previous state
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const initialIcecreamState = {
  numOfIcecream: 20,
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, //keep memory of previous state
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    case CAKE_ORDERED: //decrementing the numboficream when cake is ordered.[ we can only call other action and cannot call the state of the action.]
      return{
        ...state, 
        numOfIcecream: state.numOfIcecream - 1
      }
    default:
      return state;
  }
};

//  Store: is responsible for holding the application state coming from reducer(either initalstate, changedstate or updatedstate) and the action respectively.
//below is the required responsiblities with step
//1. store Holds application state
//2. it allows access to the state using getstate()
//3. it allows state to be updated via dispatch(action)
//4.it allow our js app to register listeners the suscribe method suscribe(listener)
//5.it allow our js app to also unsuscrpte to the state via function returned by subscribe(listerner)

//The code

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// const store = createStore(rootReducer, applymiddleware(logger));
const store = createStore(rootReducer);

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() =>{
  console.log("Update State", store.getState())
});

const actions = bindActionCreators(
  { orderCake, cakeRestocked, icecream0rdered, icecreamRestocked },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.cakeRestocked(3);
actions.icecream0rdered();
actions.icecream0rdered();
actions.icecream0rdered();
actions.icecreamRestocked(3);

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(cakeRestocked(3))
// store.dispatch(cakeRestocked(3))

unsubscribe();
