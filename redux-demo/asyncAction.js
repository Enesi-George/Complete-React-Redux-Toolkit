const axios= require('axios');
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default


//ACTION
    //action type
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED"
    //action creator
const fetchUserRequested=()=>{
    return {
        type: FETCH_USER_REQUESTED
    }
}
const fetchUserSuccess = (user) =>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

const fetchUserFailed = (error) =>{
    return{
        type: FETCH_USER_FAILED,
        payload: error
    }
}

const initialState={
    loading : false,
    user:[],
    error: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQUESTED:
            return{
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USER_FAILED:
            return{
                ...state,
                loading: false,
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}

const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUserRequested())
        axios.get("https://jsonplaceholder.typicode.com/user").then(response =>{
            //response.data is the user
            const users = response.data.map((user)=> user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch((error) =>{
            //error.message is the error message
            dispatch(fetchUserFailed(error.message))
        })
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware ))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())