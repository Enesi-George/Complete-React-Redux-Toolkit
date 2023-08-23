import { useState } from 'react'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
    const [value, setValue]= useState(1)
    const numOfIcecream = useAppSelector((state)=>state.icecream.numOfIcecream)
    const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of icecream -{numOfIcecream}</h2>
      <button onClick={()=> dispatch(ordered())} >Order icecream</button>
        <input type="number" value = {value} onChange={(e)=> setValue(parseInt(e.target.value))} />
      <button onClick={()=> dispatch(restocked(value))}>Restock icecream</button>
    </div>
  )
}

export default IcecreamView
