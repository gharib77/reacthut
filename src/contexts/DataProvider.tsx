import React, { ReactNode, useEffect, useReducer } from 'react'
import { Personne, UserState1 } from '../interfaces/interfaces'
import { DataContext } from './DataContext'
import { userReducer } from './userReducer'
import axios from "axios"
import data from '../db.json'
type props={
  children:ReactNode
}
// const initialState:StatePost = {
//   posts: [],
//   compteur: 0
// };
// const initialState:UserState = {
//   users: [],
// };
const initialState:UserState1 = {
  users: [],
};


export const DataProvider = ({children}:props) => {
  useEffect(()=>{
    const getUsers= async ()=>{
      const res:Personne[]=data.users
      dispatch({
        type: 'LISTDATA',
        payload:{...initialState,users:[...res]},
      })
    }
    getUsers()
  },[])
  /*useEffect(()=>{
    const getPosts = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data:Post[] = await res.data
    dispatch({
      type: 'LISTDATA',
      payload:{...initialState,posts:[...data],compteur:34},
    })
  }
    getPosts()
  },[])*/
  const [state,dispatch] = useReducer(userReducer,initialState)
  return (
    <>
    {state.users.length >0 && (
    <DataContext.Provider value={{state,dispatch}}>
      {children}
    </DataContext.Provider>
    )}
    </>
    
  )
}


