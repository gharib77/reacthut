import React, { ReactNode, useEffect, useReducer } from 'react'
import { Post, StatePost } from '../interfaces/interfaces'
import { DataContext } from './DataContext'
import { userReducer } from './userReducer'
import axios from "axios"

type props={
  children:ReactNode
}
const initialState:StatePost = {
  posts: [],
  compteur: 0
};


export const DataProvider = ({children}:props) => {
  useEffect(()=>{
    const getPosts = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data:Post[] = await res.data
    dispatch({
      type: 'LISTDATA',
      payload:{...initialState,posts:[...data],compteur:34},
    })
  }
    getPosts()
  },[])
  const [state,dispatch] = useReducer(userReducer,initialState)
  return (
    <>
    {state.posts.length >0 && (
    <DataContext.Provider value={{state,dispatch}}>
      {children}
    </DataContext.Provider>
    )}
    </>
    
  )
}


