// import React from 'react'
import { useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { fetchUsers } from './userSlice'

const UserView = () => {
    const user = useAppSelector(state =>state.user)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
  return (
    <div>
      <h2>List of users</h2>
      {
        user.loading ? <div>loading...</div>: null
      }
      {
        !user.loading && user.error ? <div>Error: {user.error}</div>: null
      }

      {
        !user.loading && user.users.length ? (
            <ul>
                {
                    user.users.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        ):null
      }

    </div>
  )
}

export default UserView
