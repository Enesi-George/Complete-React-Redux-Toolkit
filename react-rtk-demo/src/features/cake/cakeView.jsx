import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered,restocked } from './cakeSlice'

const CakeView = () => {
    //the useselector only accept a function
    const numOfCakes =useSelector((state)=> state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order cake</button>
      <button onClick = {()=> dispatch(restocked(3))}>Restock cakes</button>
    </div>
  )
}

export default CakeView
